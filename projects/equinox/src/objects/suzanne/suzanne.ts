import { McsObjectParameters } from "../../misc/mcsObjectParameters";
import { McsObject } from "../object";
import { SuzanneRenderPipeline } from "./suzanne.render.pipeline";

export class Suzanne extends McsObject{
    constructor(suzannePosition:McsObjectParameters){
        super("suzanne", suzannePosition);
    }
}