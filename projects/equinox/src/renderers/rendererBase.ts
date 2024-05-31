import { Camera } from "../objects/camera/camera";
import { Scene } from "../objects/scene/scene";

export abstract class Renderer{
    private readonly floatsPerVertex:number = (4 + 4 + 2);      // 3 for position, 3 for normal, 2 for uv, 3 for color

    protected cameraProjectionBuffer:GPUBuffer;
    protected readonly stride:number = this.floatsPerVertex * 4;  

    abstract initUniforms(scene:Scene, camera:Camera): void;
    abstract frame(passEncoder: GPURenderPassEncoder, cameraProjectionArray:Float32Array): void;

    public get CameraProjectionBuffer():GPUBuffer{
        return this.cameraProjectionBuffer;
    }
};