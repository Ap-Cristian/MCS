import { BoundingBox } from "../objects/gizmos/boundingBox";
import { IFace } from "../res/interfaces/IFace";
import { IVertex } from "../res/interfaces/IVertex";

export class Drawable {
    //object render stuff
    public RenderPipeline: GPURenderPipeline;
    public VertexArray: IVertex[];
    public FacesArray: IFace[];

    constructor(){};
}