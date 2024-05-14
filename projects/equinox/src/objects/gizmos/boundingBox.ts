import { IVertex } from "../../containers/interfaces/IVertex";
import { McsObjectParameters } from "../../misc/mcsObjectParameters";
import { McsObject } from "../object";
import { Gizmo } from "./gizmoBase";

export class BoundingBox extends Gizmo{

    constructor(parent:McsObject){
        super(parent.Parameters, parent);
    }
}