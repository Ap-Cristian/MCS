import { CellRender } from "../renders/cellRender";
import { EqBufferF32 } from "../models/buffers/buffer_float32";
import { McsObject } from "../models/objectBase";

import cellFragment from "../core/shaders/cell/cell.fragment.wgsl";
import cellVertex from "../core/shaders/cell/cell.vertex.wgsl";
import cellVertecies from "../core/shaders/cell/cell.obj";
import { SimMath } from "../core/helpers/simMath";

export interface CellGroupParams {
    position: SimMath.Position,
    width: number,
    height: number,
    depth: number
}

export class Domain extends CellRender {
    constructor(params: CellGroupParams, cpm: EqBufferF32) {
        let baseObjects: McsObject[] = [];
        for(let i = 0; i < params.width; i++) {
            for(let j = 0; j < params.height; j++) {
                for(let k = 0; k < params.depth; k++) {
                    
                }
            }
        }


        super({
            fragmentCode: cellFragment,
            vertecies: cellVertecies,
            vertexCode: cellVertex,
            baseObjects: baseObjects,
            cpmBuffer: cpm,
        });
    }
}