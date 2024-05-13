import path from 'path';
import fs from 'fs';
import { ObjFileParser } from './objFileParser';
import { ISuzanneObjResponse } from '../objects/Suzanne/ISuzanneResponse';

const MTL_FILE_NAME = 'Suzanne_Tri.mtl';
const OBJ_FILE_NAME = 'Suzanne_Tri.obj';

const FRAG_FILE_NAME = 'suzanne.fragment.wgsl';
const VERT_FILE_NAME = 'suzanne.vertex.wgsl';

const FOLDER_NAME = "/Suzanne/";

export function loadSuzanneMtl(): string {
    let mtlPath = path.join(__dirname, '../objects' + FOLDER_NAME + MTL_FILE_NAME);
    const mtlContent = fs.readFileSync(mtlPath, 'utf-8');
    return mtlContent;
}

export function loadSuzanneObj(): string {
    let objPath = path.join(__dirname, '../objects'+ FOLDER_NAME + OBJ_FILE_NAME);
    let mtlPath = path.join(__dirname, '../objects' + FOLDER_NAME + MTL_FILE_NAME);
    
    const parser:ObjFileParser = new ObjFileParser(objPath, mtlPath);
    let suzanne:ISuzanneObjResponse = {
        vertecies:parser.GetVertecies(),
        faces:parser.GetFaces(),
    }

    return JSON.stringify(suzanne);
}

export function loadSuzanneVertexShader(): string {
    let vertPath = path.join(__dirname, '../objects'+ FOLDER_NAME + VERT_FILE_NAME);
    const vertShaderContent = fs.readFileSync(vertPath, "utf-8");
    return JSON.stringify(vertShaderContent);
}

export function loadSuzanneFragmenthader(): string {
    let fragPath = path.join(__dirname, '../objects'+ FOLDER_NAME + FRAG_FILE_NAME);
    const fragShaderContent = fs.readFileSync(fragPath, "utf-8");
    return JSON.stringify(fragShaderContent);
}
