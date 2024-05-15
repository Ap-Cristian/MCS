import { Color } from "../../misc/color";
import { McsObjectParameters } from "../../misc/mcsObjectParameters";
import { McsObject } from "../../objects/object";

export interface IGizmo{
    transform: McsObjectParameters,
    color?: Color,
    parent?: McsObject
};