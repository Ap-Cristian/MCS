import { Scene } from "./scene";
import {
  canvasCreateTexture,
  CanvasLayers,
  createRenderPassDescriptor,
  depthTextureView,
} from "../core/helpers/renderUtils";
import { Drawable } from "./drawable";
import { device } from "./engine";

export var adapter: GPUAdapter;

export interface RendererParams {
  canvases: HTMLCanvasElement[];
}

export class Renderer {
  private scene: Scene;
  private _drawables: Drawable[] = [];
  private cameraProjectionArray: Float32Array;
  private renderPassDescriptor: GPURenderPassDescriptor;
  private commandEncoder: GPUCommandEncoder;
  private renderContext: GPUCanvasContext;
  private passEncoder: GPURenderPassEncoder;
  private gpuCurrentTexture: GPUTexture;
  private RPAColorAttachment: GPURenderPassColorAttachment;
  private depthTexture: GPUTexture;
  private depthTextureView: GPUTextureView;

  constructor(rendererParams: RendererParams) {
    this.initRenderer(rendererParams);
  }

  private initRenderer(rendererParams: RendererParams) {
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
  }

  public set Scene(scene:Scene) {
    this.scene = scene;
    this.cameraProjectionArray = this.scene.ActiveCamera.getProjectionArray();
    this._drawables = this.scene.Drawables;
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

  private initRenderingContext() {
    this.renderContext.configure({
      device: device,
      format: navigator.gpu.getPreferredCanvasFormat(),
      alphaMode: "premultiplied",
    });
  }

  private updateCamera() {
    var activeSceneCamera = this.scene.ActiveCamera;
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
      
      this._drawables?.forEach((drawable) => {
        drawable.Draw(this.passEncoder);
      });
      
      this.passEncoder.end();
      device.queue.submit([this.commandEncoder.finish()]);
      this.popErrorScopes();
    } 
    else {
      console.warn("Renderer: Draw() Skipped frame, device is loading.");
    }
  }
}
