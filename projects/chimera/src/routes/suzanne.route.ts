import { Router, Request, Response, NextFunction } from 'express';
import { loadSuzanneFragmenthader, loadSuzanneMtl, loadSuzanneObj, loadSuzanneVertexShader } from '../services/suzanne.service';

export const SuzanneRouter = Router();

const SUZANNE_MTL_ENDPOINT  = '/mtl';
const SUZANNE_OBJ_ENDPOINT  = '/obj';
const SUZANNE_VERTEX_ENDPOINT  = '/vertShader';
const SUZANNE_FRAGMENT_ENDPOINT  = '/fragShader';
const CORS_HEADER           = 'Access-Control-Allow-Origin';

SuzanneRouter.get(SUZANNE_MTL_ENDPOINT,
    async (req: Request, res: Response, next: NextFunction) => {
        let mtl: string;
        try{
            mtl = loadSuzanneMtl();
            res.header(CORS_HEADER, '*');

        }catch(ex){
            console.log("[DEBUG] ERR: loading SUZANNE MTL failed ");
            return res.end(ex);
    
        }
        return res.end(mtl);
    }
);

SuzanneRouter.get(SUZANNE_OBJ_ENDPOINT,
    async (req: Request, res: Response, next: NextFunction) => {
        let obj: string;
        try{
            obj = loadSuzanneObj();
            res.header(CORS_HEADER,'*');
        }catch(ex){
            console.log("[DEBUG] ERR: loading SUZANNE OBJ failed ");
            return res.end(ex);
        }
        return res.end(obj);
    }
);

SuzanneRouter.get(SUZANNE_VERTEX_ENDPOINT,
    async (req: Request, res: Response, next: NextFunction) => {
        let obj: string;
        try{
            obj = loadSuzanneVertexShader();
            res.header(CORS_HEADER,'*');
        }catch(ex){
            console.log("[DEBUG] ERR: loading SUZANNE VTX failed ");
            return res.end(ex);
        }
        return res.end(obj);
    }
);

SuzanneRouter.get(SUZANNE_FRAGMENT_ENDPOINT,
    async (req: Request, res: Response) => {
        let obj: string;
        try{
            obj = loadSuzanneFragmenthader();
            res.header(CORS_HEADER,'*');
        }catch(ex){
            console.log("[DEBUG] ERR: loading SUZANNE FRG failed ");
            return res.end(ex);
        }
        return res.end(obj);
    }
);