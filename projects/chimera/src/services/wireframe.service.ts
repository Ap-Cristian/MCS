import fs from 'fs';
import path from 'path'

const FRAGMENT_SHADER_FILE_NAME:string = "wireframe.fragment.wgsl";
const VERTEX_SHADER_FILE_NAME:string = "wireframe.vertex.wgsl";
const FOLDER_NAME = "Wireframe";

export function loadWireframeFragmentShader():string{
    let fragmentRelPath = path.join(__dirname, '../objects/' + FOLDER_NAME + "/" + FRAGMENT_SHADER_FILE_NAME);
    var fragmentSource = fs.readFileSync(fragmentRelPath, "utf-8");
    return fragmentSource;
}

export function loadWireframeVertexShader():string{
    let vertexRelPath = path.join(__dirname, '../objects/' + FOLDER_NAME + "/" + VERTEX_SHADER_FILE_NAME);
    var vertexSource = fs.readFileSync(vertexRelPath, "utf-8");
    return vertexSource;
}