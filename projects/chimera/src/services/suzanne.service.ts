import path from 'path';
import fs from 'fs';

const MTL_FILE_NAME = 'Suzanne.mtl';
const OBJ_FILE_NAME = 'Suzanne.obj';

const FOLDER_NAME = "/Suzanne/";
export function loadSuzanneMtl(): string {
    let mtlPath = path.join(__dirname, '../objects' + FOLDER_NAME + MTL_FILE_NAME);
    const mtlContent = fs.readFileSync(mtlPath, 'utf-8');
    return mtlContent;
}

export function loadSuzanneObj(): string {
    let objPath = path.join(__dirname, '../objects'+ FOLDER_NAME + OBJ_FILE_NAME);
    const objContent = fs.readFileSync(objPath, 'utf-8');
    return objContent;
}
