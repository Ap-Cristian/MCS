import axios from "axios";

const MAIN_URL:string = 'http://localhost:1024';
const DEFAULT_CUBE_ENDPOINT:string = '/defaultcube';
const VERTEX:string = "/vertex";
const FRAGMENT:string = "/fragment"; 

const CUBE_MESH_ENDPOINT = '/mesh';
const CUBE_MESH_VERTEX_ARRAY = CUBE_MESH_ENDPOINT + VERTEX;


export class CubeShaderService{

    constructor(){}

    public async GetShaderVertex():Promise<string>{
        try{
            const responseVertex = await axios.get(MAIN_URL + DEFAULT_CUBE_ENDPOINT + VERTEX);
            return responseVertex.data;
        }
        catch(ex){
            throw ex;
        }
    }

    public async GetShaderFragment():Promise<string>{
        try{
            const responseFragment = await axios.get(MAIN_URL + DEFAULT_CUBE_ENDPOINT + FRAGMENT);
            return responseFragment.data;
        }
        catch(ex){
            throw ex;
        }
    }

    public async GetShaderMeshVertecies():Promise<string>{
        try{
            const responseFragment = await axios.get(MAIN_URL + DEFAULT_CUBE_ENDPOINT + CUBE_MESH_VERTEX_ARRAY);
            return responseFragment.data;
        }
        catch(ex){
            throw ex;
        }
    }
}