import { vec3 } from "gl-matrix";
import { McsObjectParameters } from "../misc/mcsObjectParameters";

export class McsObject{
    public X: number = 0;
    public Y: number = 0;
    public Z: number = 0;

    public RotationX: number = 0;
    public RotationY: number = 0;
    public RotationZ: number = 0;

    public ScaleX: number = 1;
    public ScaleY: number = 1;
    public ScaleZ: number = 1;

    public type:string = '';

    constructor(objType:string, parameter?: McsObjectParameters) {
        this.setTransformation(parameter);
        this.type = objType;
    }

    public get Position():vec3{
        return vec3.fromValues(this.X,this.Y,this.Z);
    }

    private setTransformation(parameter?: McsObjectParameters) {
        if (parameter == null) {
            return;
        }
        this.X = parameter.X ? parameter.X : 0;
        this.Y = parameter.Y ? parameter.Y : 0;
        this.Z = parameter.Z ? parameter.Z : 0;

        this.RotationX = parameter.RotX ? parameter.RotX : 0;
        this.RotationY = parameter.RotY ? parameter.RotY : 0;
        this.RotationZ = parameter.RotZ ? parameter.RotZ : 0;

        this.ScaleX = parameter.ScaleX ? parameter.ScaleX : 1;
        this.ScaleY = parameter.ScaleY ? parameter.ScaleY : 1;
        this.ScaleZ = parameter.ScaleZ ? parameter.ScaleZ : 1;
    }
}