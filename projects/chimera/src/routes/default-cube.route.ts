import { Router, Request, Response, NextFunction } from 'express';
import { getCellVertexArray, loadCellVertexShader, loadCellFragmentShader } from '../services/default-cube.service';

export const CellRouter = Router();

const CELL_FRAGMENT_SHADER_ENDPOINT = '/fragmentShader';
const CELL_VERTEX_SHADER_ENDPOINT = '/vertexShader';
const CELL_MESH_VERTEX_ARRAY = '/vertexArray';
const CORS_HEADER = 'Access-Control-Allow-Origin';

// const CUBE_MESH_VERTEX_COUNT_ENDPOINT = CUBE_MESH_ENDPOINT + '/vertexCount';
// const CUBE_MESH_OFFSETS_ENDPOINT = CUBE_MESH_ENDPOINT + '/offsets';
// const CUBE_MESH_ENDPOINT_POSITION_OFFSET = CUBE_MESH_OFFSETS_ENDPOINT + '/cubePosition';
// const CUBE_MESH_ENDPOINT_COLOR_OFFSET = CUBE_MESH_OFFSETS_ENDPOINT + '/cubeColor';
// const CUBE_MESH_ENDPOINT_UV_OFFSET = CUBE_MESH_OFFSETS_ENDPOINT + '/uv';
// CUBE_MESH_ENDPOINT => vertex array
// CUBE_VERTEX_COUNT => vertex count
// const CUBE_MESH_ENDPOINT_VERTEX_SIZE = '/vertexsize';

CellRouter.get(CELL_VERTEX_SHADER_ENDPOINT,
    async (req: Request, res: Response, next: NextFunction) => {
        let cellVertexShader: string;
        try{
            cellVertexShader = loadCellVertexShader();
            res.header(CORS_HEADER, '*');

        }catch(ex){
            console.log("[DEBUG] ERR: loading CELL VERTEX SHADER failed ");
            return res.end(ex);
    
        }
        return res.end(cellVertexShader);
    }
);

CellRouter.get(CELL_FRAGMENT_SHADER_ENDPOINT,
    async (req: Request, res: Response, next: NextFunction) => {
        const query = req.body;
        let defaultCubeVertex: string;
        try{
            defaultCubeVertex = loadCellFragmentShader();
            res.header(CORS_HEADER,'*');
        }catch(ex){
            console.log("[DEBUG] ERR: loading CELL FRAGMENT SHADER failed ");
            return res.end(ex);
        }
        return res.end(defaultCubeVertex);
    }
);

CellRouter.get(CELL_MESH_VERTEX_ARRAY,
    async (req: Request, res: Response, next: NextFunction) => {
        const query = req.body;
        let defaultCubeMeshVertexArray;
        try{
            defaultCubeMeshVertexArray = getCellVertexArray();
            res.header(CORS_HEADER,'*');
        }catch(ex){
            console.log("[DEBUG] ERR: loading CELL VERTEX ARRAY failed ");
            return res.end(ex);
        }
        return res.end(defaultCubeMeshVertexArray);
    }
);

// DefaultCubeRouter.get(CUBE_MESH_VERTEX_COUNT_ENDPOINT,
//     async (req: Request, res: Response, next: NextFunction) => {
//         const query = req.body;
//         let defaultCubeVertexCount: number;
//         try{
//             defaultCubeVertexCount = getCubeMeshVertexCount();
//             res.header(CORS_HEADER,'*');
//         }catch(ex){
//             console.log("[DEBUG] ERR: loading default cube shader failed ");
//             return res.end(ex);
//         }
//         return res.end(defaultCubeVertexCount);
//     }
// );

// DefaultCubeRouter.get(CUBE_MESH_ENDPOINT,
//     async (req: Request, res: Response, next: NextFunction) => {
//         const query = req.body;
//         let defaultCubeVertexCount: number;
//         try{
//             defaultCubeVertexCount = getCubeMeshVertexCount();
//             res.header(CORS_HEADER,'*');
//         }catch(ex){
//             console.log("[DEBUG] ERR: loading default cube shader failed ");
//             return res.end(ex);
//         }
//         return res.end(defaultCubeVertexCount);
//     }
// );

// DefaultCubeRouter.get(CUBE_MESH_ENDPOINT_COLOR_OFFSET,
//     async (req: Request, res: Response, next: NextFunction) => {
//         const query = req.body;
//         let defaultCubeColorOffset: number;
//         try{
//             defaultCubeColorOffset = getCubeMeshColorOffset();
//             res.header(CORS_HEADER,'*');
//         }catch(ex){
//             console.log("[DEBUG] ERR: loading default cube shader failed ");
//             return res.end(ex);
//         }
//         return res.end(defaultCubeColorOffset);
//     }
// );

// DefaultCubeRouter.get(CUBE_MESH_ENDPOINT_POSITION_OFFSET,
//     async (req: Request, res: Response, next: NextFunction) => {
//         const query = req.body;
//         let defaultCubePositionOffset: number;
//         try{
//             defaultCubePositionOffset = getCubeMeshPositionOffset();
//             res.header(CORS_HEADER,'*');
//         }catch(ex){
//             console.log("[DEBUG] ERR: loading default cube shader failed ");
//             return res.end(ex);
//         }
//         return res.end(defaultCubePositionOffset);
//     }
// );

// DefaultCubeRouter.get(CUBE_MESH_ENDPOINT_UV_OFFSET,
//     async (req: Request, res: Response, next: NextFunction) => {
//         const query = req.body;
//         let defaultCubeUVOffset: number;
//         try{
//             defaultCubeUVOffset = getCubeMeshUVOffset();
//             res.header(CORS_HEADER,'*');
//         }catch(ex){
//             console.log("[DEBUG] ERR: loading default cube shader failed ");
//             return res.end(ex);
//         }
//         return res.end(defaultCubeUVOffset);
//     }
// );

// DefaultCubeRouter.get(CUBE_MESH_ENDPOINT_UV_OFFSET,
//     async (req: Request, res: Response, next: NextFunction) => {
//         const query = req.body;
//         let defaultCubeUVOffset: number;
//         try{
//             defaultCubeUVOffset = getCubeMeshUVOffset();
//             res.header(CORS_HEADER,'*');
//         }catch(ex){
//             console.log("[DEBUG] ERR: loading default cube shader failed ");
//             return res.end(ex);
//         }
//         return res.end(defaultCubeUVOffset);
//     }
// );