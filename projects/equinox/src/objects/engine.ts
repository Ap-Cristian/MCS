import { McsObject, ObjectParameters } from "../base-classes/objectBase";
import { Camera } from "./camera";
import { InputHandler } from "./inputHandler";
import { Renderer } from "./renderer";
import { Scene } from "./scene";
import { CanvasLayers, DrawableObjectType } from "../helpers/renderUtils";

const CELLS_DEBUG = false;
export const NUMBER_OF_CELLS_ON_ROW: number = CELLS_DEBUG ? 10 : 0;
export const NUMBER_OF_CELLS: number = NUMBER_OF_CELLS_ON_ROW ** 3;

export class Engine {
    private canvases: HTMLCanvasElement[] = new Array<HTMLCanvasElement>(2); // 0 - WebGPU - canvas, 1 - framerate canvas
    private scenes: Scene[] = new Array<Scene>();
    private mainCam: Camera;
    private mainRenderer: Renderer;
    // private mainRenderer:WebGpuRenderer;
    // private mainScene:Scene;
    private inputHandler: InputHandler;

    constructor() {
        var webGPUCanvas = document.getElementById('webGpu-context') as HTMLCanvasElement;
        var frameRateCanvas = document.getElementById('framerate-context') as HTMLCanvasElement;

        this.canvases[CanvasLayers.FRAMERATE_CANVAS] = frameRateCanvas;

        if (webGPUCanvas) {
            webGPUCanvas.width = window.innerWidth;
            webGPUCanvas.height = window.innerHeight;

            this.canvases[CanvasLayers.RENDER_CANVAS] = webGPUCanvas;

            addEventListener("resize", () => {
                this.resizeContextsToWindow();
            });
            this.inputHandler = new InputHandler();

            this.mainCam = new Camera(webGPUCanvas.width / webGPUCanvas.height, true);
            this.mainCam.Z = 50;

            this.mainRenderer = new Renderer(
                {
                    scenes: [
                        new Scene({
                            cameras: [this.mainCam],
                            objects: [
                                new McsObject({
                                    type: DrawableObjectType.IMPORTED,
                                    parameters: {
                                        X: 0,
                                        Y: 0,
                                        Z: 0,

                                        RotX: 0,
                                        RotY: 0,
                                        RotZ: 0,

                                        ScaleX: 1,
                                        ScaleY: 1,
                                        ScaleZ: 1
                                    }
                                }),
                            ]
                        })
                    ],
                    activeSceneIndex: 0,
                    canvases: this.canvases
                });

            // this.mainRenderer = new WebGpuRenderer();
            // this.mainRenderer.init(this.canvases).then((success)=>{
            //     if(!success){ 
            //         console.error("[ERR] Failed to init main renderer, exiting...");
            //         return;
            //     }

            //     this.mainCam = new Camera(this.webGPUCanvas.width / this.webGPUCanvas.height);
            //     this.mainCam.Z = 10;

            //     this.mainScene = new Scene();

            //     var time1 = new Date();
            //     var currentX:number = 0;
            //     var currentY:number = 0;
            //     var currentZ:number = 0;
            //     console.log("Number of cells to be instantiated:", NUMBER_OF_CELLS);
            //     var cellsCount = 0;
            //     for(var i = 0; i < NUMBER_OF_CELLS_ON_ROW; i++){
            //         for(var j = 0; j < NUMBER_OF_CELLS_ON_ROW; j++){
            //              for(var k = 0; k < NUMBER_OF_CELLS_ON_ROW; k++){
            //                 this.mainScene.add(new Cell({X:currentX, Y:currentY, Z:currentZ, ScaleX:0.5,ScaleY:0.5,ScaleZ:0.5}));
            //                 currentX += 2;
            //                 cellsCount++;
            //              }
            //              currentY += 2;
            //              currentX = 0;
            //         }
            //         currentZ += 2;
            //         currentY = 0;
            //     }

            //     this.mainScene.Subject = new Suzanne({X:0, Y:0, Z:0});

            //     //performance probe
            //     console.log("Instanciated", cellsCount, "cells!");
            //     var time2 = new Date();
            //     var dtime = time2.getMilliseconds() - time1.getMilliseconds();
            //     console.log("Cell init took:", dtime, "ms\n");
            //     //
            //     // this.mainRenderer.InitUBOs(this.mainScene, this.mainCam);

            //     this.InitMainRenderingLoop();
            // });
            this.InitInputHandlingCallbacks(webGPUCanvas);
            this.beginMainRenderingLoop();
        }
    }

    private InitInputHandlingCallbacks(mainCanvas: HTMLCanvasElement) {
        const mouseMoveHandlerBind = this.inputHandler.mouseMoveInputHandler.bind(this.inputHandler, this.mainCam);
        const mouseHandlerBind = this.inputHandler.mouseWheelHandle.bind(this.inputHandler, this.mainCam);
        const mouseClickHandlerBind = this.inputHandler.mouseClickInputHandler.bind(this.inputHandler);
        const keyboardHandlerBind = this.inputHandler.keyboardInputHandler.bind(this.inputHandler);

        mainCanvas.onwheel = mouseHandlerBind;
        mainCanvas.onmousedown = mouseClickHandlerBind;
        mainCanvas.onmouseup = mouseClickHandlerBind;
        mainCanvas.onmousemove = mouseMoveHandlerBind;

        window.onkeydown = keyboardHandlerBind;
        window.onkeyup = keyboardHandlerBind;
    }

    private resizeContextsToWindow(): void {
        if (this.canvases) {
            console.log("[DEBUG] Window resized, updating...");
            this.canvases[0].width = window.innerWidth;
            this.canvases[0].height = window.innerHeight;
            this.canvases[1].width = window.innerWidth;
            this.mainCam.aspect = this.canvases[0].width / this.canvases[0].height;
        }
    }

    private beginMainRenderingLoop() {
        const doFrame = () => {
            this.mainRenderer.update();
            this.mainRenderer.draw();
            requestAnimationFrame(doFrame);
        };
        requestAnimationFrame(doFrame);
    }
}
