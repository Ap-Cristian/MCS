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

                var time1 = new Date();

                for(var i = 0; i < 100; i++){
                    for(var j = 0; j < 10; j++){
                        currentX += 2;
                        this.mainScene.add(new Cell({X:currentX, Z:currentZ}, randomIntFromInterval(1, 9999)));
                    }
                    currentZ += 2;
                    currentX = -10;
                }
                // this.mainScene.add(new Cell({X:0, Z:0}, randomIntFromInterval(1, 9999)));

                var time2 = new Date();
                var dtime = time2.getMilliseconds() - time1.getMilliseconds();
                console.log("Cell init took: " + dtime.toString() + " ms\n");

                const doFrame = () => {
                    const now = Date.now() / 1000;
                    
                    this.mainRenderer.frame(this.mainCam, this.mainScene);
                    requestAnimationFrame(doFrame);
                };
                requestAnimationFrame(doFrame);

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
