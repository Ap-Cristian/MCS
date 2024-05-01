import { mat4, vec3 } from "gl-matrix";

import { Color } from "../../misc/color";
import { CellParameter } from "../../misc/cellParameter";
import { cameraUniformBuffer, device, lightDataBuffer, lightDataSize } from "../../renderer";

import { vertices } from "../../misc/wgsl/cellVertecies";

import { getColorBasedOnTemp } from "../../misc/colorTempMap";
import { CellShaderContainer } from "../../containers/cell-shader.container";
import { CellRenderPipeline } from "./cell.render.pipeline";

const DEBUG_DISABLE_CELL_LOGIC = false;

export class Cell {
    public X: number = 0;
    public Y: number = 0;
    public Z: number = 0;

    public RotationX: number = 0;
    public RotationY: number = 0;
    public RotationZ: number = 0;

    public ScaleX: number = 1;
    public ScaleY: number = 1;
    public ScaleZ: number = 1;

    public TempValue: number = 9999;
    public Neighbours: Cell[];

    private defaultColor: Color = {
        R: 0.9,
        G: 0.6,
        B: 0.1,
    }

    public MatrixSize:number = 4 * 16; // 4x4 matrix
    private offset:number = 256; // transformationBindGroup offset must be 256-byte aligned
    private uniformBufferSize:number = this.offset;

    public TransformMatrix = mat4.create() as Float32Array;
    public RotationMatrix = mat4.create() as Float32Array;
    public get Transform():vec3{
        return vec3.fromValues(this.X,this.Y,this.Z);
    }

    // private renderPipeline: GPURenderPipeline;
    private uniformBuffer: GPUBuffer;
    private transformationBindGroup: GPUBindGroup;
    public VerticesBuffer: GPUBuffer;
    private colorBuffer: GPUBuffer;

    private floatsPerVertex:number = (3 + 3 + 2);      // 3 for position, 3 for normal, 2 for uv, 3 for color
    private stride:number = this.floatsPerVertex * 4;    // stride = byte length of vertex data array 

    //singletons
    private cellShaderContainer:CellShaderContainer;
    private cellRenderPipeline:GPURenderPipeline;
    
    constructor(parameter?: CellParameter, temp?:number) {
        this.cellShaderContainer = CellShaderContainer.getInstance();
        this.cellRenderPipeline = CellRenderPipeline.GetInstance().Pipeline;

        temp ? this.TempValue = temp : 0;
        this.setTransformation(parameter);

        // this.VerticesBuffer = device.createBuffer({
        //     size: this.cellShaderContainer.vertexArray.length * this.stride, //wierd shit happening here
        //     usage: GPUBufferUsage.VERTEX,
        //     mappedAtCreation: true,
        // });

        // const mapping = new Float32Array(this.VerticesBuffer.getMappedRange());

        // for (let i = 0; i < this.cellShaderContainer.vertexArray.length; i++) {
        //     // (3 * 4) + (3 * 4) + (2 * 4)
        //     mapping.set([this.cellShaderContainer.vertexArray[i].pos[0] * this.ScaleX,
        //     this.cellShaderContainer.vertexArray[i].pos[1] * this.ScaleY,
        //     this.cellShaderContainer.vertexArray[i].pos[2] * this.ScaleY], this.floatsPerVertex * i + 0);
        //     mapping.set(this.cellShaderContainer.vertexArray[i].norm, this.floatsPerVertex * i + 3);
        //     mapping.set(this.cellShaderContainer.vertexArray[i].uv, this.floatsPerVertex * i + 6);
        // }
        // this.VerticesBuffer.unmap();

        // this.uniformBuffer = device.createBuffer({
        //     size: this.uniformBufferSize,
        //     usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
        // });

        //COLOR BUFFER ASSIGNMENT
        // this.colorBuffer = device.createBuffer({
        //     mappedAtCreation: true,
        //     size: Float32Array.BYTES_PER_ELEMENT * 3 + 4,
        //     usage: GPUBufferUsage.STORAGE,
        // });
        // const colorMapping = new Float32Array(this.colorBuffer.getMappedRange());
        // var tempColorValue = getColorBasedOnTemp(this.TempValue);
        // colorMapping.set(tempColorValue, 0);
        // this.colorBuffer.unmap()
        //

        // const entries = [
        //     {
        //         binding: 0,
        //         resource: {
        //             buffer: this.uniformBuffer,
        //             offset: 0,
        //             size: this.matrixSize * 2,
        //         },
        //     },
        //     {
        //         binding: 1,
        //         resource: {
        //             buffer: this.colorBuffer,
        //             offset: 0,
        //             size: Float32Array.BYTES_PER_ELEMENT * 3 + 4,
        //         },
        //     },
        //     {
        //         binding: 2,
        //         resource: {
        //             buffer: cameraUniformBuffer,
        //             offset: 0,
        //             size: this.matrixSize,
        //         },
        //     },
        //     {
        //         binding: 3, //binded in fragment shader
        //         resource: {
        //             buffer: lightDataBuffer,
        //             offset: 0,
        //             size: lightDataSize,
        //         },
        //     },

        // ];

        // this.transformationBindGroup = device.createBindGroup({
        //     layout: this.cellRenderPipeline.getBindGroupLayout(0),
        //     entries: entries as Iterable<GPUBindGroupEntry>,
        // });
        this.updateTransformationMatrix()
    }

    // public draw(passEncoder: GPURenderPassEncoder, device: GPUDevice) { 
    //     console.log("ASDASDASASASD")       
    //     passEncoder.setPipeline(this.cellRenderPipeline);
    //     device.queue.writeBuffer(
    //         this.uniformBuffer,  //write to transformation buffer which is then used into the transformation bind group trough the entries var on line 98 
    //         0,
    //         this.TransformMatrix.buffer,
    //         this.TransformMatrix.byteOffset,
    //         this.TransformMatrix.byteLength 
    //     );
    //     device.queue.writeBuffer(
    //         this.uniformBuffer,
    //         64,
    //         this.RotationMatrix.buffer,
    //         this.RotationMatrix.byteOffset,
    //         this.RotationMatrix.byteLength
    //     );
    //     passEncoder.setVertexBuffer(0, this.VerticesBuffer);
    //     passEncoder.setBindGroup(0, this.transformationBindGroup);
    //     passEncoder.draw(vertices.length, 100);
    // }

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
        mat4.copy(this.TransformMatrix, transform)
        mat4.copy(this.RotationMatrix, rotate)
        // console.log(this.TransformMatrix);
    }

    private setTransformation(parameter?: CellParameter) {
        if (parameter == null) {
            return;
        }
        this.X = parameter.X ? parameter.X : 0;
        this.Y = parameter.Y ? parameter.Y : 0;
        this.Z = parameter.Z ? parameter.Z : 0;

        this.RotationX = parameter.RotX ? parameter.RotX : 4;
        this.RotationY = parameter.RotY ? parameter.RotY : 0;
        this.RotationZ = parameter.RotZ ? parameter.RotZ : 0;

        this.ScaleX = parameter.ScaleX ? parameter.ScaleX : 1;
        this.ScaleY = parameter.ScaleY ? parameter.ScaleY : 1;
        this.ScaleZ = parameter.ScaleZ ? parameter.ScaleZ : 1;
    }

}