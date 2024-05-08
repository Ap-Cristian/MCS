import { SuzanneContainer } from "../../containers/suzanne.container";
import { McsObjectParameter } from "../../interfaces/objectParameter";
import { McsObject } from "../object";

export class Suzanne extends McsObject{
    public constructor(parameter?: McsObjectParameter){
        parameter.type = 'suzanne';
        super(parameter);
    }
}