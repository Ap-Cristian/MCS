import { McsObject } from "../base-classes/objectBase";
import { Camera } from "./camera";
import { MACGrid } from "./macGrid";

export interface SceneParams {
  cameras: Array<Camera>;
  objects: Array<McsObject>;
}
export class Scene {
  private _subject: McsObject | null;
  private _cameras: Camera[] = new Array<Camera>();
  private _objects: McsObject[] = [];
  private _grid: MACGrid;

  constructor(sceneParams: SceneParams) {
    this._objects = sceneParams.objects ? sceneParams.objects : null;
    this._cameras = sceneParams.cameras;
    this._grid = new MACGrid([2, 2, 2]);
  }

  public add(objectsToAdd?: McsObject | Array<McsObject>) {
    if (!objectsToAdd) return;
    if (Array.isArray(objectsToAdd)) {
      objectsToAdd.forEach((obj) => {
        this._objects.push(obj);
      });
    } else {
      this._objects.push(objectsToAdd);
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

  public get Grid(): MACGrid {
    return this._grid;
  }

  public set Subject(value: McsObject) {
    this._subject = value;
  }

  public get Subject(): McsObject {
    return this._subject;
  }

  public get Objects(): McsObject[] | null {
    if (this._objects) return this._objects;
    console.error("Scene: No Objects in scene.");
    return null;
  }
}
