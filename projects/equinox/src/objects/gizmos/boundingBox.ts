import { Color } from "../../misc/color";
import { McsObject } from "../object";
import { Gizmo } from "./gizmoBase";

export class BoundingBox extends Gizmo{
    public Color:Color;

    constructor(parent:McsObject, color?:Color){
        super({parent: parent});

        this.Color = color ? color : new Color(255,255,255);
    }
}