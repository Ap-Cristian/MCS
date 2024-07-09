import { Camera } from "../objects/camera";
import { BoundingBox } from "../objects/gizmos/boundingBox";
import { McsObject } from "../base-classes/objectBase";
import { Scene } from "../objects/scene";
import { device } from "../objects/rendererMain";
import { Renderer } from "../base-classes/rendererBase";

export class BoundingBoxRenderer extends Renderer{
    private boundingBox:                    BoundingBox;
    private parent:                         McsObject;

    private boundingBox_positionUB:         GPUBuffer;
    private boundingBox_scaleUB:            GPUBuffer;
    private boundingBox_rotationUB:         GPUBuffer;
    private boundingBox_indexBuffer:        GPUBuffer;
    private boundingBox_verticesBuffer:     GPUBuffer;

    private boundingBox_uniformBindGroup:   GPUBindGroup;
    private frameErrorProbed:boolean = false;

    constructor(){
        super();
    }

    initUniforms(scene: Scene, camera: Camera): void {
        this.parent = scene.Subject;
        this.boundingBox = scene.Subject.BoundingBox;

        if(!this.frameErrorProbed){
            device.pushErrorScope("validation")
            device.pushErrorScope("out-of-memory")
            device.pushErrorScope("internal")
        }

        this.boundingBox_positionUB = device.createBuffer({
            size: this.parent.Position.length * Float32Array.BYTES_PER_ELEMENT,
            usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
        this.boundingBox_rotationUB = device.createBuffer({
            size: this.parent.Rotation.length * Float32Array.BYTES_PER_ELEMENT,
            usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })
        this.boundingBox_scaleUB = device.createBuffer({
            size: this.parent.Scale.length * Float32Array.BYTES_PER_ELEMENT,
            usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        })

        var uniformBindGroupEntries:Iterable<GPUBindGroupEntry> = [
            {
                binding: 0,      
                resource: {
                  buffer: this.boundingBox_positionUB,
                }
            },
            {
                binding: 1,      
                resource: {
                  buffer: this.boundingBox_scaleUB,
                }
            },
            {
                binding: 2,      
                resource: {
                  buffer: this.boundingBox_rotationUB,
                }
            },
            {
                binding: 3,
                resource: {                         //position
                  buffer: this.cameraProjectionBuffer,
                }
            }
        ];

        this.boundingBox_uniformBindGroup = device.createBindGroup({
            layout: this.boundingBox.Drawable.RenderPipeline.getBindGroupLayout(0),
            entries: uniformBindGroupEntries
        });
        this.boundingBox_verticesBuffer = device.createBuffer({
            size: this.boundingBox.Vertecies.length * this.stride,
            usage: GPUBufferUsage.VERTEX,
            mappedAtCreation: true,
        });


        const mapping = new Float32Array(this.boundingBox_verticesBuffer.getMappedRange());
        var vertexByteOffset = 0;
        for (let i = 0; i < this.boundingBox.Vertecies.length; i++) {
            var vert_X = this.boundingBox.Vertecies[i].pos[0];
            var vert_Y = this.boundingBox.Vertecies[i].pos[1];
            var vert_Z = this.boundingBox.Vertecies[i].pos[2];

            mapping.set([vert_X, vert_Y, vert_Z, 1], vertexByteOffset);
            vertexByteOffset += 4;
            
            this.boundingBox.Vertecies[i].norm.push(1)
            mapping.set(this.boundingBox.Vertecies[i].norm, vertexByteOffset);

            vertexByteOffset += 4;
        }
        this.boundingBox_verticesBuffer.unmap();

        var idx = 0

        this.boundingBox_indexBuffer = device.createBuffer({
            size: this.boundingBox.FaceIndexData.length * Float32Array.BYTES_PER_ELEMENT,
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
    frame(passEncoder: GPURenderPassEncoder, cameraProjectionArray: Float32Array): void {
        device.queue.writeBuffer(
            this.boundingBox_positionUB,
            0,
            this.parent.Position.buffer,
            this.parent.Position.byteOffset,
            this.parent.Position.byteLength 
        );
        device.queue.writeBuffer(
            this.boundingBox_rotationUB,
            0,
            this.parent.Rotation.buffer,
            this.parent.Rotation.byteOffset,
            this.parent.Rotation.byteLength 
        );
        device.queue.writeBuffer(
            this.boundingBox_scaleUB,
            0,
            this.parent.Scale.buffer,
            this.parent.Scale.byteOffset,
            this.parent.Scale.byteLength 
        );

        device.queue.writeBuffer(
            this.cameraProjectionBuffer,
            0,
            cameraProjectionArray.buffer,
            cameraProjectionArray.byteOffset,
            cameraProjectionArray.byteLength 
        );

        device.queue.writeBuffer(
            this.boundingBox_indexBuffer,
            0,
            this.boundingBox.FaceIndexData.buffer,
            this.boundingBox.FaceIndexData.byteOffset,
            this.boundingBox.FaceIndexData.byteLength,
        )

        passEncoder.setVertexBuffer(0, this.boundingBox_verticesBuffer);
        passEncoder.setPipeline(this.boundingBox.Drawable.RenderPipeline);
        passEncoder.setBindGroup(0, this.boundingBox_uniformBindGroup);
        passEncoder.setIndexBuffer(this.boundingBox_indexBuffer, "uint32");
        passEncoder.drawIndexed(this.boundingBox.FaceIndexData.length, 1, 0, 0, 0);
    }

};