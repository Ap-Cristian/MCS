import { Router, Request, Response, NextFunction } from 'express';
import { getCubeMeshColorOffset, getCubeMeshPositionOffset, getCubeMeshSize, getCubeMeshUVOffset, getCubeMeshVertexCount, getCubeVertexArray, loadShaderFileService, loadVertexFileService } from '../services/default-cube.service';
// import { CubeVertex } from '../shaders/cube.mesh.ts';
export const DefaultCubeRouter = Router();

const CUBE_SHADER_ENDPOINT = '/fragment';
const CUBE_VERTEX_ENDPOINT = '/vertex';

const CUBE_MESH_ENDPOINT = '/mesh';
const CUBE_MESH_VERTEX_COUNT_ENDPOINT = CUBE_MESH_ENDPOINT + '/vertexCount';
const CUBE_MESH_VERTEX_ARRAY = CUBE_MESH_ENDPOINT + '/vertex';


const CUBE_MESH_OFFSETS_ENDPOINT = CUBE_MESH_ENDPOINT + '/offsets';
const CUBE_MESH_ENDPOINT_POSITION_OFFSET = CUBE_MESH_OFFSETS_ENDPOINT + '/cubePosition';
const CUBE_MESH_ENDPOINT_COLOR_OFFSET = CUBE_MESH_OFFSETS_ENDPOINT + '/cubeColor';
const CUBE_MESH_ENDPOINT_UV_OFFSET = CUBE_MESH_OFFSETS_ENDPOINT + '/uv';

// CUBE_MESH_ENDPOINT => vertex array
// CUBE_VERTEX_COUNT => vertex count


const CUBE_MESH_ENDPOINT_VERTEX_SIZE = '/vertexsize';


const CORS_HEADER = 'Access-Control-Allow-Origin';


DefaultCubeRouter.get(CUBE_SHADER_ENDPOINT,
    async (req: Request, res: Response, next: NextFunction) => {
        let defaultCubeShader: string;
        try{
            defaultCubeShader = loadShaderFileService();
            res.header(CORS_HEADER, '*');

        }catch(ex){
            console.log("[DEBUG] ERR: loading default cube shader failed ");
            console.log("Debug point reach");

            return res.end(ex);
    
        }
        return res.end(defaultCubeShader);
    }
);

DefaultCubeRouter.get(CUBE_VERTEX_ENDPOINT,
    async (req: Request, res: Response, next: NextFunction) => {
        const query = req.body;
        let defaultCubeVertex: string;
        try{
            defaultCubeVertex = loadVertexFileService();
            res.header(CORS_HEADER,'*');
        }catch(ex){
            console.log("[DEBUG] ERR: loading default cube shader failed ");
            return res.end(ex);
        }
        return res.end(defaultCubeVertex);
    }
);

DefaultCubeRouter.get(CUBE_MESH_VERTEX_COUNT_ENDPOINT,
    async (req: Request, res: Response, next: NextFunction) => {
        const query = req.body;
        let defaultCubeVertexCount: number;
        try{
            defaultCubeVertexCount = getCubeMeshVertexCount();
            res.header(CORS_HEADER,'*');
        }catch(ex){
            console.log("[DEBUG] ERR: loading default cube shader failed ");
            return res.end(ex);
        }
        return res.end(defaultCubeVertexCount);
    }
);

DefaultCubeRouter.get(CUBE_MESH_ENDPOINT,
    async (req: Request, res: Response, next: NextFunction) => {
        const query = req.body;
        let defaultCubeVertexCount: number;
        try{
            defaultCubeVertexCount = getCubeMeshVertexCount();
            res.header(CORS_HEADER,'*');
        }catch(ex){
            console.log("[DEBUG] ERR: loading default cube shader failed ");
            return res.end(ex);
        }
        return res.end(defaultCubeVertexCount);
    }
);

DefaultCubeRouter.get(CUBE_MESH_ENDPOINT_COLOR_OFFSET,
    async (req: Request, res: Response, next: NextFunction) => {
        const query = req.body;
        let defaultCubeColorOffset: number;
        try{
            defaultCubeColorOffset = getCubeMeshColorOffset();
            res.header(CORS_HEADER,'*');
        }catch(ex){
            console.log("[DEBUG] ERR: loading default cube shader failed ");
            return res.end(ex);
        }
        return res.end(defaultCubeColorOffset);
    }
);

DefaultCubeRouter.get(CUBE_MESH_ENDPOINT_POSITION_OFFSET,
    async (req: Request, res: Response, next: NextFunction) => {
        const query = req.body;
        let defaultCubePositionOffset: number;
        try{
            defaultCubePositionOffset = getCubeMeshPositionOffset();
            res.header(CORS_HEADER,'*');
        }catch(ex){
            console.log("[DEBUG] ERR: loading default cube shader failed ");
            return res.end(ex);
        }
        return res.end(defaultCubePositionOffset);
    }
);

DefaultCubeRouter.get(CUBE_MESH_ENDPOINT_UV_OFFSET,
    async (req: Request, res: Response, next: NextFunction) => {
        const query = req.body;
        let defaultCubeUVOffset: number;
        try{
            defaultCubeUVOffset = getCubeMeshUVOffset();
            res.header(CORS_HEADER,'*');
        }catch(ex){
            console.log("[DEBUG] ERR: loading default cube shader failed ");
            return res.end(ex);
        }
        return res.end(defaultCubeUVOffset);
    }
);

DefaultCubeRouter.get(CUBE_MESH_ENDPOINT_UV_OFFSET,
    async (req: Request, res: Response, next: NextFunction) => {
        const query = req.body;
        let defaultCubeUVOffset: number;
        try{
            defaultCubeUVOffset = getCubeMeshUVOffset();
            res.header(CORS_HEADER,'*');
        }catch(ex){
            console.log("[DEBUG] ERR: loading default cube shader failed ");
            return res.end(ex);
        }
        return res.end(defaultCubeUVOffset);
    }
);

DefaultCubeRouter.get(CUBE_MESH_VERTEX_ARRAY,
    async (req: Request, res: Response, next: NextFunction) => {
        const query = req.body;
        let defaultCubeMeshVertexArray: Float32Array;
        try{
            defaultCubeMeshVertexArray = getCubeVertexArray();
            res.header(CORS_HEADER,'*');
        }catch(ex){
            console.log("[DEBUG] ERR: loading default cube shader failed ");
            return res.end(ex);
        }
        return res.end(defaultCubeMeshVertexArray.toString());
    }
);