import { mat4, vec3 } from "gl-matrix";

export class Camera {
    public Active: boolean = false;

    public X: number = 0;
    public Y: number = 0;
    public Z: number = 0;

    public rotX: number = 0;
    public rotY: number = 0;
    public rotZ: number = 0;

    public fovy: number = (2 * Math.PI) / 5;
    public aspect: number = 16 / 9;

    public near: number = 0.1;
    public far: number = 1000;

    public LookAt: vec3 = vec3.fromValues(0, 0, 0);

    constructor(aspect: number, active?: boolean) {
        this.aspect = aspect;
        active ? this.Active = active : this.Active = false;
    }

    public getViewMatrix(): mat4 {
        let viewMatrix = mat4.create();
        mat4.lookAt(viewMatrix, vec3.fromValues(this.X, this.Y, this.Z), this.LookAt, vec3.fromValues(0, 1, 0));

        mat4.rotateX(viewMatrix, viewMatrix, this.rotX);
        mat4.rotateY(viewMatrix, viewMatrix, this.rotY);
        mat4.rotateZ(viewMatrix, viewMatrix, this.rotZ);

        return viewMatrix;
    }

    public getProjectionMatrix(): mat4 {
        let projectionMatrix = mat4.create();
        mat4.perspective(projectionMatrix, this.fovy, this.aspect, this.near, this.far);
        return projectionMatrix;
    }

    public getProjectionArray(): Float32Array {
        var result = new Float32Array(16);
        result.set(this.getCameraViewProjMatrix(), 0);
        return result;
    }

    public getCameraViewProjMatrix(): mat4 {
        const viewProjMatrix = mat4.create();
        const view = this.getViewMatrix();
        const proj = this.getProjectionMatrix();
        mat4.multiply(viewProjMatrix, proj, view);
        return viewProjMatrix;
    }
}