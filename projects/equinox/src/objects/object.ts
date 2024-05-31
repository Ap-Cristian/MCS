import { vec3 } from "gl-matrix";
import { McsObjectParameters } from "../misc/mcsObjectParameters";
import { SuzanneRenderPipeline } from "./suzanne/suzanne.render.pipeline";
import { CellRenderPipeline } from "./cell/cell.render.pipeline";
import { IVertex } from "../containers/interfaces/IVertex";
import { SuzanneContainer } from "../containers/suzanne.container";
import { CellShaderContainer } from "../containers/cell-shader.container";
import { IFace } from "../containers/interfaces/IFace";

export abstract class McsObject{
    //human readable form
    private x: number = 0;
    private y: number = 0;
    private z: number = 0;

    private rotationX: number = 0;
    private rotationY: number = 0;
    private rotationZ: number = 0;

    private scaleX: number = 1;
    private scaleY: number = 1;
    private scaleZ: number = 1;

    public type:string = '';

    //gpu readable form
    private PosArray32f: Float32Array = new Float32Array(3);
    private RotArray32f: Float32Array = new Float32Array(3);
    private ScaleArray32f: Float32Array = new Float32Array(3);


    //object render stuff
    protected renderPipeline:GPURenderPipeline;
    protected vertexArray: IVertex[];
    protected facesArray: IFace[];
    //

    abstract attachRenderObjects():void;

    constructor(objType:string, parameter?: McsObjectParameters) {
        this.setTransformation(parameter);
        this.type = objType;
        // switch(this.type){
        //     case 'suzanne':
        //         this.renderPipeline = SuzanneRenderPipeline.GetInstance().Pipeline;
        //         this.vertexArray = SuzanneContainer.getInstance().vertecies;
        //         this.facesArray = SuzanneContainer.getInstance().faces;
        //         break;
        //     case 'cell':
        //         this.renderPipeline = CellRenderPipeline.GetInstance().Pipeline;
        //         this.vertexArray = CellShaderContainer.getInstance().vertexArray;
        //         break;
        //     default:
        //         break;
        // }

        this.attachRenderObjects();
    }

    public get Parameters():McsObjectParameters{
        return {
            X: this.x,
            Y: this.y,
            Z: this.z,

            ScaleX: this.scaleX,
            ScaleY: this.scaleY,
            ScaleZ: this.scaleZ,

            RotX: this.rotationX,
            RotY: this.rotationY,
            RotZ: this.rotationZ,
        } as McsObjectParameters
    }

    public get RenderPipeline():GPURenderPipeline{
        return this.renderPipeline;
    }
    public get GPUPosArray(): Float32Array{
        return this.PosArray32f;
    }
    public get GPURotArray(): Float32Array{
        return this.RotArray32f;
    }
    public get GPUScaleArray(): Float32Array{
        return this.ScaleArray32f;
    }
    public get FacesArray():IFace[]{
        return this.facesArray;
    }
    public get VertexArray():IVertex[]{
        return this.vertexArray;
    }


    public get RotationX(){
        return this.rotationX;
    }

    public get RotationY(){
        return this.rotationY;
    }

    public get RotationZ(){
        return this.rotationZ;
    }

    public get ScaleX(){
        return this.scaleX;
    }

    public get ScaleY(){
        return this.scaleY;
    }

    public get ScaleZ(){
        return this.scaleZ;
    }

    public get X(){
        return this.x;
    }

    public get Y(){
        return this.y;
    }

    public get Z(){
        return this.z;
    }

    public set RotationX(value:number){
        this.rotationX = value;
        this.GPURotArray[0] = value;
    }

    public set RotationY(value:number){
        this.rotationY = value;
        this.GPURotArray[1] = value;
    }

    public set RotationZ(value:number){
        this.rotationZ = value;
        this.GPURotArray[2] = value;
    }
    public set X(value:number){
        this.x = value;
        this.GPUPosArray[0] = value;
    }

    public set Y(value:number){
        this.y = value;
        this.GPUPosArray[1] = value;
    }

    public set Z(value:number){
        this.z = value;
        this.GPUPosArray[2] = value;
    }
    public set ScaleX(value:number){
        this.scaleX = value;
        this.GPUScaleArray[0] = value;
    }

    public set ScaleY(value:number){
        this.scaleY = value;
        this.GPUScaleArray[1] = value;
    }

    public set ScaleZ(value:number){
        this.scaleZ = value;
        this.GPUScaleArray[2] = value;
    }

    private setTransformation(parameter?: McsObjectParameters) {
        if (parameter == null) {
            return;
        }
        this.x = parameter.X ? parameter.X : 0;
        this.y = parameter.Y ? parameter.Y : 0;
        this.z = parameter.Z ? parameter.Z : 0;

        this.rotationX = parameter.RotX ? parameter.RotX : 0;
        this.rotationY = parameter.RotY ? parameter.RotY : 0;
        this.rotationZ = parameter.RotZ ? parameter.RotZ : 0;

        this.scaleX = parameter.ScaleX ? parameter.ScaleX : 1;
        this.scaleY = parameter.ScaleY ? parameter.ScaleY : 1;
        this.scaleZ = parameter.ScaleZ ? parameter.ScaleZ : 1;

        this.PosArray32f[0] = this.x;
        this.PosArray32f[1] = this.y;
        this.PosArray32f[2] = this.z;

        this.RotArray32f[0] = this.rotationX;
        this.RotArray32f[1] = this.rotationY;
        this.RotArray32f[2] = this.rotationZ;

        this.ScaleArray32f[0] = this.scaleX;
        this.ScaleArray32f[1] = this.scaleY;
        this.ScaleArray32f[2] = this.scaleZ;
    }
}