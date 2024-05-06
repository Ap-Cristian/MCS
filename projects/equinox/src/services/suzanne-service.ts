import axios, { AxiosResponse } from "axios";

const MAIN_URL:string = 'http://localhost:1024';
const SUZANNE_PATH:string = '/suzanne';
const MTL_ENDPOINT:string = "/mtl"; 
const OBJ_ENDPOINT:string = "/obj";


export class SuzanneService{

    constructor(){}
    
    public static GetSuzanneMTL():Promise<AxiosResponse<any,any>>{
        try{
            const responseMTL= axios.get(MAIN_URL + SUZANNE_PATH + MTL_ENDPOINT);
            return responseMTL;
        }
        catch(ex){
            throw ex;
        }
    }
    public static GetSuzanneOBJ():Promise<AxiosResponse<any,any>>{
        try{
            const responseOBJ = axios.get(MAIN_URL + SUZANNE_PATH + OBJ_ENDPOINT);
            return responseOBJ;
        }
        catch(ex){
            throw ex;
        }
    }
}