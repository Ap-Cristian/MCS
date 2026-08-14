import { Camera } from "./camera";
import { Render } from "../renders/render";

export interface SceneParams {
  cameras: Array<Camera>;
  renders?: Array<Render>;
}
export class Scene {
  private _focusedDrawable: Render | undefined;
  private _cameras: Camera[] = new Array<Camera>();
  private _drawables: Render[] = [];
 
  constructor(sceneParams: SceneParams) {
    this._drawables = sceneParams.renders ?? [];
    this._cameras = sceneParams.cameras;
    //camera changes but value reference not updating

    if (this._drawables && this._drawables.length) {
      this._focusedDrawable = this._drawables[0];
    }
  }

  public add(drawable?: Render | Array<Render>) {
    if (!drawable) return;
    if (Array.isArray(drawable)) {
      drawable.forEach((obj) => {
        this._drawables.push(obj);
      });
    } else {
      this._drawables.push(drawable);
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

  public get Drawables(): Render[] | null {
    if (this._drawables) return this._drawables;
    console.warn("Scene: Scene is empty.");
    return null;
  }

  public get FocusedDrawable(): Render | undefined{
    return this._focusedDrawable;
  }
}
