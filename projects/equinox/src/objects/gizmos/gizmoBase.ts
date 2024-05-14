import { McsObjectParameters } from "../../misc/mcsObjectParameters";
import { McsObject } from "../object";

export class Gizmo extends McsObject {
    private parentObject:McsObject;

    constructor(gizmoProperties:McsObjectParameters, parent?:McsObject){
        super("gizmo", gizmoProperties);
        parent ? this.parentObject = parent : this.parentObject = null;
    }
}