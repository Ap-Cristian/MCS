import { Scene } from './scene';
import { Camera } from './camera';
import { FPSCounter } from '../helpers/fpsCounter';
import { CellRenderer } from '../renderers/cellRenderer';
import { SuzanneRenderer } from '../renderers/suzanneRenderer';
import { BoundingBoxRenderer } from '../renderers/boundingBoxRenderer';

export var device: GPUDevice;
const FRAME_ERROR_PROBE_ONLY_ONCE:boolean = true;

export class WebGpuRenderer {
    private initSuccess:                boolean = false;

    private renderPassDescriptor:       GPURenderPassDescriptor;
    private presentationFormat:         GPUTextureFormat;
    private context:                    GPUCanvasContext;

    private cellRenderer:CellRenderer;
    private suzanneRenderer:SuzanneRenderer;
    private boundingBoxRenderer:BoundingBoxRenderer;
    private cameraProjectionArray   = new Float32Array(16);
    
    private frameErrorProbed:boolean = false;
    private renderPassColorAttachment: GPURenderPassColorAttachment;
    private fpsCounter:FPSCounter = new FPSCounter();

    constructor() {
    }

    public async init(canvas: HTMLCanvasElement): Promise<boolean> {
        if (!canvas) {
            console.log('missing canvas!')
            return false;
        }

        const adapter = await navigator.gpu.requestAdapter();

        device = await adapter.requestDevice();
        if (!device) {
            console.log('found no gpu device!')
            return false;
        }

        this.context = (canvas.getContext('webgpu') as unknown) as GPUCanvasContext;
        this.presentationFormat = navigator.gpu.getPreferredCanvasFormat();
        this.context.configure({
            device,
            format: this.presentationFormat,
            alphaMode: 'premultiplied',
        });


        this.renderPassDescriptor = {
            colorAttachments: [
              {
                view: undefined, // Assigned later
          
                clearValue: { r: 0.1, g: 0.1, b: 0.1, a: 1.0 },
                loadOp: 'clear',
                storeOp: 'store',
              },
            ],
            depthStencilAttachment: {
              view: this.depthTextureView(canvas),
              depthLoadOp: 'clear',
              depthClearValue: 1.0,
              depthStoreOp: 'store',
              stencilLoadOp: 'clear',
              stencilClearValue: 0,
              stencilStoreOp: 'store',
            },
          };



        this.initSuccess = true;
        return this.initSuccess;
    }

    public InitUBOs(scene:Scene, camera:Camera){
        this.renderPassColorAttachment = (this.renderPassDescriptor.colorAttachments as [GPURenderPassColorAttachment])[0];

        this.cellRenderer = new CellRenderer();
        this.suzanneRenderer = new SuzanneRenderer();
        this.boundingBoxRenderer = new BoundingBoxRenderer();
        
        this.suzanneRenderer.initUniforms(scene, camera);
        this.boundingBoxRenderer.initUniforms(scene,camera);
        scene.spawnInitialCells(0.3);

        this.cellRenderer.initUniforms(scene, camera);
    }

    public updateMain(canvas: HTMLCanvasElement) {
        if (!this.initSuccess) {
            console.error("[ERR] Failed to init renderer!\n Check 'Update' function");
            return;
        }
    }

    public frameMain(camera: Camera, scene: Scene) {
        if(this.fpsCounter.SkipFrame){
            this.fpsCounter.start();
            return;
        }
        
        if(!this.frameErrorProbed){
            device.pushErrorScope("validation")
            device.pushErrorScope("out-of-memory")
            device.pushErrorScope("internal")
        }

        if (!this.initSuccess) {
            console.error("[ERR] Failed to init renderer!\n Check 'Frame' function");
            return;
        }
        
        this.cameraProjectionArray.set(camera.getCameraViewProjMatrix(), 0);
        var gpuCurrentTexture = this.context.getCurrentTexture();
        this.renderPassColorAttachment.view = gpuCurrentTexture.createView();

        const commandEncoder = device.createCommandEncoder();
        const passEncoder = commandEncoder.beginRenderPass(this.renderPassDescriptor);
        
        this.cellRenderer.frame(passEncoder, this.cameraProjectionArray);
        this.suzanneRenderer.frame(passEncoder, this.cameraProjectionArray);
        this.boundingBoxRenderer.frame(passEncoder, this.cameraProjectionArray);
        
        passEncoder.end();
        device.queue.submit([commandEncoder.finish()]);

        if(!this.frameErrorProbed){
            //temp error handling
            device.popErrorScope().then((err)=>{
                if(err)
                    console.error(err?.message);
                if(FRAME_ERROR_PROBE_ONLY_ONCE)
                    this.frameErrorProbed = true;
            })
            device.popErrorScope().then((err)=>{
                if(err)
                    console.error(err?.message);
                if(FRAME_ERROR_PROBE_ONLY_ONCE)
                    this.frameErrorProbed = true;
            })
            device.popErrorScope().then((err)=>{
                if(err)
                    console.error(err?.message);
                if(FRAME_ERROR_PROBE_ONLY_ONCE)
                    this.frameErrorProbed = true;
            })
        }

        this.fpsCounter.frame();
    }

    private depthTextureView(canvas: HTMLCanvasElement) {
        return device.createTexture({
            size: [
                canvas.clientWidth * window.devicePixelRatio,
                canvas.clientHeight * window.devicePixelRatio,
            ],
            format: 'depth24plus-stencil8',
            usage: GPUTextureUsage.RENDER_ATTACHMENT,
        }).createView();
    }

    public UpdateRenderPassDescriptor(canvas: HTMLCanvasElement) {
        (this.renderPassDescriptor.depthStencilAttachment as GPURenderPassDepthStencilAttachment).view = this.depthTextureView(canvas); 
    }
}