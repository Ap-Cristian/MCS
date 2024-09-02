import { Router, Request, Response, NextFunction } from 'express';
import { getCellVertexArray, loadCellVertexShader, loadCellFragmentShader } from '../services/default-cube.service';
import { getCurrentDateAndTimeToString } from '../misc/time';

export const CellRouter = Router();

const CELL_FRAGMENT_SHADER_ENDPOINT = '/fragmentShader';
const CELL_VERTEX_SHADER_ENDPOINT = '/vertexShader';
const CELL_MESH_VERTEX_ARRAY = '/vertexArray';
const CORS_HEADER = 'Access-Control-Allow-Origin';

CellRouter.get(CELL_VERTEX_SHADER_ENDPOINT,
    async (req: Request, res: Response, next: NextFunction) => {
        let cellVertexShader: string;
        try {
            cellVertexShader = loadCellVertexShader();
            res.header(CORS_HEADER, '*');

        } catch (ex) {
            console.log(`[${getCurrentDateAndTimeToString()}][DEBUG] ERR: loading CELL VERTEX SHADER failed `, ex);
            res.statusCode = 500;
            return res.end(ex);

        }
        return res.end(cellVertexShader);
    }
);

CellRouter.get(CELL_FRAGMENT_SHADER_ENDPOINT,
    async (req: Request, res: Response, next: NextFunction) => {
        const query = req.body;
        let defaultCubeVertex: string;
        try {
            defaultCubeVertex = loadCellFragmentShader();
            res.header(CORS_HEADER, '*');
        } catch (ex) {
            console.log(`[${getCurrentDateAndTimeToString()}][DEBUG] ERR: loading CELL FRAGMENT SHADER failed: `, ex);
            res.statusCode = 500;
            return res.end(ex);
        }
        return res.end(defaultCubeVertex);
    }
);

CellRouter.get(CELL_MESH_VERTEX_ARRAY,
    async (req: Request, res: Response, next: NextFunction) => {
        const query = req.body;
        let defaultCubeMeshVertexArray;
        try {
            defaultCubeMeshVertexArray = getCellVertexArray();
            res.header(CORS_HEADER, '*');
        } catch (ex) {
            console.log(`[${getCurrentDateAndTimeToString()}][DEBUG] ERR: loading CELL VERTEX ARRAY failed `, ex);
            res.statusCode = 500;
            return res.end(ex);
        }
        return res.end(defaultCubeMeshVertexArray);
    }
);