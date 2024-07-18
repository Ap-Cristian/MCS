import { vec3 } from "gl-matrix";
import { Camera } from "./camera";
import { Keys } from "../res/keyboard-keycodes.res";
import { MouseButtons } from "../res/mouse-buttoncodes.res";

export class InputHandler {
    private KB_keyPressed: boolean[] = new Array<boolean>(104);
    private MB_keyPressed: boolean[] = new Array<boolean>(false,false,false);
    private lastMousePos: number[] = new Array<number>(2);

    constructor() {
        this.lastMousePos = [-1, -1];
    };

    public mouseWheelHandle(camera:Camera, wheelEvent: WheelEvent): any {
        const wheelSpeed = wheelEvent.deltaY / 5000;
        if (camera.fovy > 0.01 && wheelSpeed < 0) {
            camera.fovy += wheelSpeed;
        } else if (camera.fovy <= 0.01) {
            camera.Z += wheelSpeed;
        }
        if (wheelSpeed > 0 && camera.fovy <= 1) {
            camera.fovy += wheelSpeed;
        } else if (wheelSpeed > 0 && camera.fovy > 1) {
            camera.Z += wheelSpeed * 10;
        }
    }

    public mouseMoveInputHandler(camera:Camera, mouseEvent: MouseEvent): any {
        if (this.MB_keyPressed[MouseButtons.LEFT] == false) {
            return;
        }
    
        var mousex = mouseEvent.pageX;
        var mousey = mouseEvent.pageY;
    
        if (this.lastMousePos[0] > 0 && this.lastMousePos[1] > 0) {
            const mouseDeltaX = mousex - this.lastMousePos[0];
            const mouseDeltaY = mousey - this.lastMousePos[1];

            if(!this.KB_keyPressed[Keys.SHIFT_LEFT]){
                camera.rotY += mouseDeltaX / 100;
                camera.rotX += mouseDeltaY / 100;
            }else{
                camera.X -= mouseDeltaX / 10;
                camera.Y += mouseDeltaY / 10;

                camera.LookAt = vec3.fromValues(
                    camera.LookAt[0] - mouseDeltaX / 10, 
                    camera.LookAt[1] + mouseDeltaY / 10, 
                    camera.LookAt[2]
                );
            }
        }
        this.lastMousePos[0] = mousex;
        this.lastMousePos[1] = mousey;
    }

    public mouseClickInputHandler(mouseEvent: MouseEvent): any {
        if (!this.MB_keyPressed[MouseButtons.LEFT]) {
            this.lastMousePos[0] = mouseEvent.pageX;
            this.lastMousePos[1] = mouseEvent.pageY;
        }
        this.MB_keyPressed[MouseButtons.LEFT] = !this.MB_keyPressed[MouseButtons.LEFT];
    }

    public keyboardInputHandler(keyboardEvent: KeyboardEvent): any {
        switch (keyboardEvent.key) {
            case "Shift":
                this.KB_keyPressed[Keys.SHIFT_LEFT] = !this.KB_keyPressed[Keys.SHIFT_LEFT];
                break;
            default:
                console.error("[Input_Handler] Unhandled key...:C");
                break;
        }
    }
}