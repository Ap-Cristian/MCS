
import { SuzanneService } from "../services/suzanne-service";
import { IContainer } from "../interfaces/IContainer";
import { ISuzanneResponse } from "../interfaces/ISuzanneResponse";
import { IFace } from "../interfaces/IFace";
import { IVertex } from "../interfaces/IVertex";

export class SuzanneContainer implements IContainer{
    public vertecies:IVertex[];
    public faces:IFace[];
    public vertexCode:string = 'placeholder vertex sauce';
    public fragmentCode:string = 'placeholder fragment sauce';
    private static instance:SuzanneContainer;

    public static getInstance():SuzanneContainer{
        if(!this.instance){
            this.instance = new SuzanneContainer();
        }
        return this.instance;
    }
    public async fetchData(){
        const verteciesAndFaces:ISuzanneResponse = (await SuzanneService.GetSuzanneVerteciesAndFaces()).data;
        const vertexShaderSource:string = (await SuzanneService.GetSuzanneVertexShader()).data;
        const fragmentShaderSource:string = (await SuzanneService.GetSuzanneFragmentShader()).data;

        this.vertecies = verteciesAndFaces.vertecies;
        this.faces = verteciesAndFaces.faces;
        this.vertexCode = vertexShaderSource;
        this.fragmentCode = fragmentShaderSource;
    }
    private constructor(){}
}