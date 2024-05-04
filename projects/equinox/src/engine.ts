import { vec3 } from "gl-matrix";
import { randomIntFromInterval } from "./misc/math";
import { Camera } from "./objects/camera/camera";
import { Cell } from "./objects/cell/cell";
import { Scene } from "./objects/scene/scene";
import { WebGpuRenderer } from "./renderer";

export const NUMBER_OF_CELLS_ON_ROW:number = 10;
export const NUMBER_OF_CELLS:number = NUMBER_OF_CELLS_ON_ROW ** 3; 

export class Engine{

    private htmlCanvas:HTMLCanvasElement;
    private mainRenderer:WebGpuRenderer;
    private mainCam:Camera;
    private mainScene:Scene;

    private resizeContextToWindow():void {
        if(this.htmlCanvas){
            console.log("[DEBUG] Window resized, updating...");
            this.htmlCanvas.width = window.innerWidth;
            this.htmlCanvas.height = window.innerHeight;
            
            this.mainCam.aspect = this.htmlCanvas.width / this.htmlCanvas.height;
            this.mainRenderer.update(this.htmlCanvas);
        }
    }

    constructor(){
        this.htmlCanvas = document.querySelector('canvas')

        if (this.htmlCanvas) {
            this.htmlCanvas.width = window.innerWidth
            this.htmlCanvas.height = window.innerHeight

            addEventListener("resize", ()=>{
                this.resizeContextToWindow();
            });

            this.mainRenderer = new WebGpuRenderer();
            this.mainRenderer.init(this.htmlCanvas).then((success)=>{
                if(!success){ 
                    console.error("[ERR] Failed to init main renderer, exiting...");
                    return;
                }
                
                this.mainCam = new Camera(this.htmlCanvas.width / this.htmlCanvas.height);
                this.mainCam.Z = 10;

                this.mainScene = new Scene();

                var time1 = new Date();

                var currentX:number = 0;
                var currentY:number = 0;
                var currentZ:number = 0;

                console.log("Number of cells to be instantiated:", NUMBER_OF_CELLS);

                var cellsCount = 0;
                for(var i = 0; i < NUMBER_OF_CELLS_ON_ROW; i++){
                    for(var j = 0; j < NUMBER_OF_CELLS_ON_ROW; j++){
                         for(var k = 0; k < NUMBER_OF_CELLS_ON_ROW; k++){
                            this.mainScene.add(new Cell({X:currentX, Y:currentY, Z:currentZ}, randomIntFromInterval(1, 9999)));
                            currentX += 2;
                            cellsCount++;
                         }
                         currentY += 2;
                         currentX = 0;
                    }
                    currentZ += 2;
                    currentY = 0;
                }

                // this.mainCam.lookAt = this.mainScene.getObjects()[0].Transform;
                console.log("Instanciated", cellsCount, "cells!");
                //performance probe
                var time2 = new Date();
                var dtime = time2.getMilliseconds() - time1.getMilliseconds();
                console.log("Cell init took:", dtime, "ms\n");
                //
                this.mainRenderer.initCellsUniforms(this.mainScene, this.mainCam);

                const doFrame = () => {
                    const now = Date.now() / 1000;

                    this.mainRenderer.update(this.htmlCanvas);
                    this.mainRenderer.frame(this.mainCam, this.mainScene);

                    requestAnimationFrame(doFrame);
                };
                //"That synchronization is taken care of by the requestAnimationFrame() method that is used to implement the animation."
                requestAnimationFrame(doFrame); //used in order to sync CPU with GPU

                this.htmlCanvas.onwheel = (event: WheelEvent) => {
                    const wheelSpeed = event.deltaY / 5000;
                    if(this.mainCam.fovy > 0.01 && wheelSpeed < 0){
                        this.mainCam.fovy += wheelSpeed;
                    }else if(this.mainCam.fovy <= 0.01){
                        this.mainCam.Z += wheelSpeed;
                    }
                    if(wheelSpeed > 0 && this.mainCam.fovy <= 1){
                        this.mainCam.fovy += wheelSpeed;
                    }else if(wheelSpeed > 0 && this.mainCam.fovy > 1){
                        this.mainCam.Z += wheelSpeed * 10;
                    }
                }

                var shiftPressed:boolean = false;
                window.onkeydown = (event: KeyboardEvent) =>{
                    if(event.key == "Shift"){
                        shiftPressed = true;
                    }
                }

                window.onkeyup = (event: KeyboardEvent) =>{
                    if(event.key == "Shift"){
                        shiftPressed = false;
                    }
                }

                // MOUSE DRAG
                var mouseDown = false;
                this.htmlCanvas.onmousedown = (event: MouseEvent) => {
                    mouseDown = true;
                
                    lastMouseX = event.pageX;
                    lastMouseY = event.pageY;
                }
                this.htmlCanvas.onmouseup = (event: MouseEvent) => {
                    mouseDown = false;
                }
                var lastMouseX=-1; 
                var lastMouseY=-1;
                this.htmlCanvas.onmousemove = (event: MouseEvent) => {
                    if (!mouseDown) {
                        return;
                    }
                
                    var mousex = event.pageX;
                    var mousey = event.pageY;
                
                    if (lastMouseX > 0 && lastMouseY > 0) {
                        const mouseDeltaX = mousex - lastMouseX;
                        const mouseDeltaY = mousey - lastMouseY;

                        if(!shiftPressed){
                            this.mainCam.rotY += mouseDeltaX / 100;
                            this.mainCam.rotX += mouseDeltaY / 100;
                        }else{
                            this.mainCam.X += mouseDeltaX / 100;
                            this.mainCam.Y += mouseDeltaY / 100;
                            // this.mainCam.lookAt = vec3.fromValues(this.mainCam.lookAt[0] + mouseDeltaX, this.mainCam.lookAt[1] - mouseDeltaY, this.mainCam.lookAt[2]);
                        }
                    }
                
                    lastMouseX = mousex;
                    lastMouseY = mousey;
                }

            });
        }
    }
}
