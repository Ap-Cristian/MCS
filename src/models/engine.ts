import { Camera } from "./camera";
import { InputHandler } from "../core/input/inputHandler";
import { Renderer } from "./renderer";
import { Scene } from "./scene";
import { CanvasLayers } from "../core/helpers/renderUtils";
import { Binding } from "../core/input/binding";
import { vec3 } from "gl-matrix";
import { Vector } from "../renders/vectorRender";
import { EqBufferF32 } from "./buffers/buffer_float32";
import { Drawable } from "./drawable";
import { SimMath } from "../core/helpers/simMath";

const FPS: number = 45;
export var device: GPUDevice;
export var cpm: EqBufferF32;

export class Engine {
  private canvases: HTMLCanvasElement[] = new Array<HTMLCanvasElement>(2); // 0 - WebGPU - canvas, 1 - framerate canvas
  private mainCam?: Camera;
  private mainRenderer?: Renderer;
  private inputHandler?: InputHandler;
  private cameraZoomRate: number = 1;

  // ************* buffers **************
  // private cpm?: EqBufferF32; // do not reasign
  // ************************************

  constructor() {
    var webGPUCanvas = document.getElementById(
      "webGpu-context",
    ) as HTMLCanvasElement;

    if (webGPUCanvas) {
      this.initGpuDevice().then(() => {
        console.log("Engine() device initialised");

        this.setupCanvas(webGPUCanvas);
        this.initCamera(webGPUCanvas);
        this.initRenderer();
        this.initEngine(webGPUCanvas);
      })
    }
  }

  private async initGpuDevice() {
    if (navigator.gpu) {
      const adapter = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance",
      });
      if (!adapter) return;
      device = await adapter.requestDevice();
    } else {
      console.error(
        "WebGPU is not available for your browser. Please check compatibility.",
      );
    }
  }

  private setupCanvas(canvas: HTMLCanvasElement) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    this.canvases[CanvasLayers.RENDER_CANVAS] = canvas;
  }

  private initCamera(canvas: HTMLCanvasElement) {
    this.mainCam = new Camera(canvas.width / canvas.height, true);
    this.mainCam.Z = 5;
    cpm = new EqBufferF32(
      device,
      this.mainCam.getProjectionNumberArray(),
      GPUBufferUsage.COPY_DST | GPUBufferUsage.UNIFORM | GPUBufferUsage.STORAGE,
      "outline_cpm_buffer"
    );
  }

  private initRenderer() {
    if (!this.mainCam || !cpm) return;
    
    this.mainRenderer = new Renderer({
      canvases: this.canvases,
    });
    
    const scene = this.initScene();
    if (scene)
      this.mainRenderer.Scene = scene;
  }

  private initScene(): Scene | undefined {
    const drawables: Drawable[] = []

    let testVector = new Vector(
      new SimMath.Vector3([0,0,0]), 
      new SimMath.Vector3([0,0,0]), 
      new SimMath.Vector3([0,0,0]),
      'Test'
    );

    drawables.push(testVector);
    console.log("added test drawable")
    console.log(testVector)

    const count_X = 1;
    const count_Y = 1;
    const count_Z = 1;

    const gap = 4;

    // for (let i = 0; i < count_X; i++) {
    //   for (let j = 0; j < count_Y; j++) {
    //     // for (let k = 0; k < count_Z; k++) {
    //     //   drawables.push(
    //     //     new Vector(
    //     //       new McsObject({
    //     //         parameters: {
    //     //           X: x,
    //     //           Y: y,
    //     //           Z: z,
    //     //           ScaleY: 1.4
    //     //         }
    //     //       }),
    //     //       this.cpm,
    //     //       `test_vector${i}`
    //     //     ));
    //       x += gap;
    //     }
    //     x = 0;
    //     y += gap;
    //   }
    //   x = 0;
    //   y = 0;
    //   z += gap
    // }

    return new Scene({
      cameras: [this.mainCam],
      drawables: drawables
    })
  }

  private initEngine(canvas: HTMLCanvasElement) {
    this.initInputCallbacks(canvas);
    this.beginMainRenderingLoop();
  }

  private initInputCallbacks(mainCanvas: HTMLCanvasElement) {
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
    if (!this.inputHandler || !cpm) return;
    
    const mousex = this.inputHandler.MousePos[0];
    const mousey = this.inputHandler.MousePos[1];
    const lastMousex = this.inputHandler.LastMousePos[0];
    const lastMousey = this.inputHandler.LastMousePos[1];
    
    if (lastMousex > 0 && lastMousey > 0 && this.mainCam) {
      const mouseDeltaX = mousex - lastMousex;
      const mouseDeltaY = mousey - lastMousey;

      this.mainCam.X -= mouseDeltaX / 10;
      this.mainCam.Y += mouseDeltaY / 10;
      this.mainCam.LookAt = vec3.fromValues(
        this.mainCam.LookAt[0] - mouseDeltaX / 10,
        this.mainCam.LookAt[1] + mouseDeltaY / 10,
        this.mainCam.LookAt[2],
      );

      cpm.Values = this.mainCam.getProjectionNumberArray();
    }
  };

  private cameraRotateCallback = () => {
    if (!this.inputHandler || !cpm) return;

    const mousex = this.inputHandler.MousePos[0];
    const mousey = this.inputHandler.MousePos[1];

    const lastMousex = this.inputHandler.LastMousePos[0];
    const lastMousey = this.inputHandler.LastMousePos[1];

    if (lastMousex > 0 && lastMousey > 0 && this.mainCam) {
      const mouseDeltaX = mousex - lastMousex;
      const mouseDeltaY = mousey - lastMousey;

      this.mainCam.RotationX += mouseDeltaY / 100;
      this.mainCam.RotationY += mouseDeltaX / 100;

      cpm.Values = this.mainCam.getProjectionNumberArray();
    }
  };

  private cameraZoomCallback = () => {
    if (!this.mainCam || !this.inputHandler || !cpm) return;

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
    cpm.Values = this.mainCam.getProjectionNumberArray();
  };

  private resizeContextsToWindow(): void {
    if (this.canvases && this.mainCam) {
      console.log("[DEBUG] Window resized, updating...");

      this.canvases[0].width = window.innerWidth;
      this.canvases[0].height = window.innerHeight;
      this.canvases[1].width = window.innerWidth;

      this.mainCam.aspect = this.canvases[0].width / this.canvases[0].height;
    }
  }

  private beginMainRenderingLoop() {
    const doFrame = () => {
      this.mainRenderer?.update();
      this.mainRenderer?.draw();
      setTimeout(() => {
        requestAnimationFrame(doFrame);
      }, 1000 / FPS); // BAD but works for now
    };

    requestAnimationFrame(doFrame);
  }
}
