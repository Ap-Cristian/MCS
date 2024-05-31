import { SuzanneContainer } from "../../containers/suzanne.container";
import { Color } from "../../misc/color";
import { McsObjectParameters } from "../../misc/mcsObjectParameters";
import { BoundingBox } from "../gizmos/boundingBox";
import { McsObject } from "../object";
import { SuzanneRenderPipeline } from "./suzanne.render.pipeline";

export class Suzanne extends McsObject{
    attachRenderObjects(): void {
        this.renderPipeline = SuzanneRenderPipeline.GetInstance().Pipeline;
        this.vertexArray = SuzanneContainer.getInstance().vertecies;
        this.facesArray = SuzanneContainer.getInstance().faces;
    }
    constructor(suzannePosition:McsObjectParameters){
        super("suzanne", suzannePosition);
    }
}