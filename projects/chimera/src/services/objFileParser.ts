import { IVertex } from '../objects/Suzanne/IVertex';
import { IFace } from '../objects/Suzanne/IFace';

import fs from 'fs';
import readline from 'readline';

export class ObjFileParser{
    private objectIdentifier = '';
    private vertecies:IVertex[] = [];
    private faces:IFace[] = [];
    

    private pathOBJ:string = '';
    private pathMTL:string = '';

    private objReadStream:string = '';
    private mtlReadStream:string = '';

    private mtlFileName:string = '';

    public GetVertecies():IVertex[] | null{
        return this.vertecies.length > 0 ? this.vertecies : null;
    }

    public GetFaces():IFace[] | null{
        return this.faces.length > 0 ? this.faces : null;
    }

    private parseFiles() {
        this.objReadStream = fs.readFileSync(this.pathOBJ, 'utf-8');
        this.mtlReadStream = fs.readFileSync(this.pathMTL, 'utf-8');
        //parse vertecies
        
        var pos:Array<number[]> = [];
        var norm:Array<number[]> = [];
        var uv:Array<number[]> = [];

        const objContentLines = this.objReadStream.split('\n');

        for (const line of objContentLines){
            const lineSplitRes = line.split(" ");

            switch (lineSplitRes[0]){
                case 'mtllib':
                    this.mtlFileName = lineSplitRes[1];
                    break;
                case 'o':
                    this.objectIdentifier = lineSplitRes[1];
                    break;
                case 'v':
                    pos.push([
                        Number.parseFloat(lineSplitRes[1]), 
                        Number.parseFloat(lineSplitRes[2]),
                        Number.parseFloat(lineSplitRes[3])
                    ]);
                    break;
                case 'vn':
                    norm.push([
                        Number.parseFloat(lineSplitRes[1]), 
                        Number.parseFloat(lineSplitRes[2]),
                        Number.parseFloat(lineSplitRes[3])
                    ]);
                    break;
                case 'vt':
                    uv.push([
                        Number.parseFloat(lineSplitRes[1]),
                        Number.parseFloat(lineSplitRes[2])
                    ]);
                    break;
                case '#':
                case 's':
                case '':
                    break;
                case 'f':
                    var currentFace:IFace = { indexes:[] };
                    lineSplitRes.forEach((value)=>{
                        if(value != 'f'){
                            var faceSplit = value.split('/');
                            currentFace.indexes.push(Number.parseInt(faceSplit[0]) - 1);
                        }
                    });
                    this.faces.push(currentFace);
                    break;
                default:
                    console.log("[!!!] Invalid OBJ file attempted to parse or untreated line starting!\n");
                    console.log(lineSplitRes[0]);
                    break;
            }
        }

        for(var i = 0; i < pos.length; i++){
            var vertex:IVertex = {
                pos:pos[i],
                norm: i < norm.length ? norm[i] : [0,0,0],
                uv:uv[i]

            }
            // console.log(pos[i])
            this.vertecies.push(vertex);
        }

        // console.log(pos.length);
        // console.log(norm.length);
        // console.log(uv.length);

    }

    constructor(objPath: string, mtlPath:string){
        this.pathOBJ = objPath;
        this.pathMTL = mtlPath;

        this.parseFiles();
    }
};