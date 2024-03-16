import { vertexParameters } from "../misc/vertexParameters";
import { CellShaderService } from "../services/cell-shader-service";

export class CellShaderContainer{
    public vertexCode:string;
    public fragmentCode:string;
    public vertexArray:vertexParameters[]; //object is a placeholder for vertex interface

    private static instance:CellShaderContainer;

    public static getInstance():CellShaderContainer{
        if(!this.instance){
            this.instance = new CellShaderContainer();
        }
        return this.instance;
    }
    public async fetchData(){
        this.vertexCode = (await CellShaderService.GetCellVertexShader()).data;
        this.fragmentCode = (await CellShaderService.GetCellFragmentShader()).data;
        this.vertexArray = (await CellShaderService.GetCellVertexArray()).data;
    }
    private constructor(){
    }
}