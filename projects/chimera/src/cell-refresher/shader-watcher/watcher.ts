import fs from 'fs';
import path from 'path';
import { APP_ENV } from '../../app-module/app-env';
import { sendCellRefreshSignal } from '../../app-module/app-ws';


const CELL_SHADER_PATH = "../../shaders/";
const CELL_FRAGMENT_SHADER = "cell.fragment.wgsl";
const CELL_VERTEX_SHADER = "cell.vertex.wgsl";

let fragmentPath = path.join(__dirname, CELL_SHADER_PATH + CELL_FRAGMENT_SHADER)
let vertexPath = path.join(__dirname, CELL_SHADER_PATH + CELL_VERTEX_SHADER)


export class cellWatcher{
    private static onCellShaderChanged(curr:any,prev:any){
        console.log("Cell shader changed")
        sendCellRefreshSignal();
    }

    static startWatching():void{
        console.log(`[${APP_ENV.APP_NAME}] Watching for cell shader changes...`);
        fs.watchFile(fragmentPath,{ interval: 1000 }, this.onCellShaderChanged);
        fs.watchFile(vertexPath,{ interval: 1000 }, this.onCellShaderChanged);
    }
}