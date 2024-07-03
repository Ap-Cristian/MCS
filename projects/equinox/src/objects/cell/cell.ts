import { CellShaderContainer } from "../../containers/cell-shader.container";
import { Color } from "../../misc/color";
import { McsObjectParameters } from "../../misc/mcsObjectParameters";
import { McsObject } from "../object";
import { CellRenderPipeline } from "./cell.render.pipeline";

const DEBUG_DISABLE_CELL_LOGIC = false;

export class Cell extends McsObject{
    attachRenderObjects(): void {
        this.renderPipeline = CellRenderPipeline.GetInstance().Pipeline;
        this.VertexArray = CellShaderContainer.getInstance().vertexArray;
    }
    public TempValue: number = 0;

    constructor(cellParameters:McsObjectParameters){
        super("cell", cellParameters);
    }

}