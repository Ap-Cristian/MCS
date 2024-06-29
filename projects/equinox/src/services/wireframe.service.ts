import axios, { AxiosResponse } from "axios";
import { HTTPS_MAIN_URL } from "../env";

const WIREFRAME_PATH:string = '/wireframe';
const VTX_ENDPOINT:string = "/vertexShader";
const FRG_ENDPOINT:string = "/fragmentShader";


export class WireframeService{
    constructor(){}

    public static GetWireframeVertexShader():Promise<AxiosResponse<any,any>>{
        try{
            const responseOBJ = axios.get(HTTPS_MAIN_URL + WIREFRAME_PATH + VTX_ENDPOINT);
            return responseOBJ;
        }
        catch(ex){
            throw ex;
        }
    }

    public static GetWireframeFragmentShader():Promise<AxiosResponse<any,any>>{
        try{
            const responseOBJ = axios.get(HTTPS_MAIN_URL + WIREFRAME_PATH + FRG_ENDPOINT);
            return responseOBJ;
        }
        catch(ex){
            throw ex;
        }
    }
}