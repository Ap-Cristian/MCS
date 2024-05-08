import { McsObjectParameter } from "../interfaces/objectParameter";
import { vec3 } from "gl-matrix";

export class McsObject{
    public readonly type:string = '';

    public X: number = 0;
    public Y: number = 0;
    public Z: number = 0;

    public RotationX: number = 0;
    public RotationY: number = 0;
    public RotationZ: number = 0;

    public ScaleX: number = 1;
    public ScaleY: number = 1;
    public ScaleZ: number = 1;

    protected setTransformation(parameter?: McsObjectParameter) {
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

    protected get Position():vec3{
        return vec3.fromValues(this.X,this.Y,this.Z);
    }

    public constructor(parameter?: McsObjectParameter){
        this.setTransformation(parameter);
        this.type = parameter.type ? parameter.type : 'unknown';
    }
};