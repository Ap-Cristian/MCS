import { vec3 } from "gl-matrix";
import { McsObject } from "../object";
import { BoundingBox } from "../gizmos/boundingBox";
import { Color } from "../../misc/color";
import { Cell } from "../cell/cell";

export class Scene{
    private subject: McsObject | null;
    public SubjectBoundingBox: BoundingBox;

    //cells go in objects?
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
        this.SubjectBoundingBox.BottomVertecies.forEach((vertex)=>{
            this.add(new Cell({
                X:vertex.pos[0], 
                Y:vertex.pos[1], 
                Z:vertex.pos[2], 
                ScaleX:0.1, 
                ScaleY:0.1, 
                ScaleZ:0.1
            }));
        })
        console.log(this.Objects, this.Objects.length)
        // this.add(new Cell({
        //     X:this.SubjectBoundingBox.X, 
        //     Y:this.SubjectBoundingBox.Y, 
        //     Z:this.SubjectBoundingBox.Z, 
        //     ScaleX:cellScale, 
        //     ScaleY:cellScale, 
        //     ScaleZ:cellScale
        // }));
    }

    public set Subject(value: McsObject){
        this.subject = value;
        this.SubjectBoundingBox = new BoundingBox(this.subject, Color.WHITE);
    }

    public get Subject():McsObject{
        return this.subject;
    }
}