import { IGizmo } from "../../containers/interfaces/IGizmo";
import { Color } from "../../misc/color";
import { McsObjectParameters } from "../../misc/mcsObjectParameters";
import { McsObject } from "../object";

export class Gizmo {
    private parentObject:McsObject;
    
    private x:number;
    private y:number;
    private z:number;

    private scaleX:number;
    private scaleY:number;
    private scaleZ:number;

    private color:Color = new Color(255,255,255);

    public get X():number{
        return this.X;
    }
    public get Y():number{
        return this.Y;
    }
    public get Z():number{
        return this.Z;
    }    
    public get ScaleX():number{
        return this.ScaleX;
    }
    public get ScaleY():number{
        return this.ScaleY;
    }
    public get ScaleZ():number{
        return this.ScaleZ;
    }
    public get Color():Color{
        return this.color;
    }
    
    public set X(value:number){
        this.X = value;
    }
    public set Y(value:number){
        this.Y = value;
    }
    public set Z(value:number){
        this.Z = value;
    }
    public set ScaleX(value:number){
        this.ScaleX = value;
    }
    public set ScaleY(value:number){
        this.ScaleY = value;
    }
    public set ScaleZ(value:number){
        this.ScaleZ = value;
    }
    public set Color(value:Color){
        this.color = value;
    }

    constructor(params:IGizmo){
        params.parent ? this.parentObject = params.parent : this.parentObject = null;
        params.color ? this.color = params.color : this.color = null;
    }
}