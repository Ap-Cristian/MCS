import { vec3 } from "gl-matrix";
import { McsObject } from "../object";


export class Scene{
    public pointLightPosition = vec3.fromValues(0, 0, 0);

    private subject: McsObject | null;
    private objects: McsObject[] = [];

    public add(objectsToAdd?: McsObject | Array<McsObject>) {
        if (objectsToAdd) {
            if (Array.isArray(objectsToAdd)) {
                objectsToAdd.forEach((obj) => {
                    this.objects.push(obj);
                })
            }
            else {
                this.objects.push(objectsToAdd);
            }
        }
    }

    public setSubject(subject:McsObject){
        this.subject = subject;
    }

    public getObjects(): McsObject[] {
        return this.objects;
    }

    public getSubject(): McsObject{
        return this.subject;
    }

    public getPointLightPosition(): Float32Array {
        return this.pointLightPosition as Float32Array;
    }
}