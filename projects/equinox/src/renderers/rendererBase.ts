import { Camera } from "../objects/camera";
import { Scene } from "../objects/scene";
import { device } from "../objects/renderer";

export abstract class Renderer{
    private readonly floatsPerVertex:number = (4 + 4 + 2);      // 3 for position, 3 for normal, 2 for uv, 3 for color

    protected cameraProjectionBuffer:GPUBuffer;
    protected readonly stride:number = this.floatsPerVertex * 4;  

    abstract initUniforms(scene:Scene, camera:Camera): void;
    abstract frame(passEncoder: GPURenderPassEncoder, cameraProjectionArray:Float32Array): void;

    constructor(){
        this.cameraProjectionBuffer = device.createBuffer({
            size: 16 * Float32Array.BYTES_PER_ELEMENT, // MEM SIZE EXCEDED
            usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
        })
    }

    public get CameraProjectionBuffer():GPUBuffer{
        if(!this.cameraProjectionBuffer)
            return this.cameraProjectionBuffer;
        else
            throw("Camera projection buffer not initialized.");
    }
};