import { Color } from "../../misc/color";
import { McsObject } from "../object";
import { McsObjectParameter } from '../../interfaces/objectParameter';

const DEBUG_DISABLE_CELL_LOGIC = false;
export class Cell extends McsObject{
    private TempValue: Number;

    private defaultColor: Color = {
        R: 0.9,
        G: 0.6,
        B: 0.1,
    }

    constructor(parameter?: McsObjectParameter, temp?:number) {
        parameter.type = 'cell';
        super(parameter);
        temp ? this.TempValue = temp : 0;
    }
}