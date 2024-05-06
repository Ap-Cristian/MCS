import { SuzanneService } from "../services/suzanne-service";

export class SuzanneContainer{
    public obj:string;
    public mtl:string;

    private static instance:SuzanneContainer;

    public static getInstance():SuzanneContainer{
        if(!this.instance){
            this.instance = new SuzanneContainer();
        }
        return this.instance;
    }
    public async fetchData(){
        this.obj = (await SuzanneService.GetSuzanneOBJ()).data;
        this.mtl = (await SuzanneService.GetSuzanneMTL()).data;
    }
    private constructor(){
    }
}