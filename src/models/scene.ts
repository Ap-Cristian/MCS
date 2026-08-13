import { Camera } from "./camera";
import { MACGridModel } from "./macGrid";
import { Drawable } from "./drawable";

export interface SceneParams {
  cameras: Array<Camera>;
  drawables?: Array<Drawable>;
}
export class Scene {
  private _focusedDrawable: Drawable | undefined;
  private _cameras: Camera[] = new Array<Camera>();
  private _drawables: Drawable[] = [];
  private _grid: MACGridModel;
 
  constructor(sceneParams: SceneParams) {
    this._drawables = sceneParams.drawables ?? [];
    this._cameras = sceneParams.cameras;
    //camera changes but value reference not updating
    this._grid = new MACGridModel([8, 2, 8]);

    if (this._drawables && this._drawables.length) {
      this._focusedDrawable = this._drawables[0];
    }
  }

  public add(drawable?: Drawable | Array<Drawable>) {
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

  public get Grid(): MACGridModel {
    return this._grid;
  }

  public get Drawables(): Drawable[] | null {
    if (this._drawables) return this._drawables;
    console.warn("Scene: Scene is empty.");
    return null;
  }

  public get FocusedDrawable(): Drawable | undefined{
    return this._focusedDrawable;
  }
}
