import { DrawableObjectType } from "../core/helpers/renderUtils";
import { mat4, vec3 } from "gl-matrix";
import { SimMath } from "../core/helpers/simMath";

export interface ObjectParameters {
  X?: number;
  Y?: number;
  Z?: number;

  RotX?: number;
  RotY?: number;
  RotZ?: number;

  ScaleX?: number;
  ScaleY?: number;
  ScaleZ?: number;
}

export interface McsObj {
  type?: DrawableObjectType;
  parameters: ObjectParameters;
}

export class McsObject {
  public Type: DrawableObjectType = DrawableObjectType.NOT_SET;

  private position: Float32Array = new Float32Array([0, 0, 0]);
  private rotation: Float32Array = new Float32Array([0, 0, 0]);
  private origin: Float32Array = new Float32Array([0, 0, 0]);
  private scale: Float32Array = new Float32Array([1, 1, 1]);
  private model: mat4;

  private S: mat4;
  private R: mat4;
  private T: mat4;

  constructor(object?: McsObj) {
    this.S = mat4.create();
    this.R = mat4.create();
    this.T = mat4.create();
    this.model = mat4.create();

    if (object) {
      this.setTransformation(object.parameters);
      this.Type = object.type;
    } else {
      this.setTransformation();
    }
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
    this.makeRotation(this.rotation);
  }

  public set RotationY(value: number) {
    this.rotation[1] = value;
    this.makeRotation(this.rotation);
  }

  public set RotationZ(value: number) {
    this.rotation[2] = value;
    this.makeRotation(this.rotation);
  }

  public get ModelMatrix(): mat4 {
    return this.model;
  }

  public set X(value: number) {
    this.position[0] = value;
    this.makeTranslation(this.position);
    this.makeModel();
  }

  public set Y(value: number) {
    this.position[1] = value;
    this.makeTranslation(this.position);
    this.makeModel();
  }

  public set Z(value: number) {
    this.position[2] = value;
    this.makeTranslation(this.position);
    this.makeModel();
  }

  public set ScaleX(value: number) {
    this.scale[0] = value;
    this.makeScale(this.scale);
    this.makeModel();
  }

  public set ScaleY(value: number) {
    this.scale[1] = value;
    this.makeScale(this.scale);
    this.makeModel();
  }

  public set ScaleZ(value: number) {
    this.scale[2] = value;
    this.makeScale(this.scale);
    this.makeModel();
  }

  private setTransformation(parameter?: ObjectParameters) {
    if (!parameter) return;
    this.position[0] = parameter.X ? parameter.X : 0;
    this.position[1] = parameter.Y ? parameter.Y : 0;
    this.position[2] = parameter.Z ? parameter.Z : 0;

    this.rotation[0] = parameter.RotX ? parameter.RotX : 0;
    this.rotation[1] = parameter.RotY ? parameter.RotY : 0;
    this.rotation[2] = parameter.RotZ ? parameter.RotZ : 0;

    this.scale[0] = parameter.ScaleX ? parameter.ScaleX : 1;
    this.scale[1] = parameter.ScaleY ? parameter.ScaleY : 1;
    this.scale[2] = parameter.ScaleZ ? parameter.ScaleZ : 1;

    this.initTRS();
    this.makeModel();
  }

  private makeRotX(angle: number): mat4 {
    const c = Math.cos(angle);
    const s = Math.sin(angle);

    // prettier-ignore
    const result: mat4 = mat4.fromValues(
      1.0, 0.0, 0.0, 0.0,
      0.0,  c,  -s,  0.0,
      0.0,  s,   c,  0.0,
      0.0, 0.0, 0.0, 1.0,
    );

    return result;
  }

  private makeRotY(angle: number) {
    const c = Math.cos(angle);
    const s = Math.sin(angle);

    // prettier-ignore
    const result: mat4 = mat4.fromValues(
       c,  0.0,  s,  0.0,
      0.0, 1.0, 0.0, 0.0,
      -s,  0.0,  c,  0.0,
      0.0, 0.0, 0.0, 1.0,
    );

    return result;
  }

  private makeRotZ(angle: number) {
    const c = Math.cos(angle);
    const s = Math.sin(angle);

    // prettier-ignore
    const result: mat4 = mat4.fromValues(
      c,   -s,  0.0, 0.0,
      s,    c,  0.0, 0.0,
      0.0, 0.0, 1.0, 0.0,
      0.0, 0.0, 0.0, 1.0,
    );

    return result;
  }

  // prettier-ignore
  private makeScale(s: vec3) {
    this.S = mat4.fromValues(
      s[0], 0.0, 0.0, 0.0,
      0.0, s[1], 0.0, 0.0,
      0.0, 0.0, s[2], 0.0,
      0.0, 0.0,  0.0, 1.0,
    );
  }

  // prettier-ignore
  private makeTranslation(t: vec3) {
    this.T = mat4.fromValues(
      1.0,  0.0,  0.0,  0.0,
      0.0,  1.0,  0.0,  0.0,
      0.0,  0.0,  1.0,  0.0,
      t[0], t[1], t[2], 1.0,
    );
  }

  private makeRotation(rotation: vec3): mat4 {
    return SimMath.multiply3Mat(
      this.makeRotX(rotation[0]),
      this.makeRotY(rotation[1]),
      this.makeRotZ(rotation[2]),
    );
  }

  private initTRS() {
    this.makeTranslation(this.Position);
    this.makeRotation(this.Rotation);
    this.makeScale(this.Scale);
  }

  private makeModel() {
    this.model = SimMath.multiply3Mat(this.T, this.R, this.S);
  }
}
