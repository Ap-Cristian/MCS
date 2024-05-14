import { NUMBER_OF_CELLS } from './engine';

import { Scene } from './objects/scene/scene';
import { Camera } from './objects/camera/camera';
import { CellRenderPipeline } from './objects/cell/cell.render.pipeline';
import { CellShaderContainer } from './containers/cell-shader.container';

import { McsObject } from './objects/object';
import { FpsCounter } from './misc/fpsCounter/FPSCoutner';

export var device: GPUDevice;

var cameraUniformBuffer: GPUBuffer;
var lightDataBuffer: GPUBuffer;

const LIGHT_DATA_SIZE = 3 * 4 + 4; // vec3 size in bytes
const FRAME_ERROR_PROBE_ONLY_ONCE:boolean = true;

export class WebGpuRenderer {
    private subject:McsObject;
    private isRendererInit:boolean = false;
    private initSuccess: boolean = false;

    private renderPassDescriptor: GPURenderPassDescriptor;
    private cell_uniformBindGroup: GPUBindGroup;
    private suzanne_uniformBindGroup: GPUBindGroup;

    private context: GPUCanvasContext;
    private presentationFormat: GPUTextureFormat;
    
    private cell_renderPipeline:GPURenderPipeline;

    private cell_rotationBuffer:GPUBuffer;
    private cell_scaleBuffer:GPUBuffer;
    private cell_verticesBuffer: GPUBuffer;
    private cell_positionBuffer:GPUBuffer;

    private cell_positionArray           = new Float32Array(NUMBER_OF_CELLS * 3);
    private cell_rotationArray           = new Float32Array(NUMBER_OF_CELLS * 3);
    private cell_scaleArray              = new Float32Array(NUMBER_OF_CELLS * 3);
    
    private suzanne_positionUB:GPUBuffer;
    private suzanne_scaleUB:GPUBuffer;
    private suzanne_rotationUB:GPUBuffer;

    private subject_indexData:Uint16Array;
    private suzanne_indexBuffer:GPUBuffer;
    private subject_verticesBuffer: GPUBuffer;

    private cameraProjectionBuffer:GPUBuffer;
    private cameraProjectionArray   = new Float32Array(16);
    
    private matrixSize = 4 * 16; // 4x4 matrix
    private cellShaderContainer:CellShaderContainer;
    private floatsPerVertex:number = (4 + 4 + 2);      // 3 for position, 3 for normal, 2 for uv, 3 for color
    private stride:number = this.floatsPerVertex * 4;  
    private depthTexture:GPUTexture;
    private frameErrorProbed:boolean = false;
    private renderPassColorAttachment: GPURenderPassColorAttachment;
    private fpsCounter:FpsCounter = new FpsCounter();

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

        this.cell_renderPipeline = CellRenderPipeline.GetInstance().Pipeline;

        cameraUniformBuffer = device.createBuffer({
            size: this.matrixSize,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
        });

        lightDataBuffer = device.createBuffer({
            size: LIGHT_DATA_SIZE,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
        });
        this.isRendererInit = true;
        return this.initSuccess = true;
    }

    public InitUBOs(scene:Scene, camera:Camera){
        this.initCellsUniforms(scene, camera);
        this.initSubjectUniforms(scene, camera);
    }




    private initCellsUniforms(scene:Scene, camera:Camera){
        if(!this.frameErrorProbed){
            device.pushErrorScope("validation")
            device.pushErrorScope("out-of-memory")
            device.pushErrorScope("internal")
        }

        var objects = scene.getObjects();
        var currentMatStep = 0;

        var currentMemOffset = 0;
        for(let i = 0; i < NUMBER_OF_CELLS; i++){
            this.cell_positionArray[currentMemOffset] = objects[i].X;
            this.cell_rotationArray[currentMemOffset] = objects[i].RotationX;
            this.cell_scaleArray[currentMemOffset]    = objects[i].ScaleX;
            currentMemOffset++;

            this.cell_positionArray[currentMemOffset] = objects[i].Y;
            this.cell_rotationArray[currentMemOffset] = objects[i].RotationY;
            this.cell_scaleArray[currentMemOffset]    = objects[i].ScaleY;
            currentMemOffset++;

            this.cell_positionArray[currentMemOffset] = objects[i].Z;
            this.cell_rotationArray[currentMemOffset] = objects[i].RotationZ;
            this.cell_scaleArray[currentMemOffset]    = objects[i].ScaleZ;
            currentMemOffset++;
        }

        currentMatStep = 0;

        //Model view projection matrix
        // for(let i = 0; i < NUMBER_OF_CELLS; i++){
        //     mat4.multiply(camera.getCameraViewProjMatrix(), cellsModelsTranformationMatrixes[i], projectionAppliedResultMat);
        //     this.MVPMatrices.set(projectionAppliedResultMat, currentMatStep);
        //     currentMatStep += 4*4;
        // }
        //

        console.log("DEV_VIDEO_MAX_BUFFER_MEM_SIZE: ", device.limits.maxBufferSize)
        console.log("DEV_VIDEO_MAX_UNIFORM_MEM_SIZE: ", device.limits.maxUniformBufferBindingSize)

        // var uniformBindingsCount = 1024 > 4 * 16 * NUMBER_OF_CELLS ? 1024 : 4 * 16 * NUMBER_OF_CELLS

        this.cell_positionBuffer = device.createBuffer({
            size: Float32Array.BYTES_PER_ELEMENT * 3 * NUMBER_OF_CELLS < 16 ? 
                    16 : Float32Array.BYTES_PER_ELEMENT * 3 * NUMBER_OF_CELLS, // MEM SIZE EXCEDED
            usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
        })
        this.cell_scaleBuffer = device.createBuffer({
            size:  Float32Array.BYTES_PER_ELEMENT * 3 * NUMBER_OF_CELLS < 16 ? 
                    16 : Float32Array.BYTES_PER_ELEMENT * 3 * NUMBER_OF_CELLS, // MEM SIZE EXCEDED
            usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
        })
        this.cell_rotationBuffer = device.createBuffer({
            size:  Float32Array.BYTES_PER_ELEMENT * 3 * NUMBER_OF_CELLS < 16 
                    ? 16 : Float32Array.BYTES_PER_ELEMENT * 3 * NUMBER_OF_CELLS, // MEM SIZE EXCEDED
            usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
        })
        this.cameraProjectionBuffer = device.createBuffer({
            size: 16 * Float32Array.BYTES_PER_ELEMENT, // MEM SIZE EXCEDED
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
        })

        var uniformBindGroupEntries:Iterable<GPUBindGroupEntry> = [
            {
                binding: 0,      
                resource: {
                  buffer: this.cell_rotationBuffer,
                }
            },
            {
                binding: 1,
                resource: {                         //position
                  buffer: this.cell_positionBuffer,
                }
            },
            {
                binding: 2,
                resource: {                         //position
                  buffer: this.cameraProjectionBuffer,
                }
            }
        ];

        this.cell_uniformBindGroup = device.createBindGroup({
            layout: this.cell_renderPipeline.getBindGroupLayout(0),
            entries: uniformBindGroupEntries
        });
        this.cell_verticesBuffer = device.createBuffer({
            size: this.cellShaderContainer.vertexArray.length * this.stride, //wierd shit happening here
            usage: GPUBufferUsage.VERTEX,
            mappedAtCreation: true,
        });

        // console.log("VERTERX COUNT:" + this.cellShaderContainer.vertexArray.length)

        const mapping = new Float32Array(this.cell_verticesBuffer.getMappedRange());
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
        this.cell_verticesBuffer.unmap();
        
        this.renderPassColorAttachment = (this.renderPassDescriptor.colorAttachments as [GPURenderPassColorAttachment])[0];

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

    private initSubjectUniforms(scene: Scene, camera: Camera,){
        if(!this.frameErrorProbed){
            device.pushErrorScope("validation")
            device.pushErrorScope("out-of-memory")
            device.pushErrorScope("internal")
        }

        this.subject = scene.getSubject();
        this.subject_indexData = new Uint16Array(this.subject.FacesArray.length * 3 * Uint16Array.BYTES_PER_ELEMENT);

        this.suzanne_positionUB = device.createBuffer({
            size: this.subject.GPUPosArray.length * Float32Array.BYTES_PER_ELEMENT,
            usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })

        this.suzanne_rotationUB = device.createBuffer({
            size: this.subject.GPURotArray.length * Float32Array.BYTES_PER_ELEMENT,
            usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
        
        this.suzanne_scaleUB = device.createBuffer({
            size: this.subject.GPUScaleArray.length * Float32Array.BYTES_PER_ELEMENT,
            usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
        var uniformBindGroupEntries:Iterable<GPUBindGroupEntry> = [
            {
                binding: 0,      
                resource: {
                  buffer: this.suzanne_positionUB,
                }
            },
            {
                binding: 1,      
                resource: {
                  buffer: this.suzanne_scaleUB,
                }
            },
            {
                binding: 2,      
                resource: {
                  buffer: this.suzanne_rotationUB,
                }
            },
            {
                binding: 3,
                resource: {                         //position
                  buffer: this.cameraProjectionBuffer,
                }
            }
        ];

        this.suzanne_uniformBindGroup = device.createBindGroup({
            layout: this.subject.RenderPipeline.getBindGroupLayout(0),
            entries: uniformBindGroupEntries
        });
        this.subject_verticesBuffer = device.createBuffer({
            size: this.subject.VertexArray.length * this.stride,
            usage: GPUBufferUsage.VERTEX,
            mappedAtCreation: true,
        });

        // console.log("VERTERX COUNT:" + this.cellShaderContainer.vertexArray.length)

        const mapping = new Float32Array(this.subject_verticesBuffer.getMappedRange());
        var vertexByteOffset = 0;
        for (let i = 0; i < this.subject.VertexArray.length; i++) {
            var vert_X = this.subject.VertexArray[i].pos[0];
            var vert_Y = this.subject.VertexArray[i].pos[1];
            var vert_Z = this.subject.VertexArray[i].pos[2];

            mapping.set([vert_X, vert_Y, vert_Z, 1], vertexByteOffset);
            vertexByteOffset += 4;
            
            this.subject.VertexArray[i].norm.push(1)
            mapping.set(this.subject.VertexArray[i].norm, vertexByteOffset);

            vertexByteOffset += 4;
        }
        this.subject_verticesBuffer.unmap();
        // this.renderPassColorAttachment = (this.renderPassDescriptor.colorAttachments as [GPURenderPassColorAttachment])[0];

        var idx = 0
        for(var i = 0; i < this.subject.FacesArray.length; i++){
            this.subject_indexData[idx++] = this.subject.FacesArray[i].indexes[0];
            this.subject_indexData[idx++] = this.subject.FacesArray[i].indexes[1]; 
            this.subject_indexData[idx++] = this.subject.FacesArray[i].indexes[2]; 
        }

        this.suzanne_indexBuffer = device.createBuffer({
            size: this.subject_indexData.length * Float32Array.BYTES_PER_ELEMENT,
            usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.INDEX
        });

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

    private initSubjectUniform(camera: Camera, scene: Scene){
        var subject:McsObject = scene.getSubject();

        if(subject){
            switch (subject.type){
                case 'suzanne':
                    //use for poc
                    break;
                case 'imported':
                    //make containers for imported data
                    //make obj files uploadable
                    //retrieve uploaded files somehow
                    break;
                case 'cell':
                    break;
            }

            //get vertex data
            //set buffers
            //draw indexed
        }
    }

    public update(canvas: HTMLCanvasElement) {
        if (!this.initSuccess) {
            console.error("[ERR] Failed to init renderer!\n Check 'Update' function");
            return;
        }
        this.subject.RotationY += 0.01;
        this.subject.RotationZ += 0.01;

        this.updateRenderPassDescriptor(canvas);
    }

    private cellFrame(passEncoder:GPURenderPassEncoder): void{
        device.queue.writeBuffer(
            this.cell_scaleBuffer,  //write to transformation buffer which is then used into the transformation bind group trough the entries var on line 98 
            0,
            this.cell_scaleArray.buffer,
            this.cell_scaleArray.byteOffset,
            this.cell_scaleArray.byteLength 
        );

        device.queue.writeBuffer(
            this.cell_positionBuffer,  //write to transformation buffer which is then used into the transformation bind group trough the entries var on line 98 
            0,
            this.cell_positionArray.buffer,
            this.cell_positionArray.byteOffset,
            this.cell_positionArray.byteLength 
        );

        device.queue.writeBuffer(
            this.cell_rotationBuffer,  //write to transformation buffer which is then used into the transformation bind group trough the entries var on line 98 
            0,
            this.cell_rotationArray.buffer,
            this.cell_rotationArray.byteOffset,
            this.cell_rotationArray.byteLength 
        );

        device.queue.writeBuffer(
            this.cameraProjectionBuffer,  //write to transformation buffer which is then used into the transformation bind group trough the entries var on line 98 
            0,
            this.cameraProjectionArray.buffer,
            this.cameraProjectionArray.byteOffset,
            this.cameraProjectionArray.byteLength 
        );


        passEncoder.setVertexBuffer(0, this.cell_verticesBuffer);
        passEncoder.setPipeline(this.cell_renderPipeline);
        passEncoder.setBindGroup(0, this.cell_uniformBindGroup);
        passEncoder.draw(this.cellShaderContainer.vertexArray.length, NUMBER_OF_CELLS, 0, 0);
    }

    private suzanneFrame(passEncoder:GPURenderPassEncoder): void{

//kind of ugly, must fix when time
        device.queue.writeBuffer(
            this.suzanne_positionUB,
            0,
            this.subject.GPUPosArray.buffer,
            this.subject.GPUPosArray.byteOffset,
            this.subject.GPUPosArray.byteLength 
        );
        device.queue.writeBuffer(
            this.suzanne_rotationUB,
            0,
            this.subject.GPURotArray.buffer,
            this.subject.GPURotArray.byteOffset,
            this.subject.GPURotArray.byteLength 
        );
        device.queue.writeBuffer(
            this.suzanne_scaleUB,
            0,
            this.subject.GPUScaleArray.buffer,
            this.subject.GPUScaleArray.byteOffset,
            this.subject.GPUScaleArray.byteLength 
        );
//

        device.queue.writeBuffer(
            this.cameraProjectionBuffer,  //write to transformation buffer which is then used into the transformation bind group trough the entries var on line 98 
            0,
            this.cameraProjectionArray.buffer,
            this.cameraProjectionArray.byteOffset,
            this.cameraProjectionArray.byteLength 
        );

        device.queue.writeBuffer(
            this.suzanne_indexBuffer,
            0,
            this.subject_indexData.buffer,
            this.subject_indexData.byteOffset,
            this.subject_indexData.byteLength,
        )

        // console.log(this.suzanne_indexData);

        passEncoder.setVertexBuffer(0, this.subject_verticesBuffer);
        passEncoder.setPipeline(this.subject.RenderPipeline);
        passEncoder.setBindGroup(0, this.suzanne_uniformBindGroup);
        passEncoder.setIndexBuffer(this.suzanne_indexBuffer, "uint16");
        passEncoder.drawIndexed(this.subject_indexData.length, 1, 0, 0, 0);
    }

    public frame(camera: Camera, scene: Scene) {
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

        this.suzanneFrame(passEncoder);
        this.cellFrame(passEncoder);

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
        this.fpsCounter.update();
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
        //(this.renderPassDescriptor.depthStencilAttachment as GPURenderPassDepthStencilAttachment).view = this.depthTextureView(canvas); 
        //REALLY BAD, UNCOMMENT AND MEMORY OVERFLOWS
    }
}