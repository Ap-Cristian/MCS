import { McsObject } from "./object";
import { WireframeRenderPipeline } from "../res/render-pipelines/wireframe.pipeline";

export class Gizmo extends McsObject{
    attachRenderObjects(): void {
        this.renderPipeline = WireframeRenderPipeline.GetInstance().Pipeline;
        // delete this.VertexArray;
    }
    private parentObject:McsObject;

    constructor(parent: McsObject){
        super("Gizmo", {X: parent.X, Y: parent.Y, Z: parent.Z, ScaleX: parent.ScaleX, ScaleY: parent.ScaleY, ScaleZ: parent.ScaleZ});

        delete this.RotationX;
        delete this.RotationX;
        delete this.RotationX;

        this.parentObject = parent;
    }
}