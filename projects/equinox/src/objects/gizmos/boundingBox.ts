import { IVertex } from "../../containers/interfaces/IVertex";
import { Color } from "../../misc/color";
import { McsObject } from "../object";
import { Gizmo } from "./gizmoBase";

export class BoundingBox extends Gizmo{
    public Color:Color;
    public Parent: McsObject;

    public FaceIndexData: Uint32Array = new Uint32Array([
        // back
        0, 6, 
        3, 2, 
        6, 3, 
        0, 2,
        // front
        7, 4,
        4, 5,
        5, 1,
        1, 7,
        // sides
        4, 6,
        5, 0,
        1, 2,
        7, 3
    ]);

    private vertecies: IVertex[];
    public get Vertecies(): IVertex[]{
        if(!this.vertecies)
            this.findBoundingBoxVertexCoordinates();

        return this.vertecies;
    }

    private findBoundingBoxVertexCoordinates(): void{
        if(this.Parent){
            var v7:IVertex = { //top-most
                norm:[0,0,0],
                pos:[Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER],
                uv:[0,0,0]
            };
            var v0:IVertex = { //bottom-most
                norm:[0,0,0],
                pos:[Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
                uv:[0,0,0]
            };

            this.Parent.VertexArray.forEach((vertex)=>{
                vertex.pos[0] < v0.pos[0] ? v0.pos[0] = vertex.pos[0] : null;
                vertex.pos[1] < v0.pos[1] ? v0.pos[1] = vertex.pos[1] : null;    
                vertex.pos[2] < v0.pos[2] ? v0.pos[2] = vertex.pos[2] : null;    
                
                vertex.pos[0] > v7.pos[0] ? v7.pos[0] = vertex.pos[0] : null;
                vertex.pos[1] > v7.pos[1] ? v7.pos[1] = vertex.pos[1] : null;    
                vertex.pos[2] > v7.pos[2] ? v7.pos[2] = vertex.pos[2] : null;  
            })
            
            //le cube
            var v1:IVertex = {
                norm:[0,0,0],
                pos:[0,0,0],
                uv:[0,0,0]
            };
            var v2:IVertex = {
                norm:[0,0,0],
                pos:[0,0,0],
                uv:[0,0,0]
            };
            var v3:IVertex = {
                norm:[0,0,0],
                pos:[0,0,0],
                uv:[0,0,0]
            };
            var v4:IVertex = {
                norm:[0,0,0],
                pos:[0,0,0],
                uv:[0,0,0]
            };
            var v5:IVertex = {
                norm:[0,0,0],
                pos:[0,0,0],
                uv:[0,0,0]
            };
            var v6:IVertex = {
                norm:[0,0,0],
                pos:[0,0,0],
                uv:[0,0,0]
            };

            v1.pos = [v7.pos[0],    v0.pos[1],      v7.pos[2]];
            v2.pos = [v7.pos[0],    v0.pos[1],      v0.pos[2]];
            v3.pos = [v7.pos[0],    v7.pos[1],      v0.pos[2]];
            v4.pos = [v0.pos[0],    v7.pos[1],      v7.pos[2]];
            v5.pos = [v0.pos[0],    v0.pos[1],      v7.pos[2]];
            v6.pos = [v0.pos[0],    v7.pos[1],      v0.pos[2]];

            this.vertecies = [v0, v1, v2, v3, v4, v5, v6, v7];
        }else{
            throw("BoundingBoxRenderer: Parent object not set!");
        }
    }

    constructor(parent:McsObject, color?:Color){
        super(parent);
        this.Parent = parent;
        this.Color = color ? color : new Color(255,255,255);
    }
}