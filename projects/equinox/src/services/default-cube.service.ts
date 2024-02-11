import path from 'path'
import fs from 'fs'

export function loadShaderFileService() : string{
    let shaderRelPath = path.join(__dirname, '../shaders/cube-shader.wgsl');
    const shaderSrc = fs.readFileSync(shaderRelPath, 'utf-8');

    return shaderSrc;
}