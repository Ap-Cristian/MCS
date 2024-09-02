import { CellShaderAPI } from "../api/cell.api";
import { IVertex } from "./interfaces/IVertex";

export class CellShaderResources {
    private _vertexCode: string;
    private _fragmentCode: string;
    private _vertexArray: IVertex[]; //object is a placeholder for vertex interface

    public get VertexCode(): string {
        return this._vertexCode as string;
    }
    public get FragmentCode(): string {
        return this._fragmentCode as string;
    }
    public get VertexArray(): IVertex[] {
        return this._vertexArray;
    }

    private static instance: CellShaderResources;

    public static getInstance(): CellShaderResources {
        if (!this.instance) {
            this.instance = new CellShaderResources();
        }
        return this.instance;
    }
    public async fetchData() {
        this._vertexCode = (await CellShaderAPI.GetCellVertexShader()).data;
        this._fragmentCode = (await CellShaderAPI.GetCellFragmentShader()).data;
        this._vertexArray = (await CellShaderAPI.GetCellVertexArray()).data;
        this._vertexArray.forEach((vert) => {
            vert.pos.push(1);
            vert.norm.push(1);
        })

        console.log(((await CellShaderAPI.GetCellVertexArray()).data) as IVertex[])
        console.log(this._vertexArray);
    }
    private constructor() {
    }
}