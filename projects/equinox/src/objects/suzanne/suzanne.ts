import { McsObjectParameters } from "../../misc/mcsObjectParameters";
import { McsObject } from "../object";

export class Suzanne extends McsObject{
    constructor(suzannePosition:McsObjectParameters){
        super("suzanne", suzannePosition);
    }
}