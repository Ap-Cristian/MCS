import { CellShaderResources } from "../res/cell.res";
import { Color } from "./color";
import { McsObjectParameters } from "../res/interfaces/IMcsObjectParameters";
import { McsObject } from "../base-classes/object";
import { CellRenderPipeline } from "../res/render-pipelines/cell.render.pipeline";

const DEBUG_DISABLE_CELL_LOGIC = false;

export class Cell extends McsObject{
    attachRenderObjects(): void {
        this.renderPipeline = CellRenderPipeline.GetInstance().Pipeline;
        this.VertexArray = CellShaderResources.getInstance().vertexArray;
    }
    public TempValue: number = 0;

    constructor(cellParameters:McsObjectParameters){
        super("cell", cellParameters);
    }

}