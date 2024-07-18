import { Vec3 } from "wgpu-matrix";
import { IVertex } from "./IVertex";
import { IFace } from "./IFace";

export interface IDrawable{
    // _position: Vec3,
    // _scale: Vec3,
    // _rotation: Vec3,
    _vertecies:IVertex[],
    _renderPipeline:GPURenderPipeline,
    _cameraProjectionBO: GPUBuffer,
    _faces?:IFace[],
}