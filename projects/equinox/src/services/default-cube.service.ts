import { vertices } from '../shaders/cell.mesh';
import path from 'path'
import fs from 'fs'

const FRAGMENT_FILE_NAME = 'cell.fragment.wgsl';
const VERTEX_FILE_NAME = 'cell.vertex.wgsl';

export function loadCellFragmentShader(): string{
    let fragmentRelPath = path.join(__dirname, '../shaders/' + FRAGMENT_FILE_NAME);
    const fragmentSrc = fs.readFileSync(fragmentRelPath, 'utf-8');

    return fragmentSrc;
}

export function loadCellVertexShader(): string{
    let shaderRelPath = path.join(__dirname, '../shaders/' + VERTEX_FILE_NAME);
    const shaderSrc = fs.readFileSync(shaderRelPath, 'utf-8');

    return shaderSrc;
}

export function getCellVertexArray(){
    return JSON.stringify(vertices);
}