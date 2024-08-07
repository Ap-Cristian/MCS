import axios, { AxiosResponse } from "axios";
import { HTTPS_MAIN_URL } from "../env";

const CELL_ENDPOINT:string = '/cell';
const FRAGMENT_SHADER:string = "/fragmentShader"; 
const VERTEX_SHADER:string = "/vertexShader";
const CELL_VERTEX_ARRAY = '/vertexArray';

export class CellShaderAPI{

    constructor(){}
    
    public static AxiosGetCellVertexShader():Promise<AxiosResponse<any,any>>{
        try{
            const responseVertex = axios.get(HTTPS_MAIN_URL + CELL_ENDPOINT + VERTEX_SHADER);
            return responseVertex;
        }
        catch(ex){
            throw ex;
        }
    }
    public static GetCellVertexShader():Promise<AxiosResponse<any,any>>{
        try{
            const responseVertex = axios.get(HTTPS_MAIN_URL + CELL_ENDPOINT + VERTEX_SHADER);
            return responseVertex;
        }
        catch(ex){
            throw ex;
        }
    }

    public static GetCellFragmentShader():Promise<AxiosResponse<any,any>>{
        try{
            const responseFragment = axios.get(HTTPS_MAIN_URL + CELL_ENDPOINT + FRAGMENT_SHADER);
            return responseFragment;
        }
        catch(ex){
            throw ex;
        }
    }

    public static GetCellVertexArray():Promise<AxiosResponse<any,any>>{
        try{
            const responseFragment = axios.get(HTTPS_MAIN_URL + CELL_ENDPOINT + CELL_VERTEX_ARRAY);
            return responseFragment;
        }
        catch(ex){
            throw ex;
        }
    }
}