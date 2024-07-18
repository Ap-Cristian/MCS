import { CellShaderAPI } from "../api/cell.api";
import { IVertex } from "./interfaces/IVertex";

export class CellShaderResources{
    public vertexCode:string;
    public fragmentCode:string;
    public vertexArray:IVertex[]; //object is a placeholder for vertex interface

    private static instance:CellShaderResources;

    public static getInstance():CellShaderResources{
        if(!this.instance){
            this.instance = new CellShaderResources();
        }
        return this.instance;
    }
    public async fetchData(){
        this.vertexCode = (await CellShaderAPI.GetCellVertexShader()).data;
        this.fragmentCode = (await CellShaderAPI.GetCellFragmentShader()).data;
        this.vertexArray = (await CellShaderAPI.GetCellVertexArray()).data;
    }
    private constructor(){
    }
}