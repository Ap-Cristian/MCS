import fs from 'fs';
import path from 'path';
import { APP_ENV } from '../../app-module/app-env';
import { sendCellRefreshSignal } from '../../app-module/app-ws';
import { getCurrentDateAndTimeToString } from '../../misc/time';

const CELL_SHADER_PATH = "../../shaders/";
const CELL_FRAGMENT_SHADER = "cell.fragment.wgsl";
const CELL_VERTEX_SHADER = "cell.vertex.wgsl";

const SUZANNE_SHADER_PATH = "../../objects/Suzanne/";
const SUZANNE_FRAGMENT_SHADER = "suzanne.fragment.wgsl";
const SUZANNE_VERTEX_SHADER = "suzanne.vertex.wgsl";

const BOUNDINGBOX_SHADER_PATH = "../../objects/Wireframe/";
const BOUNDIGNBOX_FRAGMENT_SHADER = "wireframe.fragment.wgsl";
const BOUNDINGBOX_VERTEX_SHADER = "wireframe.vertex.wgsl";

let fragmentPath_cell = path.join(__dirname, CELL_SHADER_PATH + CELL_FRAGMENT_SHADER)
let vertexPath_cell = path.join(__dirname, CELL_SHADER_PATH + CELL_VERTEX_SHADER)

let fragmentPath_suzanne = path.join(__dirname, SUZANNE_SHADER_PATH + SUZANNE_FRAGMENT_SHADER)
let vertexPath_suzanne = path.join(__dirname, SUZANNE_SHADER_PATH + SUZANNE_VERTEX_SHADER)

let fragmentPath_boundingBox = path.join(__dirname, BOUNDINGBOX_SHADER_PATH + BOUNDIGNBOX_FRAGMENT_SHADER)
let vertexPath_boundingBox = path.join(__dirname, BOUNDINGBOX_SHADER_PATH + BOUNDINGBOX_VERTEX_SHADER)

export class cellWatcher {
    private static onShaderChanged(curr: any, prev: any) {
        console.log(`[${getCurrentDateAndTimeToString()}][${APP_ENV.APP_NAME}]` +
            `Cell shader changed! Sending signal to client...`);
        sendCellRefreshSignal();
    }

    static startWatching(): void {
        console.log(`[${getCurrentDateAndTimeToString()}][${APP_ENV.APP_NAME}]` +
            ` Watching for shader file changes`);
            
        fs.watchFile(fragmentPath_cell, { interval: 1000 }, this.onShaderChanged);
        fs.watchFile(vertexPath_cell, { interval: 1000 }, this.onShaderChanged);

        fs.watchFile(fragmentPath_suzanne, { interval: 1000 }, this.onShaderChanged);
        fs.watchFile(vertexPath_suzanne, { interval: 1000 }, this.onShaderChanged);

        fs.watchFile(fragmentPath_boundingBox, { interval: 1000 }, this.onShaderChanged);
        fs.watchFile(vertexPath_boundingBox, { interval: 1000 }, this.onShaderChanged);
    }
}