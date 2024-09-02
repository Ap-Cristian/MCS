import { IVertex } from "./IVertex";
import { IFace } from "./IFace";

export interface ILine {
    startVrtIndex: number,
    endVrtIndex: number
}

export interface IDrawable {
    _renderPipeline: GPURenderPipeline,
    _cameraProjectionBO: GPUBuffer,
    _vertecies?: IVertex[],
    _faces?: IFace[],
    _lines?: ILine[]
}