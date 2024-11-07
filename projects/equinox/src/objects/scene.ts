import { McsObject } from "../base-classes/objectBase";
import { DrawableObjectType } from "../helpers/renderUtils";
import { Camera } from "./camera";

export interface SceneParams {
    cameras: Array<Camera>,
    objects: Array<McsObject>
}
export class Scene {
    private _subject: McsObject | null;
    private _cameras: Camera[] = new Array<Camera>();
    private _objects: McsObject[] = [];

    constructor(sceneParams: SceneParams) {
        this._objects = sceneParams.objects ? sceneParams.objects : null;
        this._cameras = sceneParams.cameras;
        this.spawnInitialCells(0);
    }

    public add(objectsToAdd?: McsObject | Array<McsObject>) {
        if (objectsToAdd) {
            if (Array.isArray(objectsToAdd)) {
                objectsToAdd.forEach((obj) => {
                    this._objects.push(obj);
                })
            }
            else {
                this._objects.push(objectsToAdd);
            }
        }
    }

    public get ActiveCamera(): Camera | null {
        if (this._cameras) {
            for (var i = 0; i < this._cameras.length; i++) {
                if (this._cameras[i].Active) {
                    return this._cameras[i];
                }
            }
        }
        console.error("Scene: No active camera.");
        return null;
    }

    public spawnInitialCells(density: number) {
        // this.subject.BoundingBox.BottomVertecies.forEach((vertex)=>{
        //     this.add(new Cell({
        //         X:vertex.pos[0], 
        //         Y:vertex.pos[1], 
        //         Z:vertex.pos[2], 
        //         ScaleX:0.1, 
        //         ScaleY:0.1, 
        //         ScaleZ:0.1
        //     }));
        // })
        var currentX = 0;
        var currentY = 0;
        const DISTANCE_BETWEEN_CELLS = 2;

        for (var i = 0; i < 10; i++) {
            this.add(new McsObject({
                type: DrawableObjectType.CELL,
                parameters: {
                    X: currentX,
                    Y: currentY,
                    Z: 0,
                    RotX: 0,
                    RotY: 0,
                    RotZ: 0,
                    ScaleX: 1,
                    ScaleY: 1,
                    ScaleZ: 1
                }
            }));
            currentX += DISTANCE_BETWEEN_CELLS;
        }
    }

    public set Subject(value: McsObject) {
        this._subject = value;
    }

    public get Subject(): McsObject {
        return this._subject;
    }

    public get Objects(): McsObject[] | null {
        if (this._objects)
            return this._objects
        console.error("Scene: No Objects in scene.");
        return null;
    }
}