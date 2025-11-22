import { Scene } from "./scene";
import {
  canvasCreateTexture,
  CanvasLayers,
  createRenderPassDescriptor,
  depthTextureView,
} from "../helpers/renderUtils";
import { Drawable } from "../base-classes/drawable";
import { CellGridDrawable } from "./drawables/grid/cellGrid";

export var adapter: GPUAdapter;
export var device: GPUDevice;

export interface RendererParams {
  scenes: Array<Scene>;
  activeSceneIdx: number;
  canvases: HTMLCanvasElement[];
}

export class Renderer {
  private scenes: Scene[];
  private activeSceneIdx: number = 0;
  private newDrawables: Drawable[] = new Array<Drawable>();

  private cameraProjectionArray: Float32Array;
  private renderPassDescriptor: GPURenderPassDescriptor;
  private commandEncoder: GPUCommandEncoder;
  private renderContext: GPUCanvasContext;
  private passEncoder: GPURenderPassEncoder;
  private gpuCurrentTexture: GPUTexture;
  private RPAColorAttachment: GPURenderPassColorAttachment;
  private depthTexture: GPUTexture;
  private depthTextureView: GPUTextureView;

  private initRenderer(rendererParams: RendererParams) {
    this.activeSceneIdx = rendererParams.activeSceneIdx;
    this.initContexts(rendererParams.canvases);
    this.initRenderPassDescriptor(
      rendererParams.canvases[CanvasLayers.RENDER_CANVAS],
    );
    this.RPAColorAttachment = (
      this.renderPassDescriptor.colorAttachments as [
        GPURenderPassColorAttachment,
      ]
    )[0];
    this.initRenderingContext();
    this.createDrawablesFromSceneObjects();
  }

  constructor(rendererParams: RendererParams) {
    this.scenes = rendererParams.scenes;
    this.cameraProjectionArray =
      this.scenes[this.activeSceneIdx].ActiveCamera.getProjectionArray();

    if (
      rendererParams.activeSceneIdx < 0 ||
      rendererParams.activeSceneIdx > this.scenes.length
    )
      throw new Error(
        `Renderer: Active scene ${rendererParams.activeSceneIdx} out of scene array range.`,
      );

    this.initGpuDevice().then(() => {
      this.initRenderer(rendererParams);
    });
  }

  private pushErrorScopes() {
    device.pushErrorScope("validation");
    device.pushErrorScope("out-of-memory");
    device.pushErrorScope("internal");
  }

  private popErrorScopes() {
    device.popErrorScope().then((ex) => {
      if (ex) {
        console.error(`INTERNAL: ${ex.message}`);
      }
    });
    device.popErrorScope().then((ex) => {
      if (ex) {
        console.error(`OUT_OF_MEM: ${ex.message}`);
      }
    });
    device.popErrorScope().then((ex) => {
      if (ex) {
        console.error(`INTERNAL: ${ex.message}`);
      }
    });
  }

  private async initGpuDevice() {
    if (navigator.gpu) {
      const adapter = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance",
      });
      device = await adapter.requestDevice();
      console.log(device);
    } else {
      console.error(
        "WebGPU is not available for your browser. Please check compatibility.",
      );
    }
  }

  private initRenderingContext() {
    this.renderContext.configure({
      device: device,
      format: navigator.gpu.getPreferredCanvasFormat(),
      alphaMode: "premultiplied",
    });
  }

  private updateCamera() {
    var activeSceneCamera = this.scenes[this.activeSceneIdx].ActiveCamera;
    this.cameraProjectionArray.set(activeSceneCamera.getProjectionArray(), 0);
  }

  private initRenderPassDescriptor(canvas: HTMLCanvasElement) {
    this.depthTexture = canvasCreateTexture(
      device,
      canvas,
      GPUTextureUsage.RENDER_ATTACHMENT,
    );
    this.depthTextureView = depthTextureView(this.depthTexture);
    this.renderPassDescriptor = createRenderPassDescriptor(
      this.depthTextureView,
    );
  }

  private initContexts(canvasLayers: HTMLCanvasElement[]) {
    this.renderContext = canvasLayers[CanvasLayers.RENDER_CANVAS].getContext(
      "webgpu",
    ) as unknown as GPUCanvasContext;
  }

  public update() {
    if (device) {
      this.updateCamera();
    }
  }

  public draw() {
    if (device) {
      this.pushErrorScopes();
      this.commandEncoder = device.createCommandEncoder();

      this.gpuCurrentTexture = this.renderContext.getCurrentTexture();
      this.RPAColorAttachment.view = this.gpuCurrentTexture.createView();

      this.passEncoder = this.commandEncoder.beginRenderPass(
        this.renderPassDescriptor,
      );
      this.newDrawables.forEach((drawable) => {
        drawable.Draw(this.passEncoder);
      });
      this.passEncoder.end();
      device.queue.submit([this.commandEncoder.finish()]);

      this.popErrorScopes();
    } else {
      console.warn("Renderer: Draw(): Device is still loading...");
    }
  }

  private createDrawablesFromSceneObjects() {
    const activeSceneGrid = this.scenes[this.activeSceneIdx].Grid;
    const grid = new CellGridDrawable(
      this.cameraProjectionArray,
      activeSceneGrid,
      "main_grid",
    );
    this.newDrawables.push(grid);
  }
}
