import { IVertex } from "../../containers/interfaces/IVertex";
import { Color } from "../../misc/color";
import { McsObjectParameters } from "../../misc/mcsObjectParameters";
import { McsObject } from "../object";
import { Gizmo } from "./gizmoBase";

export class BoundingBox extends Gizmo{
    constructor(parent:McsObject){
        super({transform: parent.Parameters,parent: parent, color: new Color(255,255,255)});
    }
}