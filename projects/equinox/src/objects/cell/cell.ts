import { vec3 } from "gl-matrix";
import { Color } from "../../misc/color";
import { CellParameter } from "../../misc/cellParameter";

const DEBUG_DISABLE_CELL_LOGIC = false;

export class Cell {
    public X: number = 0;
    public Y: number = 0;
    public Z: number = 0;

    public RotationX: number = 0;
    public RotationY: number = 0;
    public RotationZ: number = 0;

    public ScaleX: number = 1;
    public ScaleY: number = 1;
    public ScaleZ: number = 1;

    public TempValue: number = 9999;

    private defaultColor: Color = {
        R: 0.9,
        G: 0.6,
        B: 0.1,
    }

    public get Position():vec3{
        return vec3.fromValues(this.X,this.Y,this.Z);
    }

    constructor(parameter?: CellParameter, temp?:number) {
        temp ? this.TempValue = temp : 0;
        this.setTransformation(parameter);
    }

    private setTransformation(parameter?: CellParameter) {
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