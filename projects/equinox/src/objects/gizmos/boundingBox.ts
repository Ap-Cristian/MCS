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

    public TopVertecies:IVertex[];
    public BottomVertecies:IVertex[];

    public get Vertecies(): IVertex[]{
        if(!this.VertexArray)
            this.findBoundingBoxVertexCoordinates();

        return this.VertexArray;
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
            
            //The box... ER UR
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

            v1.pos = [v7.pos[0],    v0.pos[1],      v7.pos[2]]; //bottom
            v2.pos = [v7.pos[0],    v0.pos[1],      v0.pos[2]]; //bottom
            v5.pos = [v0.pos[0],    v0.pos[1],      v7.pos[2]]; //bottom

            v3.pos = [v7.pos[0],    v7.pos[1],      v0.pos[2]]; //top
            v4.pos = [v0.pos[0],    v7.pos[1],      v7.pos[2]]; //top
            v6.pos = [v0.pos[0],    v7.pos[1],      v0.pos[2]]; //top

            this.VertexArray = [v0, v1, v2, v3, v4, v5, v6, v7];

            this.TopVertecies = [v6,v3,v4,v7]; //ordered left to right
            this.BottomVertecies = [v0,v2,v5,v1];



        }else{
            throw("BoundingBoxRenderer: Parent object not set!");
        }
    }

    constructor(parent:McsObject, color?:Color){
        super(parent);

        this.Parent = parent;
        this.Color = color ? color : Color.WHITE;
    }
}