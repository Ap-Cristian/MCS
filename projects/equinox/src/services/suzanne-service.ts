import axios, { AxiosResponse } from "axios";
import { HTTPS_MAIN_URL } from "../env";

const SUZANNE_PATH:string = '/suzanne';
const MTL_ENDPOINT:string = "/mtl"; 
const OBJ_ENDPOINT:string = "/obj";
const VTX_ENDPOINT:string = "/vertShader";
const FRG_ENDPOINT:string = "/fragShader";



export class SuzanneService{
    constructor(){}
    
    public static GetSuzanneVerteciesAndFaces():Promise<AxiosResponse<any,any>>{
        try{
            const responseOBJ = axios.get(HTTPS_MAIN_URL + SUZANNE_PATH + OBJ_ENDPOINT);
            return responseOBJ;
        }
        catch(ex){
            throw ex;
        }
    }

    public static GetSuzanneVertexShader():Promise<AxiosResponse<any,any>>{
        try{
            const responseOBJ = axios.get(HTTPS_MAIN_URL + SUZANNE_PATH + VTX_ENDPOINT);
            return responseOBJ;
        }
        catch(ex){
            throw ex;
        }
    }

    public static GetSuzanneFragmentShader():Promise<AxiosResponse<any,any>>{
        try{
            const responseOBJ = axios.get(HTTPS_MAIN_URL + SUZANNE_PATH + FRG_ENDPOINT);
            return responseOBJ;
        }
        catch(ex){
            throw ex;
        }
    }
}