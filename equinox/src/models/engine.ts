import { Camera } from "./camera";
import { InputHandler } from "../core/input/inputHandler";
import { Renderer } from "./renderer";
import { Scene } from "./scene";
import { CanvasLayers } from "../core/helpers/renderUtils";
import { Binding } from "../core/input/binding";
import { vec3 } from "gl-matrix";

const FPS: number = 45;

const CELLS_DEBUG: boolean = false;
export const NUMBER_OF_CELLS_ON_ROW: number = CELLS_DEBUG ? 10 : 0;
export const NUMBER_OF_CELLS: number = NUMBER_OF_CELLS_ON_ROW ** 3;

export class Engine {
  private canvases: HTMLCanvasElement[] = new Array<HTMLCanvasElement>(2); // 0 - WebGPU - canvas, 1 - framerate canvas
  private mainCam: Camera;
  private mainRenderer: Renderer;
  private inputHandler: InputHandler;
  private cameraZoomRate: number = 1;

  constructor() {
    var webGPUCanvas = document.getElementById(
      "webGpu-context",
    ) as HTMLCanvasElement;
    var frameRateCanvas = document.getElementById(
      "framerate-context",
    ) as HTMLCanvasElement;

    this.canvases[CanvasLayers.FRAMERATE_CANVAS] = frameRateCanvas;

    if (webGPUCanvas) {
      webGPUCanvas.width = window.innerWidth;
      webGPUCanvas.height = window.innerHeight;

      this.canvases[CanvasLayers.RENDER_CANVAS] = webGPUCanvas;

      this.mainCam = new Camera(webGPUCanvas.width / webGPUCanvas.height, true);
      this.mainCam.Z = 50;
      this.mainRenderer = new Renderer({
        scenes: [
          new Scene({
            cameras: [this.mainCam],
            objects: [],
          }),
        ],
        activeSceneIdx: 0,
        canvases: this.canvases,
      });

      this.InitInputHandlingCallbacks(webGPUCanvas);
      this.beginMainRenderingLoop();
    }
  }

  private InitInputHandlingCallbacks(mainCanvas: HTMLCanvasElement) {
    this.inputHandler = new InputHandler(mainCanvas);

    this.inputHandler.addBinding(
      new Binding(
        ["shift", "mouse_move", "left_click"],
        this.cameraMoveCallback,
      ),
    );
    this.inputHandler.addBinding(
      new Binding(["left_click", "mouse_move"], this.cameraRotateCallback),
    );
    this.inputHandler.addBinding(
      new Binding(["control", "mouse_scroll"], this.cameraZoomCallback),
    );
  }

  private cameraMoveCallback = () => {
    const mousex = this.inputHandler.MousePos[0];
    const mousey = this.inputHandler.MousePos[1];

    const lastMousex = this.inputHandler.LastMousePos[0];
    const lastMousey = this.inputHandler.LastMousePos[1];

    if (lastMousex > 0 && lastMousey > 0) {
      const mouseDeltaX = mousex - lastMousex;
      const mouseDeltaY = mousey - lastMousey;

      this.mainCam.X -= mouseDeltaX / 10;
      this.mainCam.Y += mouseDeltaY / 10;
      this.mainCam.LookAt = vec3.fromValues(
        this.mainCam.LookAt[0] - mouseDeltaX / 10,
        this.mainCam.LookAt[1] + mouseDeltaY / 10,
        this.mainCam.LookAt[2],
      );
    }
  };

  private cameraRotateCallback = () => {
    const mousex = this.inputHandler.MousePos[0];
    const mousey = this.inputHandler.MousePos[1];

    const lastMousex = this.inputHandler.LastMousePos[0];
    const lastMousey = this.inputHandler.LastMousePos[1];

    if (lastMousex > 0 && lastMousey > 0) {
      const mouseDeltaX = mousex - lastMousex;
      const mouseDeltaY = mousey - lastMousey;

      this.mainCam.RotationX += mouseDeltaY / 100;
      this.mainCam.RotationY += mouseDeltaX / 100;
    }
  };

  private cameraZoomCallback = () => {
    if (this.inputHandler.MouseWheel_deltaY > 0) {
      this.mainCam.Z += this.cameraZoomRate;
    } else if (this.mainCam.Z - this.cameraZoomRate > 0) {
      this.mainCam.Z -= this.cameraZoomRate;
    }

    if (this.mainCam.Z - this.cameraZoomRate <= 0) {
      this.cameraZoomRate /= 100;
    }
    if (this.cameraZoomRate < 1 && this.inputHandler.MouseWheel_deltaY > 0) {
      this.cameraZoomRate *= 10;
    }
  };

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
      setTimeout(() => {
        requestAnimationFrame(doFrame);
      }, 1000 / FPS); //BAD but works...
    };
    requestAnimationFrame(doFrame);
  }
}
