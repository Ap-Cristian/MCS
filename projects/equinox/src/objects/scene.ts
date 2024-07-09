import { McsObject } from "../base-classes/objectBase";
import { Cell } from "./cell";

export class Scene{
    private subject: McsObject | null;

    public Objects: McsObject[] = [];

    public add(objectsToAdd?: McsObject | Array<McsObject>) {
        if (objectsToAdd) {
            if (Array.isArray(objectsToAdd)) {
                objectsToAdd.forEach((obj) => {
                    this.Objects.push(obj);
                })
            }
            else {
                this.Objects.push(objectsToAdd);
            }
        }
    }

    public spawnInitialCells(density:number){
        this.subject.BoundingBox.BottomVertecies.forEach((vertex)=>{
            this.add(new Cell({
                X:vertex.pos[0], 
                Y:vertex.pos[1], 
                Z:vertex.pos[2], 
                ScaleX:0.1, 
                ScaleY:0.1, 
                ScaleZ:0.1
            }));
        })
    }

    public set Subject(value: McsObject){
        this.subject = value;
    }

    public get Subject():McsObject{
        return this.subject;
    }
}