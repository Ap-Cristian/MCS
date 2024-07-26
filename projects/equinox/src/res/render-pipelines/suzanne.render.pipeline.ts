import { SuzanneShaderResources } from "../suzanne.res";
import { device } from "../../objects/renderer";

export class SuzanneRenderPipeline {
  private readonly perVertex: number = (3 + 3 + 2);      // 3 for position, 2 for uv, 3 for color
  private stride: number = this.perVertex * 4; //4 bytes
  private suzanneShaderContainer = SuzanneShaderResources.getInstance();

  public Pipeline: GPURenderPipeline;

  private constructor() {
    if (device) {
      var vertexShaderModule = device.createShaderModule({ code: this.suzanneShaderContainer.vertexCode });
      var fragmentShaderModule = device.createShaderModule({ code: this.suzanneShaderContainer.fragmentCode });

      var vertexCompilationInfo = vertexShaderModule.getCompilationInfo();
      var fragmentCompilationInfo = fragmentShaderModule.getCompilationInfo();

      vertexCompilationInfo.then((info) => {
        console.log("Suzanne vertex shader compilation complaints should appear after this ------")
        info.messages.forEach((message) => {
          console.error(message);
        })
      });
      fragmentCompilationInfo.then((info) => {
        console.log("Suzanne fragment shader compilation complaints should appear after this ------")
        info.messages.forEach((message) => {
          console.error(message);
        })
      });

      this.Pipeline = device.createRenderPipeline({
        layout: 'auto',
        vertex: {
          module: vertexShaderModule,
          entryPoint: 'mainVertex',
          buffers: [
            {
              arrayStride: this.stride,
              attributes: [
                {
                  shaderLocation: 0,
                  offset: 0,
                  format: 'float32x4',
                } as GPUVertexAttribute,
                {
                  shaderLocation: 1,
                  offset: 4,
                  format: 'float32x2',
                }
              ],
            },
          ],
        } as GPUVertexState,
        fragment: {
          module: fragmentShaderModule,
          entryPoint: 'mainFragment',
          targets: [
            {
              format: navigator.gpu.getPreferredCanvasFormat() as GPUTextureFormat,
            },
          ],
        } as GPUFragmentState,
        primitive: {
          topology: 'triangle-list',
          cullMode: 'back',
        },
        depthStencil: {
          depthWriteEnabled: true,
          depthCompare: 'less',
          format: 'depth24plus-stencil8',
        },
      } as unknown as GPURenderPipelineDescriptor
      )
    } else {
      console.log("Device not initialised for Pipeline Creation!");
    }

  }

  public static instance: SuzanneRenderPipeline;
  public static GetInstance(): SuzanneRenderPipeline {
    if (this.instance != null) {
      return this.instance;
    }
    this.instance = new SuzanneRenderPipeline();
    return this.instance;
  }
}