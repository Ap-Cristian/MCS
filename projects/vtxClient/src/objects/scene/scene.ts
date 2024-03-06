import { vec3 } from "gl-matrix";
import { Cell } from "../cell/cell";


export class Scene{
    public pointLightPosition = vec3.fromValues(0, 0, 0);

    private objects: Cell[] = [];

    public add (objectsToAdd: Cell | Array<Cell>) {
        if(Array.isArray(objectsToAdd)){
            objectsToAdd.forEach((cell)=>{
                this.objects.push(cell);
            })
        }
        else{
            this.objects.push(objectsToAdd);
        }
    }

    public getObjects () : Cell[] {
        return this.objects;
    }

    public getPointLightPosition(): Float32Array {
        return this.pointLightPosition as Float32Array;
    }
}