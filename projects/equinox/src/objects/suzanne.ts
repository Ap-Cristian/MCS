import { SuzanneShaderResources } from "../res/suzanne.res";
import { SuzanneRenderPipeline } from "../res/render-pipelines/suzanne.render.pipeline";
import { McsObjectParameters } from "../res/interfaces/IMcsObjectParameters";
import { McsObject } from "../base-classes/object";

export class Suzanne extends McsObject{
    attachRenderObjects(): void {
        this.renderPipeline = SuzanneRenderPipeline.GetInstance().Pipeline;
        this.VertexArray = SuzanneShaderResources.getInstance().vertecies;
        this.facesArray = SuzanneShaderResources.getInstance().faces;
    }
    constructor(suzannePosition:McsObjectParameters){
        super("suzanne", suzannePosition);
    }
}