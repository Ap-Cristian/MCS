import { SuzanneShaderResources } from "../res/suzanne.res";
import { SuzanneRenderPipeline } from "../res/render-pipelines/suzanne.render.pipeline";
import { McsObjectParameters } from "../res/interfaces/IMcsObjectParameters";
import { McsObject } from "../base-classes/objectBase";

export class Suzanne extends McsObject{
    attachRenderObjects(): void {
        this.Drawable.RenderPipeline = SuzanneRenderPipeline.GetInstance().Pipeline;
        this.Drawable.VertexArray = SuzanneShaderResources.getInstance().vertecies;
        this.Drawable.FacesArray = SuzanneShaderResources.getInstance().faces;
    }
    constructor(suzannePosition:McsObjectParameters){
        super("suzanne", suzannePosition);
    }
}