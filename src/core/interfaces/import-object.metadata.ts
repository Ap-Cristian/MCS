import { Vec2, Vec3, Vec4 } from "wgpu-matrix";

export interface FaceCorner {
    vertexIndex: number;
    textureCoordIndex: number;
    normalIndex: number;
}

export class ObjectMetadata {
    public Vertecies: Vec3[] = [];
    public Normals: Vec3[] = [];
    public Textures: Vec2[] = [];
    public Faces: FaceCorner[][] = [];
    public SmoothShading: number = 0;

    public get VerteciesToFlatArray(): number[] {
        const result: number[] = [];
        this.Vertecies.forEach((vertex)=>{
            result.push(vertex[0]);
            result.push(vertex[1]);
            result.push(vertex[2]);
            result.push(1); // (x, y, z, 1) easier to multiply in shader with proj mat 
        })
        return result;
    }

    public get NormalsToFlatArray(): number[] {
        const result: number[] = [];
        this.Normals.forEach((normal)=>{
            result.push(normal[0]);
            result.push(normal[1]);
            result.push(normal[2]);
        })

        return result;
    }

    public get TexturesToFlatArray(): number[] {
        const result: number[] = [];
        this.Textures.forEach((texture) => {
            result.push(texture[0]);
            result.push(texture[1]);
        })

        return result;
    }

    public get VerteciesIndexesFlat(): number[] {
        const result:number[] = [];
        this.Faces.forEach((face)=>{
            face.forEach((corner)=>{
                result.push(corner.vertexIndex);
            })
        })

        return result;
    }

    public get NormalIndexesFlat(): number[] {
        const result:number[] = [];
        this.Faces.forEach((face)=>{
            face.forEach((corner)=>{
                result.push(corner.normalIndex);
            })
        })
        
        return result;
    }

    public get TextureIndexesFlat(): number[] {
        const result:number[] = [];
        this.Faces.forEach((face) => {
            face.forEach((corner) => {
                result.push(corner.textureCoordIndex);
            })
        })
        
        return result;
    }

    private parseObjRow(row: string) {
        const rowSplit = row.split(' ');
        switch(rowSplit[0]) {
            case 'v':
                const vertex: Vec3 = [
                    Number.parseFloat(rowSplit[1]), // x
                    Number.parseFloat(rowSplit[2]), // y
                    Number.parseFloat(rowSplit[3])  // z
                ];
                
                this.Vertecies.push(vertex);
                break;
            case 'vn':
                const normal: Vec3 = [
                    Number.parseFloat(rowSplit[1]), // x
                    Number.parseFloat(rowSplit[2]), // y
                    Number.parseFloat(rowSplit[3])  // z
                ];
                this.Normals.push(normal);
                break;
            case 'vt':
                const vertexTexture: Vec2 = [
                    Number.parseFloat(rowSplit[1]), // x
                    Number.parseFloat(rowSplit[2]), // y
                ];
                this.Textures.push(vertexTexture);
                break;
            case 's':
                this.SmoothShading = parseFloat(rowSplit[0]);
                break;
            case 'f':
                const faceCorners: FaceCorner[] = [];
                rowSplit.slice(1).map((chunk)=>{
                    const faceCornerRaw = chunk.split('/');
                    const faceCorner: FaceCorner = {
                        vertexIndex: Number.parseFloat(faceCornerRaw[0]) - 1, // 1 indexed in obj file
                        textureCoordIndex: Number.parseFloat(faceCornerRaw[1]) - 1,
                        normalIndex: Number.parseFloat(faceCornerRaw[2]) - 1,
                    }
                    faceCorners.push(faceCorner);
                })
                this.Faces.push(faceCorners);
                break;
            default:
                break;
        }
    }
    
    constructor(obj: string){
        const rows = obj.split("\n");
        rows.map(row => this.parseObjRow(row))
    }
}
