import { Scene } from './objects/scene/scene';
import { Camera } from './objects/camera/camera';
import { CellRenderPipeline } from './objects/cell/cell.render.pipeline';
import { CellShaderContainer } from './containers/cell-shader.container';
import { NUMBER_OF_CELLS } from './engine';
import { Mat4, mat4, vec3 } from 'wgpu-matrix';

export var device: GPUDevice;
export var cameraUniformBuffer: GPUBuffer;
export var lightDataBuffer: GPUBuffer;
export var lightDataSize = 3 * 4 + 4; // vec3 size in bytes

const FRAME_ERROR_PROBE_ONLY_ONCE:boolean = true;

export class WebGpuRenderer {
    private isRendererInit:boolean = false;

    readonly swapChainFormat = 'bgra8unorm';
    private initSuccess: boolean = false;
    private renderPassDescriptor: GPURenderPassDescriptor;
    private uniformBindGroup: GPUBindGroup;
    private context: GPUCanvasContext;
    private presentationFormat: GPUTextureFormat;
    private presentationSize: number[];
    private cellRenderPipeline:GPURenderPipeline;
    
    private uniformBuffer:GPUBuffer;
    private colorBuffer:GPUBuffer;

    private cellsTransformMatrices:Float32Array = new Float32Array(NUMBER_OF_CELLS * 16);
    private MVPMatrices:Float32Array = new Float32Array(NUMBER_OF_CELLS * 16);
    private cellsRotationMatrices:Float32Array = new Float32Array();

    private verticesBuffer: GPUBuffer;


    private matrixSize = 4 * 16; // 4x4 matrix
    private cellShaderContainer:CellShaderContainer;

    private floatsPerVertex:number = (4 + 4 + 2);      // 3 for position, 3 for normal, 2 for uv, 3 for color
    private stride:number = this.floatsPerVertex * 4;  
    private verteciesBuffer:GPUBuffer;

    private depthTexture:GPUTexture;
    private frameErrorProbed:boolean = false;

    constructor() {
        this.cellShaderContainer = CellShaderContainer.getInstance();
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
        this.presentationSize = [
            canvas.clientWidth * devicePixelRatio,
            canvas.clientHeight  * devicePixelRatio,
        ];

        this.context.configure({
            device,
            format: this.presentationFormat,
            alphaMode: 'premultiplied',
        });

        this.depthTexture = device.createTexture({
            size: [canvas.width, canvas.height],
            format: 'depth24plus',
            usage: GPUTextureUsage.RENDER_ATTACHMENT,
          });

        this.renderPassDescriptor = {
            colorAttachments: [
              {
                view: undefined, // Assigned later
          
                clearValue: { r: 0.5, g: 0.5, b: 0.5, a: 1.0 },
                loadOp: 'clear',
                storeOp: 'store',
              },
            ],
            depthStencilAttachment: {
              view: this.depthTexture.createView(),
              depthLoadOp: 'clear',
              depthClearValue: 1.0,
              depthStoreOp: 'store',
              stencilLoadOp: 'clear',
              stencilClearValue: 0,
              stencilStoreOp: 'store',
            },
          };

        this.cellRenderPipeline = CellRenderPipeline.GetInstance().Pipeline

        cameraUniformBuffer = device.createBuffer({
            size: this.matrixSize,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
        });

        lightDataBuffer = device.createBuffer({
            size: lightDataSize,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
        });
        this.isRendererInit = true;
        return this.initSuccess = true;
    }

    public initCellsUniforms(scene:Scene, camera:Camera){
        if(!this.frameErrorProbed){
            device.pushErrorScope("validation")
            device.pushErrorScope("out-of-memory")
            device.pushErrorScope("internal")
        }

        var objects = scene.getObjects();
        var currentMatStep = 0;

        var cellsModelsTranformationMatrixes = new Array<Mat4>(NUMBER_OF_CELLS);
        for(let i = 0; i < NUMBER_OF_CELLS; i++){
            cellsModelsTranformationMatrixes[i] = objects[i].TransformMatrix;
        }

        currentMatStep = 0;
        var projectionAppliedResultMat = mat4.create();

        for(let i = 0; i < NUMBER_OF_CELLS; i++){
            mat4.multiply(camera.getCameraViewProjMatrix(), cellsModelsTranformationMatrixes[i], projectionAppliedResultMat);
            this.MVPMatrices.set(projectionAppliedResultMat, currentMatStep);
            currentMatStep += 4*4;
        }

        console.log("DEV_VIDEO_MEM_SIZE: ", device.limits.maxBufferSize)
        console.log("DEV_VIDEO_MEM_SIZE: ", device.limits.maxUniformBufferBindingSize)

        var uniformBindingsCount = 1024 > 4 * 16 * NUMBER_OF_CELLS ? 1024 : 4 * 16 * NUMBER_OF_CELLS

        this.uniformBuffer = device.createBuffer({
            size: 1024 > 4 * 16 * NUMBER_OF_CELLS ? 1024 : 4 * 16 * NUMBER_OF_CELLS, // MEM SIZE EXCEDED
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
        })
        
        var uniformBindGroupEntries:Iterable<GPUBindGroupEntry> = [
            {
                binding: 0,
                resource: {
                  buffer: this.uniformBuffer,
                },
            },
        ] as Iterable<GPUBindGroupEntry>;

        this.uniformBindGroup = device.createBindGroup({
            layout: this.cellRenderPipeline.getBindGroupLayout(0),
            entries: uniformBindGroupEntries
        });
        
        this.verticesBuffer = device.createBuffer({
            size: this.cellShaderContainer.vertexArray.length * this.stride, //wierd shit happening here
            usage: GPUBufferUsage.VERTEX,
            mappedAtCreation: true,
        });

        // console.log("VERTERX COUNT:" + this.cellShaderContainer.vertexArray.length)

        const mapping = new Float32Array(this.verticesBuffer.getMappedRange());
        var vertexByteOffset = 0;
        for (let i = 0; i < this.cellShaderContainer.vertexArray.length; i++) {
            var vert_X = this.cellShaderContainer.vertexArray[i].pos[0];
            var vert_Y = this.cellShaderContainer.vertexArray[i].pos[1];
            var vert_Z = this.cellShaderContainer.vertexArray[i].pos[2];

            mapping.set([vert_X, vert_Y, vert_Z, 1], vertexByteOffset);
            vertexByteOffset += 4;
            
            this.cellShaderContainer.vertexArray[i].norm.push(1)
            mapping.set(this.cellShaderContainer.vertexArray[i].norm, vertexByteOffset);
            vertexByteOffset += 4;
        }
        this.verticesBuffer.unmap();

        if(!this.frameErrorProbed){
            //temp error handling
            device.popErrorScope().then((err)=>{
                if(err)
                    console.error(err?.message);
            })
            device.popErrorScope().then((err)=>{
                if(err)
                    console.error(err?.message);
            })
            device.popErrorScope().then((err)=>{
                if(err)
                    console.error(err?.message);
            })
        }
    }

    public update(canvas: HTMLCanvasElement) {
        if (!this.initSuccess) {
            console.error("[ERR] Failed to init renderer!\n Check 'Update' function");
            return;
        }

        this.updateRenderPassDescriptor(canvas);
    }

    public frame(camera: Camera, scene: Scene) {
        if(!this.frameErrorProbed){
            device.pushErrorScope("validation")
            device.pushErrorScope("out-of-memory")
            device.pushErrorScope("internal")
        }

        if (!this.initSuccess) {
            console.error("[ERR] Failed to init renderer!\n Check 'Frame' function");
            return;
        }

        device.queue.writeBuffer(
            this.uniformBuffer,  //write to transformation buffer which is then used into the transformation bind group trough the entries var on line 98 
            0,
            this.MVPMatrices.buffer,
            this.MVPMatrices.byteOffset,
            this.MVPMatrices.byteLength 
        );

        (this.renderPassDescriptor.colorAttachments as [GPURenderPassColorAttachment])[0].view = this.context
            .getCurrentTexture()
            .createView();

        const commandEncoder = device.createCommandEncoder();
        const passEncoder = commandEncoder.beginRenderPass(this.renderPassDescriptor);

        passEncoder.setVertexBuffer(0, this.verticesBuffer);
        passEncoder.setPipeline(this.cellRenderPipeline);
        passEncoder.setBindGroup(0, this.uniformBindGroup);
        passEncoder.draw(this.cellShaderContainer.vertexArray.length, NUMBER_OF_CELLS, 0, 0);
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
    }

    private depthTextureView(canvas: HTMLCanvasElement) {
        return device.createTexture({
            size: [
                canvas.clientWidth, //* devicePixelRatio,
                canvas.clientHeight, //  * devicePixelRatio,
            ],
            format: 'depth24plus-stencil8',
            usage: GPUTextureUsage.RENDER_ATTACHMENT,
        }).createView();
    }

    private updateRenderPassDescriptor(canvas: HTMLCanvasElement) {
        (this.renderPassDescriptor.depthStencilAttachment as GPURenderPassDepthStencilAttachment).view = this.depthTextureView(canvas);
    }
}