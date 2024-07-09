import { CellShaderResources } from "../res/cell.res";
import { McsObjectParameters } from "../res/interfaces/IMcsObjectParameters";
import { McsObject } from "../base-classes/objectBase";
import { CellRenderPipeline } from "../res/render-pipelines/cell.render.pipeline";

const DEBUG_DISABLE_CELL_LOGIC = false;

export class Cell extends McsObject{
    attachRenderObjects(): void {
        this.Drawable.RenderPipeline = CellRenderPipeline.GetInstance().Pipeline;
        this.Drawable.VertexArray = CellShaderResources.getInstance().vertexArray;
    }
    public TempValue: number = 0;

    constructor(cellParameters:McsObjectParameters){
        super("cell", cellParameters);
    }

}