import { Camera } from "../objects/camera";
import { McsObject } from "../base-classes/objectBase";
import { Scene } from "../objects/scene";
import { device } from "../objects/rendererMain";
import { Renderer } from "../base-classes/rendererBase";

export class SuzanneRenderer extends Renderer{
    private suzanne_positionUB:         GPUBuffer;
    private suzanne_scaleUB:            GPUBuffer;
    private suzanne_rotationUB:         GPUBuffer;
    private subject_indexData:          Uint16Array;
    private suzanne_indexBuffer:        GPUBuffer;
    private subject_verticesBuffer:     GPUBuffer;
    private suzanne_uniformBindGroup:   GPUBindGroup;
    private subject:                    McsObject;

    private frameErrorProbed:boolean = false;    

    constructor(){
        super();
    }

    public get Subject():McsObject{
        return this.subject;
    }
    
    initUniforms(scene: Scene, camera: Camera): void {
        if(!this.frameErrorProbed){
            device.pushErrorScope("validation")
            device.pushErrorScope("out-of-memory")
            device.pushErrorScope("internal")
        }

        this.subject = scene.Subject;
        this.subject_indexData = new Uint16Array(this.subject.Drawable.FacesArray.length * 3 * Uint16Array.BYTES_PER_ELEMENT);

        this.suzanne_positionUB = device.createBuffer({
            size: this.subject.Position.length * Float32Array.BYTES_PER_ELEMENT,
            usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
        this.suzanne_rotationUB = device.createBuffer({
            size: this.subject.Position.length * Float32Array.BYTES_PER_ELEMENT,
            usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
        this.suzanne_scaleUB = device.createBuffer({
            size: this.subject.Position.length * Float32Array.BYTES_PER_ELEMENT,
            usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })

        // !
        // this.cameraProjectionBuffer = device.createBuffer({
        //     size: 16 * Float32Array.BYTES_PER_ELEMENT,
        //     usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
        // })
        
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
            layout: this.subject.Drawable.RenderPipeline.getBindGroupLayout(0),
            entries: uniformBindGroupEntries
        });
        this.subject_verticesBuffer = device.createBuffer({
            size: this.subject.Drawable.VertexArray.length * this.stride,
            usage: GPUBufferUsage.VERTEX,
            mappedAtCreation: true,
        });


        const mapping = new Float32Array(this.subject_verticesBuffer.getMappedRange());
        var vertexByteOffset = 0;
        for (let i = 0; i < this.subject.Drawable.VertexArray.length; i++) {
            var vert_X = this.subject.Drawable.VertexArray[i].pos[0];
            var vert_Y = this.subject.Drawable.VertexArray[i].pos[1];
            var vert_Z = this.subject.Drawable.VertexArray[i].pos[2];

            mapping.set([vert_X, vert_Y, vert_Z, 1], vertexByteOffset);
            vertexByteOffset += 4;
            
            this.subject.Drawable.VertexArray[i].norm.push(1)
            mapping.set(this.subject.Drawable.VertexArray[i].norm, vertexByteOffset);

            vertexByteOffset += 4;
        }
        this.subject_verticesBuffer.unmap();

        var idx = 0
        for(var i = 0; i < this.subject.Drawable.FacesArray.length; i++){
            this.subject_indexData[idx++] = this.subject.Drawable.FacesArray[i].indexes[0];
            this.subject_indexData[idx++] = this.subject.Drawable.FacesArray[i].indexes[1]; 
            this.subject_indexData[idx++] = this.subject.Drawable.FacesArray[i].indexes[2]; 
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
    frame(passEncoder: GPURenderPassEncoder, cameraProjectionArray:Float32Array): void {
        device.queue.writeBuffer(
            this.suzanne_positionUB,
            0,
            this.subject.Position.buffer,
            this.subject.Position.byteOffset,
            this.subject.Position.byteLength 
        );
        device.queue.writeBuffer(
            this.suzanne_rotationUB,
            0,
            this.subject.Position.buffer,
            this.subject.Position.byteOffset,
            this.subject.Position.byteLength 
        );
        device.queue.writeBuffer(
            this.suzanne_scaleUB,
            0,
            this.subject.Scale.buffer,
            this.subject.Scale.byteOffset,
            this.subject.Scale.byteLength 
        );

        device.queue.writeBuffer(
            this.cameraProjectionBuffer,  //write to transformation buffer which is then used into the transformation bind group trough the entries var on line 98 
            0,
            cameraProjectionArray.buffer,
            cameraProjectionArray.byteOffset,
            cameraProjectionArray.byteLength 
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
        passEncoder.setPipeline(this.subject.Drawable.RenderPipeline);
        passEncoder.setBindGroup(0, this.suzanne_uniformBindGroup);
        passEncoder.setIndexBuffer(this.suzanne_indexBuffer, "uint16");
        passEncoder.drawIndexed(this.subject_indexData.length, 1, 0, 0, 0);
    }
}