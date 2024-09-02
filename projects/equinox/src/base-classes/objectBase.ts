import { DrawableObjectType } from "../helpers/renderUtils";

export interface ObjectParameters {
    X: number;
    Y: number;
    Z: number;

    RotX: number;
    RotY: number;
    RotZ: number;

    ScaleX: number;
    ScaleY: number;
    ScaleZ: number;
};

export interface McsObj {
    type: DrawableObjectType,
    parameters: ObjectParameters
}

export class McsObject {
    private position: Float32Array = new Float32Array([0, 0, 0]);
    private rotation: Float32Array = new Float32Array([0, 0, 0]);
    private scale: Float32Array = new Float32Array([1, 1, 1]);

    public Type: DrawableObjectType = DrawableObjectType.NOT_SET;

    constructor(object: McsObj) {
        this.setTransformation(object.parameters);
        this.Type = object.type;
    }

    public get RotationX() {
        return this.rotation[0];
    }

    public get RotationY() {
        return this.rotation[1];
    }

    public get RotationZ() {
        return this.rotation[2];
    }

    public get ScaleX() {
        return this.scale[0];
    }

    public get ScaleY() {
        return this.scale[1];
    }

    public get ScaleZ() {
        return this.scale[2];
    }

    public get X() {
        return this.position[0];
    }

    public get Y() {
        return this.position[1];
    }

    public get Z() {
        return this.position[2];
    }

    public get Position(): Float32Array {
        return this.position;
    }

    public get Rotation(): Float32Array {
        return this.rotation;
    }

    public get Scale(): Float32Array {
        return this.scale;
    }

    public set RotationX(value: number) {
        this.rotation[0] = value;
    }

    public set RotationY(value: number) {
        this.rotation[1] = value;
    }

    public set RotationZ(value: number) {
        this.rotation[2] = value;
    }

    public set X(value: number) {
        this.position[0] = value;
    }

    public set Y(value: number) {
        this.position[1] = value;
    }

    public set Z(value: number) {
        this.position[2] = value;
    }

    public set ScaleX(value: number) {
        this.scale[0] = value;
    }

    public set ScaleY(value: number) {
        this.scale[1] = value;
    }

    public set ScaleZ(value: number) {
        this.scale[2] = value;
    }

    private setTransformation(parameter?: ObjectParameters) {
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