import { WireframeAPI } from "../api/wireframe.api";
import { IContainer } from "../res/interfaces/IContainer";
import { IVertex } from "../res/interfaces/IVertex";

export class WireframeShaderResources implements IContainer{
    private static instance:WireframeShaderResources;

    public vertecies:IVertex[];
    public vertexCode:string = 'placeholder vertex sauce';
    public fragmentCode:string = 'placeholder fragment sauce';

    public static getInstance():WireframeShaderResources{
        if(!this.instance){
            this.instance = new WireframeShaderResources();
        }
        return this.instance;
    }
    public async fetchData(){
        const vertexShaderSource:string = (await WireframeAPI.GetWireframeVertexShader()).data;
        const fragmentShaderSource:string = (await WireframeAPI.GetWireframeFragmentShader()).data;

        this.vertexCode = vertexShaderSource;
        this.fragmentCode = fragmentShaderSource;
    }
    private constructor(){}
}