import { Camera } from "./camera";
import { Cell } from "./cell";
import { Scene } from "./scene";
import { Suzanne } from "./suzanne";
import { WebGpuRenderer } from "./rendererMain";
import { InputHandler } from "./inputHandler";

const CELLS_DEBUG = false;
export const NUMBER_OF_CELLS_ON_ROW:number = CELLS_DEBUG ? 10 : 0;
export const NUMBER_OF_CELLS:number = NUMBER_OF_CELLS_ON_ROW ** 3; 

export class Engine{
    private webGPUCanvas:HTMLCanvasElement;
    private frameRateCanvas:HTMLCanvasElement;
    private canvases:HTMLCanvasElement[] = new Array<HTMLCanvasElement>(); // 0 - WebGPU - canvas, 1 - framerate canvas

    private mainRenderer:WebGpuRenderer;
    private mainCam:Camera;
    private mainScene:Scene;
    private inputHandler:InputHandler;

    private resizeContextToWindow():void {
        if(this.webGPUCanvas){
            console.log("[DEBUG] Window resized, updating...");2
            this.webGPUCanvas.width = window.innerWidth;
            this.webGPUCanvas.height = window.innerHeight;
            
            this.mainCam.aspect = this.webGPUCanvas.width / this.webGPUCanvas.height;
            this.mainRenderer.updateMain(this.webGPUCanvas);
            if(this.mainRenderer){
                this.mainRenderer.UpdateRenderPassDescriptor(this.webGPUCanvas);
            }
        }
    }

    constructor(){
        this.webGPUCanvas = document.getElementById('webGpu-context') as HTMLCanvasElement;
        this.frameRateCanvas = document.getElementById('framerate-context') as HTMLCanvasElement;

        this.canvases = this.canvases.concat([this.webGPUCanvas, this.frameRateCanvas]);

        if (this.webGPUCanvas) {
            this.webGPUCanvas.width = window.innerWidth;
            this.webGPUCanvas.height = window.innerHeight;
            
            addEventListener("resize", ()=>{
                this.resizeContextToWindow();
            });

            this.mainRenderer = new WebGpuRenderer();
            this.mainRenderer.init(this.canvases).then((success)=>{
                if(!success){ 
                    console.error("[ERR] Failed to init main renderer, exiting...");
                    return;
                }
                
                this.mainCam = new Camera(this.webGPUCanvas.width / this.webGPUCanvas.height);
                this.mainCam.Z = 10;
                this.inputHandler = new InputHandler();

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
                            this.mainScene.add(new Cell({X:currentX, Y:currentY, Z:currentZ, ScaleX:0.5,ScaleY:0.5,ScaleZ:0.5}));
                            currentX += 2;
                            cellsCount++;
                         }
                         currentY += 2;
                         currentX = 0;
                    }
                    currentZ += 2;
                    currentY = 0;
                }

                this.mainScene.Subject = new Suzanne({X:0, Y:0, Z:0});

                //performance probe
                console.log("Instanciated", cellsCount, "cells!");
                var time2 = new Date();
                var dtime = time2.getMilliseconds() - time1.getMilliseconds();
                console.log("Cell init took:", dtime, "ms\n");
                //
                this.mainRenderer.InitUBOs(this.mainScene, this.mainCam);

                this.InitInputHandlingCallbacks();
                this.InitMainRenderingLoop();
            });
        }
    }

    private InitInputHandlingCallbacks(){
        const mouseMoveHandlerBind = this.inputHandler.mouseMoveInputHandler.bind(this.inputHandler, this.mainCam);
        const mouseHandlerBind = this.inputHandler.mouseWheelHandle.bind(this.inputHandler,this.mainCam);
        const mouseClickHandlerBind = this.inputHandler.mouseClickInputHandler.bind(this.inputHandler);
        const keyboardHandlerBind = this.inputHandler.keyboardInputHandler.bind(this.inputHandler);

        this.webGPUCanvas.onwheel = mouseHandlerBind;
        this.webGPUCanvas.onmousedown = mouseClickHandlerBind;
        this.webGPUCanvas.onmouseup = mouseClickHandlerBind;
        this.webGPUCanvas.onmousemove = mouseMoveHandlerBind;

        window.onkeydown = keyboardHandlerBind;
        window.onkeyup = keyboardHandlerBind;
    }

    private InitMainRenderingLoop(){
        const doFrame = () => {
            this.mainRenderer.updateMain(this.webGPUCanvas);
            this.mainRenderer.frameMain(this.mainCam, this.mainScene);
            requestAnimationFrame(doFrame);
        };
        requestAnimationFrame(doFrame);
    }
}
