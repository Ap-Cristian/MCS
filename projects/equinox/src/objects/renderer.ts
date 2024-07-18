import { Scene } from './scene';
import { Camera } from './camera';
import { FPSCounter } from './fpsCounter';
import { Drawable } from '../base-classes/drawable';
import { McsObject } from '../base-classes/objectBase';
import { CellShaderResources } from '../res/cell.res';
import { CellRenderPipeline } from '../res/render-pipelines/cell.render.pipeline';
// import { CellRenderer } from '../renderers/cellRenderer';
// import { SuzanneRenderer } from '../renderers/OBSOLETE_suzanneRenderer';
// import { BoundingBoxRenderer } from '../renderers/OBSOLETE_boundingBoxRenderer';

export var adapter: GPUAdapter;
export var device: GPUDevice;
const FRAME_ERROR_PROBE_ONLY_ONCE: boolean = true;

export interface RendererParams {
    scenes: Array<Scene>,
    activeSceneIndex: number
}

export class Renderer {
    private _scenes: Scene[];
    private _activeSceneIdx: number = 0;

    private _drawables: Drawable[] = new Array<Drawable>();
    private _cameraProjectionBO: GPUBuffer;

    // private initSuccess:                boolean = false;

    // private renderPassDescriptor:       GPURenderPassDescriptor;
    // private presentationFormat:         GPUTextureFormat;

    // private canvasLayers:               HTMLCanvasElement[]; // 0 - WebGPU - canvas, 1 - framerate canvas
    // private webgpuContext:              GPUCanvasContext;
    // private framerateContext:           CanvasRenderingContext2D

    // private cellRenderer:CellRenderer;
    // private suzanneRenderer:SuzanneRenderer;
    // private boundingBoxRenderer:BoundingBoxRenderer;
    // private cameraProjectionArray   = new Float32Array(16);

    // private frameErrorProbed:boolean = false;
    // private renderPassColorAttachment: GPURenderPassColorAttachment;
    // private fpsCounter:FPSCounter = new FPSCounter();

    // constructor() {
    // }
    constructor(rendererParams: RendererParams) {
        this._scenes = rendererParams.scenes;

        this.initGpuDevice().then(() => {
            if (rendererParams.activeSceneIndex >= 0 && rendererParams.activeSceneIndex < this._scenes.length) {
                this._activeSceneIdx = rendererParams.activeSceneIndex;
                this.updateCamera(); // might not be needed
                this.createDrawablesFromSceneObjects();
            }
            else {
                console.error("Renderer: Active scene out of scene array range.");
                return;
            }
        });
    }

    private async initGpuDevice() {
        if (navigator.gpu) {
            const adapter = await navigator.gpu.requestAdapter();
            device = await adapter.requestDevice();
        }
        else{
            console.error("WebGPU is not available for your browser. Please check compatibility.")
        }
    }

    private updateCamera() {
        var activeSceneCamera = this._scenes[this._activeSceneIdx].ActiveCamera;
        var _projArr = activeSceneCamera.getProjectionArray();

        device.queue.writeBuffer(
            this._cameraProjectionBO,
            0,
            _projArr.buffer,
            _projArr.byteLength,
            _projArr.byteOffset
        )

    }

    private updateObjects() {

    }

    private update() {
        this.updateCamera();
        // this.updateObjectsDrawables();
    }

    private createDrawablesFromSceneObjects() {
        var activeScene = this._scenes[this._activeSceneIdx];
        var activeSceneObjects = activeScene.Objects;
        var currentDrawable: Drawable;


        if (activeSceneObjects) {
            activeSceneObjects.forEach((object: McsObject) => {
                // transform to drawables
                switch (object.Type) {
                    case "cell": {
                        currentDrawable = new Drawable({
                            _cameraProjectionBO: this._cameraProjectionBO,
                            _vertecies: CellShaderResources.getInstance().vertexArray,
                            _renderPipeline: CellRenderPipeline.GetInstance().Pipeline
                        }, object);
                        break;
                    }
                    default: {
                        break;
                    }
                }
            });
        }
    }
    // public async init(canvasLayers: HTMLCanvasElement[]): Promise<boolean> {
    //     if (canvasLayers.length == 0) {
    //         console.log('missing canvases!')
    //         return false;
    //     }

    //     const adapter = await navigator.gpu.requestAdapter();

    //     device = await adapter.requestDevice();
    //     if (!device) {
    //         console.log('found no gpu device!')
    //         return false;
    //     }

    //     this.webgpuContext = (canvasLayers[0].getContext('webgpu') as unknown) as GPUCanvasContext;
    //     this.framerateContext = (canvasLayers[1].getContext('2d') as unknown) as CanvasRenderingContext2D;
    //     this.canvasLayers = canvasLayers;

    //     this.initFramerateFont();

    //     this.presentationFormat = navigator.gpu.getPreferredCanvasFormat();


    //     this.webgpuContext.configure({
    //         device,
    //         format: this.presentationFormat,
    //         alphaMode: 'premultiplied',
    //     });


    //     this.renderPassDescriptor = {
    //         colorAttachments: [
    //           {
    //             view: undefined, // Assigned later

    //             clearValue: { r: 0.1, g: 0.1, b: 0.1, a: 1.0 },
    //             loadOp: 'clear',
    //             storeOp: 'store',
    //           },
    //         ],
    //         depthStencilAttachment: {
    //           view: this.depthTextureView(canvasLayers[0]),
    //           depthLoadOp: 'clear',
    //           depthClearValue: 1.0,
    //           depthStoreOp: 'store',
    //           stencilLoadOp: 'clear',
    //           stencilClearValue: 0,
    //           stencilStoreOp: 'store',
    //         },
    //       };



    //     this.initSuccess = true;
    //     return this.initSuccess;
    // }

    // public InitUBOs(scene:Scene, camera:Camera){
    //     this.renderPassColorAttachment = (this.renderPassDescriptor.colorAttachments as [GPURenderPassColorAttachment])[0];

    //     this.cellRenderer = new CellRenderer();
    //     this.suzanneRenderer = new SuzanneRenderer();
    //     this.boundingBoxRenderer = new BoundingBoxRenderer();

    //     this.suzanneRenderer.initUniforms(scene, camera);
    //     this.boundingBoxRenderer.initUniforms(scene,camera);
    //     scene.spawnInitialCells(0.3);

    //     this.cellRenderer.initUniforms(scene, camera);
    // }

    // public updateMain(canvas: HTMLCanvasElement) {
    //     if (!this.initSuccess) {
    //         console.error("[ERR] Failed to init renderer!\n Check 'Update' function");
    //         return;
    //     }
    // }

    // public frameMain(camera: Camera, scene: Scene) {
    //     if(this.fpsCounter.SkipFrame){
    //         this.fpsCounter.start();
    //         return;
    //     }

    //     if(!this.frameErrorProbed){
    //         device.pushErrorScope("validation")
    //         device.pushErrorScope("out-of-memory")
    //         device.pushErrorScope("internal")
    //     }

    //     if (!this.initSuccess) {
    //         console.error("[ERR] Failed to init renderer!\n Check 'Frame' function");
    //         return;
    //     }

    //     this.cameraProjectionArray.set(camera.getCameraViewProjMatrix(), 0);
    //     var gpuCurrentTexture = this.webgpuContext.getCurrentTexture();
    //     this.renderPassColorAttachment.view = gpuCurrentTexture.createView();

    //     const commandEncoder = device.createCommandEncoder();
    //     const passEncoder = commandEncoder.beginRenderPass(this.renderPassDescriptor);

    //     this.cellRenderer.frame(passEncoder, this.cameraProjectionArray);
    //     this.suzanneRenderer.frame(passEncoder, this.cameraProjectionArray);
    //     this.boundingBoxRenderer.frame(passEncoder, this.cameraProjectionArray);

    //     passEncoder.end();
    //     device.queue.submit([commandEncoder.finish()]);

    //     if(!this.frameErrorProbed){
    //         //temp error handling
    //         device.popErrorScope().then((err)=>{
    //             if(err)
    //                 console.error(err?.message);
    //             if(FRAME_ERROR_PROBE_ONLY_ONCE)
    //                 this.frameErrorProbed = true;
    //         })
    //         device.popErrorScope().then((err)=>{
    //             if(err)
    //                 console.error(err?.message);
    //             if(FRAME_ERROR_PROBE_ONLY_ONCE)
    //                 this.frameErrorProbed = true;
    //         })
    //         device.popErrorScope().then((err)=>{
    //             if(err)
    //                 console.error(err?.message);
    //             if(FRAME_ERROR_PROBE_ONLY_ONCE)
    //                 this.frameErrorProbed = true;
    //         })
    //     }
    //     this.fpsCounter.frame();
    //     this.updateFramerateText(this.fpsCounter.Fps.toFixed(0));
    // }

    // private depthTextureView(canvas: HTMLCanvasElement) {
    //     return device.createTexture({
    //         size: [
    //             canvas.clientWidth * window.devicePixelRatio,
    //             canvas.clientHeight * window.devicePixelRatio,
    //         ],
    //         format: 'depth24plus-stencil8',
    //         usage: GPUTextureUsage.RENDER_ATTACHMENT,
    //     }).createView();
    // }

    // private updateFramerateText(newValue:string){
    //     this.framerateContext.clearRect(0,0,this.canvasLayers[1].width, this.canvasLayers[1].height); //clear
    //     this.framerateContext.fillText(newValue + " FPS", 0, 0);
    // }

    // private initFramerateFont(){
    //     this.canvasLayers[1].height = 24;

    //     this.framerateContext.font = '24px monospace';
    //     this.framerateContext.textBaseline = 'top';
    //     this.framerateContext.textAlign = 'left';
    //     this.framerateContext.fillStyle = 'white';
    //     this.framerateContext.fillText("", 55, 25);
    // }

    // public UpdateRenderPassDescriptor(canvas: HTMLCanvasElement) {
    //     (this.renderPassDescriptor.depthStencilAttachment as GPURenderPassDepthStencilAttachment).view = this.depthTextureView(canvas); 
    // }
}