import { mat4, vec3 } from "gl-matrix";
import { McsObject } from "./objectBase";

export class Camera extends McsObject {
  public Active: boolean = false;
  public fovy: number = (2 * Math.PI) / 5;
  public aspect: number = 16 / 9;
  public near: number = 0.1;
  public far: number = 1000;
  public LookAt: vec3 = vec3.fromValues(0, 0, 0);

  constructor(aspect: number, active?: boolean) {
    super();
    this.aspect = aspect;
    active ? (this.Active = active) : (this.Active = false);
  }

  public getViewMatrix(): mat4 {
    let viewMatrix = mat4.create();

    mat4.lookAt(
      viewMatrix,
      vec3.fromValues(this.X, this.Y, this.Z),
      this.LookAt,
      vec3.fromValues(0, 1, 0),
    );

    mat4.rotateX(viewMatrix, viewMatrix, this.RotationX);
    mat4.rotateY(viewMatrix, viewMatrix, this.RotationY);
    mat4.rotateZ(viewMatrix, viewMatrix, this.RotationZ);

    return viewMatrix;
  }

  public getProjectionMatrix(): mat4 {
    let projectionMatrix = mat4.create();
    mat4.perspective(
      projectionMatrix,
      this.fovy,
      this.aspect,
      this.near,
      this.far,
    );
    return projectionMatrix;
  }

  public getProjectionArray(): Float32Array {
    var result = new Float32Array(16);
    result.set(this.getCameraViewProjMatrix(), 0);
    return result;
  }

  public getCameraViewProjMatrix(): mat4 {
    const vp = mat4.create();
    const view = this.getViewMatrix();
    const proj = this.getProjectionMatrix();
    mat4.multiply(vp, proj, view);
    return vp;
  }
}
