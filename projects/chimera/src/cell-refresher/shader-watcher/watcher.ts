import fs from 'fs';
import path from 'path';
import { APP_ENV } from '../../app-module/app-env';
import { sendCellRefreshSignal } from '../../app-module/app-ws';


const CELL_SHADER_PATH = "../../shaders/";
const CELL_FRAGMENT_SHADER = "cell.fragment.wgsl";
const CELL_VERTEX_SHADER = "cell.vertex.wgsl";

const SUZANNE_SHADER_PATH = "../../objects/Suzanne/";
const SUZANNE_FRAGMENT_SHADER = "suzanne.fragment.wgsl";
const SUZANNE_VERTEX_SHADER = "suzanne.vertex.wgsl";

let fragmentPath_cell = path.join(__dirname, CELL_SHADER_PATH + CELL_FRAGMENT_SHADER)
let vertexPath_cell = path.join(__dirname, CELL_SHADER_PATH + CELL_VERTEX_SHADER)

let fragmentPath_suzanne = path.join(__dirname, SUZANNE_SHADER_PATH + SUZANNE_FRAGMENT_SHADER)
let vertexPath_suzanne = path.join(__dirname, SUZANNE_SHADER_PATH + SUZANNE_VERTEX_SHADER)

export class cellWatcher{
    private static onCellShaderChanged(curr:any,prev:any){
        console.log("Cell shader changed")
        sendCellRefreshSignal();
    }

    static startWatching():void{
        console.log(`[${APP_ENV.APP_NAME}] Watching for shader file changes...`);
        fs.watchFile(fragmentPath_cell,{ interval: 1000 }, this.onCellShaderChanged);
        fs.watchFile(vertexPath_cell,{ interval: 1000 }, this.onCellShaderChanged);

        fs.watchFile(fragmentPath_suzanne,{ interval: 1000 }, this.onCellShaderChanged);
        fs.watchFile(vertexPath_suzanne,{ interval: 1000 }, this.onCellShaderChanged);
    }
}