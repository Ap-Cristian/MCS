import { CellShaderContainer } from "../../containers/cell-shader.container";
import { Color } from "../../misc/color";
import { McsObjectParameters } from "../../misc/mcsObjectParameters";
import { McsObject } from "../object";
import { CellRenderPipeline } from "./cell.render.pipeline";

const DEBUG_DISABLE_CELL_LOGIC = false;

export class Cell extends McsObject{
    attachRenderObjects(): void {
        this.renderPipeline = CellRenderPipeline.GetInstance().Pipeline;
        this.vertexArray = CellShaderContainer.getInstance().vertexArray;
    }

    public TempValue: number = 9999;

    private defaultColor: Color = {
        R: 0.9,
        G: 0.6,
        B: 0.1,
    }

    constructor(cellParameters:McsObjectParameters){
        super("cell",cellParameters);
    }

}