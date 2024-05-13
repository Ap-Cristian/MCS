import { Color } from "../../misc/color";
import { McsObjectParameters } from "../../misc/mcsObjectParameters";
import { McsObject } from "../object";

const DEBUG_DISABLE_CELL_LOGIC = false;

export class Cell extends McsObject{

    public TempValue: number = 9999;

    private defaultColor: Color = {
        R: 0.9,
        G: 0.6,
        B: 0.1,
    }

    constructor(cellParameters:McsObjectParameters){
        super("cell",cellParameters);
    }

}