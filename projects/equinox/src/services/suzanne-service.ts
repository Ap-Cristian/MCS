import axios, { AxiosResponse } from "axios";
import { HTTPS_MAIN_URL } from '../env';

const SUZANNE_PATH:string = '/suzanne';
const MTL_ENDPOINT:string = "/mtl"; 
const OBJ_ENDPOINT:string = "/obj";

export class SuzanneService{
    constructor(){}
    
    // public static GetSuzanneMTL():Promise<AxiosResponse<any,any>>{
    //     try{
    //         const responseMTL= axios.get(HTTPS_MAIN_URL + SUZANNE_PATH + MTL_ENDPOINT);
    //         return responseMTL;
    //     }
    //     catch(ex){
    //         throw ex;
    //     }
    // }
    public static GetSuzanneVerteciesAndFaces():Promise<AxiosResponse<any,any>>{
        try{
            const responseOBJ = axios.get(HTTPS_MAIN_URL + SUZANNE_PATH + OBJ_ENDPOINT);
            return responseOBJ;
        }
        catch(ex){
            throw ex;
        }
    }
}