import path from 'path'
import fs from 'fs'
import { CubeVertex, cubeVertex } from '../shaders/cube.mesh';
// import { CubeVertex, cubeVertex } from '../shaders/cube.mesh.ts';

const fragmentFileName = 'cube.fragment.wgsl';
const vertexFileName = 'cube.vertex.wgsl';

export function loadShaderFileService() : string{

    let fragmentRelPath = path.join(__dirname, '../shaders/' + fragmentFileName);
    const fragmentSrc = fs.readFileSync(fragmentRelPath, 'utf-8');

    return fragmentSrc;
}

export function loadVertexFileService() : string{
    let shaderRelPath = path.join(__dirname, '../shaders/' + vertexFileName);
    const shaderSrc = fs.readFileSync(shaderRelPath, 'utf-8');

    return shaderSrc;
}

//cube vertex |[]

export function getCubeVertexArray(): Float32Array{
    return cubeVertex.cubeVertexArray;
}

export function getCubeMeshSize() : number{
    return cubeVertex.cubeVertexSize;
}

export function getCubeMeshPositionOffset() : number{
    return cubeVertex.cubePositionOffset;
}

export function getCubeMeshColorOffset() : number{
    return cubeVertex.cubeColorOffset;
}

export function getCubeMeshUVOffset() : number{
    return cubeVertex.cubeUVOffset;
}

export function getCubeMeshVertexCount() : number{
    return cubeVertex.cubeVertexCount;
}