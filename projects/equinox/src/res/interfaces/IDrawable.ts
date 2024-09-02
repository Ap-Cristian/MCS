import { Vec3 } from "wgpu-matrix";
import { IVertex } from "./IVertex";
import { IFace } from "./IFace";

export interface ILine {
    startVrtIndex: number,
    endVrtIndex: number
}

export interface IDrawable {
    // _position: Vec3,
    // _scale: Vec3,
    // _rotation: Vec3,
    _renderPipeline: GPURenderPipeline,
    _cameraProjectionBO: GPUBuffer,
    _vertecies?: IVertex[],
    _faces?: IFace[],
    _lines?: ILine[] //TBI
}