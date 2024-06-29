import { Router, Request, Response, NextFunction } from 'express';
import { loadWireframeFragmentShader, loadWireframeVertexShader } from '../services/wireframe.service';

export const WireframeRouter = Router();

const WIREFRAME_FRAGMENT_SHADER_ENDPOINT = '/fragmentShader';
const WIREFRAME_VERTEX_SHADER_ENDPOINT = '/vertexShader';

const CORS_HEADER = 'Access-Control-Allow-Origin';

WireframeRouter.get(WIREFRAME_FRAGMENT_SHADER_ENDPOINT,
    async (req: Request, res: Response, next: NextFunction) => {
        let boundingBoxFragmentShader: string;
        try{
            boundingBoxFragmentShader = loadWireframeFragmentShader();
            res.header(CORS_HEADER, '*');

        }catch(ex){
            console.log("[DEBUG] ERR: loading CELL VERTEX SHADER failed ");
            return res.end(ex);
    
        }
        return res.end(boundingBoxFragmentShader);
    }
);

WireframeRouter.get(WIREFRAME_VERTEX_SHADER_ENDPOINT,
    async (req: Request, res: Response, next: NextFunction) => {
        let boundingBoxVertexShader: string;
        try{
            boundingBoxVertexShader = loadWireframeVertexShader();
            res.header(CORS_HEADER, '*');

        }catch(ex){
            console.log("[DEBUG] ERR: loading CELL VERTEX SHADER failed ");
            return res.end(ex);
    
        }
        return res.end(boundingBoxVertexShader);
    }
);