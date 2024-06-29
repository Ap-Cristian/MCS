
import { SuzanneService } from "../services/suzanne-service";
import { WireframeService } from "../services/wireframe.service";
import { IContainer } from "./interfaces/IContainer";
import { IVertex } from "./interfaces/IVertex";

export class WireframeContainer implements IContainer{
    private static instance:WireframeContainer;

    public vertecies:IVertex[];
    public vertexCode:string = 'placeholder vertex sauce';
    public fragmentCode:string = 'placeholder fragment sauce';

    public static getInstance():WireframeContainer{
        if(!this.instance){
            this.instance = new WireframeContainer();
        }
        return this.instance;
    }
    public async fetchData(){
        const vertexShaderSource:string = (await WireframeService.GetWireframeVertexShader()).data;
        const fragmentShaderSource:string = (await WireframeService.GetWireframeFragmentShader()).data;

        this.vertexCode = vertexShaderSource;
        this.fragmentCode = fragmentShaderSource;
    }
    private constructor(){}
}