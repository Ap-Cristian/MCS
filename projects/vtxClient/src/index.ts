import { Camera } from "./objects/camera/camera";
import { Cell } from "./objects/cell/cell";
import { Scene } from "./objects/scene/scene";
import { WebGpuRenderer } from "./renderer";

import "./style.scss";

class EntryPoint{
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
                this.mainCam.Y = 10;

                this.mainScene = new Scene();
                
                const testCell1 = new Cell({ X: -4, Y: 4}, { R: 0.9, G: 0, B: 0});
                const cube1 = new Cell({ X: -4, Y: 4 }, { R: 0.9, G: 0.01, B: 0.01 });
                const cube2 = new Cell({ Y: 4 }, { R: 0.01, G: 0.9, B: 0.01 });
                const cube3 = new Cell({ X: 4, Y: 4 }, { R: 0.01, G: 0.01, B: 0.9 });

                this.mainScene.add(testCell1);
                this.mainScene.add(cube1);
                this.mainScene.add(cube2);
                this.mainScene.add(cube3);

                const doFrame = () => {
                    const now = Date.now() / 1000;
                    
                    this.mainRenderer.frame(this.mainCam, this.mainScene);
                    requestAnimationFrame(doFrame);
                };
                requestAnimationFrame(doFrame);

                this.htmlCanvas.onwheel = (event: WheelEvent) => {
                    const delta = event.deltaY / 100;
                    // no negative camera.z
                    if(this.mainCam.Z > -delta) {
                        this.mainCam.Z += event.deltaY / 100
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
                        const roty = mousex - lastMouseX;
                        const rotx = mousey - lastMouseY;
                
                        this.mainCam.rotY += roty / 100;
                        this.mainCam.rotX += rotx / 100;
                    }
                
                    lastMouseX = mousex;
                    lastMouseY = mousey;
                }

            });
        }
    }
}

var entryPoint = new EntryPoint();