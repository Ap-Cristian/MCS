import { Camera } from "../objects/camera";
import { McsObject } from "../base-classes/objectBase";
import { Scene } from "../objects/scene";
import { Renderer } from "../base-classes/rendererBase";

export class VoxelRenderer extends Renderer{
    private mainObject:McsObject;
    
    constructor(object:McsObject){
        super();
        this.mainObject = object;

        this.findBoundingBoxVertecies();
    }

    private findBoundingBoxVertecies(): void{
        var objectVertecies = this.mainObject.Drawable.VertexArray;
        
        for(var i = 0; i < objectVertecies.length; i++){
            // console.log(objectVertecies[i].pos + ' ');
        }
    }

    public initUniforms(scene: Scene, camera: Camera): void {
        throw new Error("Method not implemented.");
    }
    public frame(passEncoder: GPURenderPassEncoder, cameraProjectionArray: Float32Array): void {
        throw new Error("Method not implemented.");
    }

}