import { facesParameters } from "../interfaces/facesParameters";
import { vertexParameters } from "../interfaces/vertexParameters";
import { SuzanneService } from "../services/suzanne-service";
import { Container } from "../interfaces/IContainer";
import { ISuzanneResponse } from "../interfaces/ISuzanneResponse";

export class SuzanneContainer implements Container{
    public vertecies:vertexParameters[];
    public faces:facesParameters[];

    private static instance:SuzanneContainer;

    public static getInstance():SuzanneContainer{
        if(!this.instance){
            this.instance = new SuzanneContainer();
        }
        return this.instance;
    }
    public async fetchData(){
        const verteciesAndFaces:ISuzanneResponse = (await SuzanneService.GetSuzanneVerteciesAndFaces()).data;

        this.vertecies = verteciesAndFaces.vertecies;
        this.faces = verteciesAndFaces.faces;
    }
    private constructor(){
    }
}