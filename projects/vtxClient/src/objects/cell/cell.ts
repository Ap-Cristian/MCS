import { mat4, vec3 } from "gl-matrix";
import { Color } from "../../misc/color";
import { CellParameter } from "../../misc/cellParameter";
import { cameraUniformBuffer, device, lightDataBuffer, lightDataSize } from "../../renderer";

import { vertices } from "../../misc/cellVertecies";
import { vertexShader } from "../../misc/cellVertexShader"
import { fragmentShader } from "../../misc/cellFragment";

export class Cell{
    public X:number = 0;
    public Y:number = 0;
    public Z:number = 0;

    public RotationX:number = 0;
    public RotationY:number = 0;
    public RotationZ:number = 0;

    public ScaleX:number = 1;
    public ScaleY:number = 1;
    public ScaleZ:number = 1;
    
    public HeatValue:number;
    public Neighbours:Cell[];

    private defaultColor: Color = {
        R: 0.9,
        G: 0.6,
        B: 0.1,
    }

    private matrixSize = 4 * 16; // 4x4 matrix
    private offset = 256; // transformationBindGroup offset must be 256-byte aligned
    private uniformBufferSize = this.offset;

    private transformMatrix = mat4.create() as Float32Array;
    private rotationMatrix = mat4.create() as Float32Array;

    private renderPipeline: GPURenderPipeline;
    private transformationBuffer: GPUBuffer;
    private transformationBindGroup: GPUBindGroup;
    private verticesBuffer: GPUBuffer;
    private colorBuffer: GPUBuffer;

    private perVertex = ( 3 + 3 + 2 );      // 3 for position, 3 for normal, 2 for uv, 3 for color
    private stride = this.perVertex * 4;    // stride = byte length of vertex data array 

    constructor(parameter?: CellParameter, color?: Color, imageBitmap?: ImageBitmap) {
        this.setTransformation(parameter);
        this.renderPipeline = device.createRenderPipeline({
            layout: 'auto',
            vertex: {
                module: device.createShaderModule({ code: vertexShader() }),
                entryPoint: 'main',
                buffers: [
                    {
                        arrayStride: this.stride, // ( 3 (pos) + 3 (norm) + 2 (uv) ) * 4 bytes
                        attributes: [
                            {
                                // position
                                shaderLocation: 0,
                                offset: 0,
                                format: 'float32x3',
                            },
                            {
                                // norm
                                shaderLocation: 1,
                                offset: 3 * 4,
                                format: 'float32x3',
                            },
                            {
                                // uv
                                shaderLocation: 2,
                               offset: (3 + 3) * 4,
                                format: 'float32x2',
                            },
                        ],
                    } as GPUVertexBufferLayout,
                ],
            },
            fragment: {
                module: device.createShaderModule({ code: fragmentShader(imageBitmap != null) }),
                entryPoint: 'main',
                targets: [
                    {
                        format: 'bgra8unorm' as GPUTextureFormat,
                    },
                ],
            },
            primitive: {
                topology: 'triangle-list',
                cullMode: 'back',
            },
            // Enable depth testing so that the fragment closest to the camera
            // is rendered in front.
            depthStencil: {
                depthWriteEnabled: true,
                depthCompare: 'less',
                format: 'depth24plus-stencil8',
            },
        } as unknown as GPURenderPipelineDescriptor);

        this.verticesBuffer = device.createBuffer({
            size: vertices.length * this.stride,
            usage: GPUBufferUsage.VERTEX,
            mappedAtCreation: true,
        });

        const mapping = new Float32Array(this.verticesBuffer.getMappedRange());
        for (let i = 0; i < vertices.length; i++) {
            // (3 * 4) + (3 * 4) + (2 * 4)
            mapping.set([vertices[i].pos[0] * this.ScaleX, 
                        vertices[i].pos[1] * this.ScaleY, 
                        vertices[i].pos[2] * this.ScaleY], this.perVertex * i + 0);
            mapping.set(vertices[i].norm, this.perVertex * i + 3);
            mapping.set(vertices[i].uv, this.perVertex * i + 6);
        }
        this.verticesBuffer.unmap();

        this.transformationBuffer = device.createBuffer({
            size: this.uniformBufferSize,
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
        });

        this.colorBuffer = device.createBuffer({
            mappedAtCreation: true,
            size: Float32Array.BYTES_PER_ELEMENT * 3 + 4,
            usage: GPUBufferUsage.STORAGE,
        });
        const colorMapping = new Float32Array(this.colorBuffer.getMappedRange());
        colorMapping.set(color ? [color.R, color.G, color.B] : [this.defaultColor.R, this.defaultColor.G, this.defaultColor.B], 0);
        this.colorBuffer.unmap()

        const entries = [
            {
                binding: 0,
                resource: {
                    buffer: this.transformationBuffer,
                    offset: 0,
                    size: this.matrixSize * 2,
                },
            },
            {
                binding: 1,
                resource: {
                    buffer: this.colorBuffer ,
                    offset: 0,
                    size: Float32Array.BYTES_PER_ELEMENT * 3 + 4,
                },
            },
            {
                binding: 2,
                resource: {
                    buffer: cameraUniformBuffer,
                    offset: 0,
                    size: this.matrixSize,
                },
            },
            {
                binding: 3,
                resource: {
                    buffer: lightDataBuffer,
                    offset: 0,
                    size: lightDataSize,
                },
            },
            
        ];

        // Texture
        if (imageBitmap) {
            let cubeTexture = device.createTexture({
                size: [imageBitmap.width, imageBitmap.height, 1],
                format: 'rgba8unorm',
                usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT,
            });
            device.queue.copyExternalImageToTexture(
                { source: imageBitmap },
                { texture: cubeTexture },
                [imageBitmap.width, imageBitmap.height, 1]
            );
            const sampler = device.createSampler({
                magFilter: 'linear',
                minFilter: 'linear',
            });

            entries.push({
                binding: 4,
                resource: sampler,
            } as any)
            entries.push({
                binding: 5,
                resource: cubeTexture.createView(),
            } as any);

        }

        this.transformationBindGroup = device.createBindGroup({
            layout: this.renderPipeline.getBindGroupLayout(0),
            entries: entries as Iterable<GPUBindGroupEntry>,
        });
    }

    public draw(passEncoder: GPURenderPassEncoder, device: GPUDevice) {
        this.updateTransformationMatrix()

        passEncoder.setPipeline(this.renderPipeline);
        device.queue.writeBuffer(
            this.transformationBuffer,
            0,
            this.transformMatrix.buffer,
            this.transformMatrix.byteOffset,
            this.transformMatrix.byteLength
        );
        device.queue.writeBuffer(
            this.transformationBuffer,
            64,
            this.rotationMatrix.buffer,
            this.rotationMatrix.byteOffset,
            this.rotationMatrix.byteLength
        );
        passEncoder.setVertexBuffer(0, this.verticesBuffer);
        passEncoder.setBindGroup(0, this.transformationBindGroup);
        passEncoder.draw(vertices.length, 1, 0, 0);
    }

    private updateTransformationMatrix() {
        const transform = mat4.create();
        const rotate = mat4.create();

        mat4.translate(transform, transform, vec3.fromValues(this.X, this.Y, this.Z))
        mat4.rotateX(transform, transform, this.RotationX);
        mat4.rotateY(transform, transform, this.RotationY);
        mat4.rotateZ(transform, transform, this.RotationZ);

        mat4.rotateX(rotate, rotate, this.RotationX);
        mat4.rotateY(rotate, rotate, this.RotationY);
        mat4.rotateZ(rotate, rotate, this.RotationZ);

        // APPLY
        mat4.copy(this.transformMatrix, transform)
        mat4.copy(this.rotationMatrix, rotate)
    }

    private setTransformation(parameter?: CellParameter) {
        if (parameter == null) {
            return;
        }

        this.X = parameter.X ? parameter.X : 0;
        this.Y = parameter.Y ? parameter.Y : 0;
        this.Z = parameter.Z ? parameter.Z : 0;

        this.RotationX = parameter.RotX ? parameter.RotX : 0;
        this.RotationY = parameter.RotY ? parameter.RotY : 0;
        this.RotationZ = parameter.RotZ ? parameter.RotZ : 0;

        this.ScaleX = parameter.ScaleX ? parameter.ScaleX : 1;
        this.ScaleY = parameter.ScaleY ? parameter.ScaleY : 1;
        this.ScaleZ = parameter.ScaleZ ? parameter.ScaleZ : 1;
    }

}