import axios from "axios";

const MAIN_URL:string = 'http://localhost:1024';
const DEFAULT_CUBE_ENDPOINT:string = '/defaultcube';

export class CubeShaderService{

    constructor(){

    }

    public async GetShader():Promise<string>{
        try{
            const response = await axios.get(MAIN_URL + DEFAULT_CUBE_ENDPOINT);
            return response.data;
        }
        catch(ex){
            throw ex;
        }
    }
}