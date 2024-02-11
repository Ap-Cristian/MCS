import { Router, Request, Response, NextFunction } from 'express';
import { loadShaderFileService } from '../services/default-cube.service';
export const DefaultCubeRouter = Router();

DefaultCubeRouter.get('/',
    async (req: Request, res: Response, next: NextFunction) => {
        const query = req.body;
        let defaultCubeShader: string;
        try{
            defaultCubeShader = loadShaderFileService();
            res.header('Access-Control-Allow-Origin','*');
        }catch(ex){
            console.log("[DEBUG] ERR: loading default cube shader failed ");
            return res.end(ex);
        }
        
        return res.end(defaultCubeShader);
    }
);