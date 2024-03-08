import { randomIntFromInterval } from "./misc/math";
import { Camera } from "./objects/camera/camera";
import { Cell } from "./objects/cell/cell";
import { Scene } from "./objects/scene/scene";
import { WebGpuRenderer } from "./renderer";



export class EntryPoint{
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

                const originPoint = new Cell({ X: 0, Y: 0, ScaleX: 0.2, ScaleY: 0.2});
                
                var currentX:number = -10;
                var currentZ:number = -10;


                for(var i = 0; i < 10; i++){
                    for(var j = 0; j < 10; j++){
                        currentX += 2;
                        this.mainScene.add(new Cell({X:currentX, Z:currentZ}, randomIntFromInterval(1, 9999)));
                        console.log(this.mainScene);
                    }
                    currentZ +=2;
                    currentX = -10;
                }
                // const cube1 = new Cell({ X: -4, Y: 0 });
                // const cube3 = new Cell({ X: 4, Y: 0 });

                // this.mainScene.add([originPoint, cube1, cube3]);

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
