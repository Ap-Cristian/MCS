// import { Drawable } from "../base-classes/drawable";
import { McsObj, McsObject } from "../base-classes/objectBase";
import { IVertex } from "../res/interfaces/IVertex";

export enum CanvasLayers {
  RENDER_CANVAS,
  FRAMERATE_CANVAS,
}

export enum ObjectTopology {
  POINT_LIST = "point-list",
  TRIANGLE_LIST = "triangle-list",
  LINE_STRIP = "line-strip",
  LINE_LIST = "line-list",
  TRIANGLE_STRIP = "triangle-strip",
}

export enum ShaderType {
  VERTEX,
  FRAGMENT,
}

export enum DrawableObjectType {
  CELL,
  IMPORTED,
  GIZMO,
  GRID,
  NOT_SET,
}
export interface ILine {
  startVrtIndex: number;
  endVrtIndex: number;
}
export interface RenderPipelineArgs {
  vertexShaderCode: string;
  fragmentShaderCode: string;
  topology: ObjectTopology;
  device: GPUDevice;
}

export function canvasCreateTexture(
  device: GPUDevice,
  canvas: HTMLCanvasElement,
  usage: number,
) {
  return device.createTexture({
    size: [
      canvas.clientWidth * window.devicePixelRatio,
      canvas.clientHeight * window.devicePixelRatio,
    ],
    format: "depth24plus-stencil8",
    usage: usage,
  });
}

export function depthTextureView(texture: GPUTexture): GPUTextureView {
  //RENAME FUNCTION TO textureView
  // return device.createTexture({
  //     size: [
  //         canvas.clientWidth * window.devicePixelRatio,
  //         canvas.clientHeight * window.devicePixelRatio,
  //     ],
  //     format: 'depth24plus-stencil8',
  //     usage: GPUTextureUsage.RENDER_ATTACHMENT,
  // }).createView();
  return texture.createView();
}

export function createRenderPassDescriptor(
  textureView: GPUTextureView,
): GPURenderPassDescriptor {
  return {
    colorAttachments: [
      {
        view: undefined, // Assigned later

        clearValue: { r: 0.1, g: 0.1, b: 0.1, a: 1.0 },
        loadOp: "clear",
        storeOp: "store",
      },
    ],
    depthStencilAttachment: {
      view: textureView,
      depthLoadOp: "clear",
      depthClearValue: 1.0,
      depthStoreOp: "store",
      stencilLoadOp: "clear",
      stencilClearValue: 0,
      stencilStoreOp: "store",
    },
  } as GPURenderPassDescriptor;
}

function outputShaderCompIssues(
  compilationMessages: Readonly<GPUCompilationMessage[]>,
  shaderType: ShaderType,
) {
  if (compilationMessages.length > 0) {
    switch (shaderType) {
      case ShaderType.FRAGMENT:
        console.error("Faulty fragment shader: ");
        break;
      case ShaderType.VERTEX:
        console.error("Faulty vertex shader: ");
        break;
      default:
        return;
    }

    compilationMessages.forEach((entry) => {
      console.error(entry.message);
    });
  }
}

export function generateRenderPipeline(
  arg: RenderPipelineArgs,
): GPURenderPipeline | null {
  if (arg.device) {
    const vertexShaderModule = arg.device.createShaderModule({
      code: arg.vertexShaderCode,
    });
    const fragmentShaderModule = arg.device.createShaderModule({
      code: arg.fragmentShaderCode,
    });

    var vertexCompilationInfo = vertexShaderModule.getCompilationInfo();
    var fragmentCompilationInfo = fragmentShaderModule.getCompilationInfo();
    vertexCompilationInfo.then((info) => {
      outputShaderCompIssues(info.messages, ShaderType.VERTEX);
    });
    fragmentCompilationInfo.then((info) => {
      outputShaderCompIssues(info.messages, ShaderType.FRAGMENT);
    });

    const stride: number = 3 * 4 + 3 * 4 + 2 * 4;
    // temporary - 3 floats * 4 bytes + 3 floats * 4 bytes + 2 floats * 4 bytes - check cell mesh
    // this is harcoded for cell mesh's vertecies
    // should not be in this file, should at least be passed as an argument
    return arg.device.createRenderPipeline({
      layout: "auto",
      vertex: {
        module: vertexShaderModule,
        entryPoint: "mainVertex",
        buffers: [
          {
            arrayStride: stride,
            attributes: [
              {
                shaderLocation: 0,
                offset: 0,
                format: "float32x3", // 3 (+ 1 padding)
              } as GPUVertexAttribute,
              {
                shaderLocation: 1,
                offset: 12,
                format: "float32x3",
              } as GPUVertexAttribute,
              {
                shaderLocation: 2,
                offset: 24,
                format: "float32x2",
              } as GPUVertexAttribute,
            ],
          },
        ],
      } as GPUVertexState,
      fragment: {
        module: fragmentShaderModule,
        entryPoint: "mainFragment",
        targets: [
          {
            format:
              navigator.gpu.getPreferredCanvasFormat() as GPUTextureFormat,
          },
        ],
      } as GPUFragmentState,
      primitive: {
        topology: arg.topology,
        cullMode: "back",
      } as GPUPrimitiveState,
      depthStencil: {
        depthWriteEnabled: true,
        depthCompare: "less-equal",
        format: "depth24plus-stencil8",
      } as GPUDepthStencilState,
    } as unknown as GPURenderPipelineDescriptor);
  }
  return null;
}

export function checkDeviceAvailability(device: GPUDevice): boolean {
  if (!device) {
    return false;
  }
  return true;
}

export function IVertexArrToF32Arr(
  array: IVertex[],
): Float32Array<ArrayBuffer> {
  var offset = 0;
  const arrayLength =
    (array[0].pos.length + array[0].norm.length + array[0].uv.length) *
    array.length;
  const result: Float32Array<ArrayBuffer> = new Float32Array(arrayLength);
  array.forEach((vertex) => {
    result.set(vertex.pos, offset);
    offset += vertex.pos.length;

    result.set(vertex.norm, offset);
    offset += vertex.norm.length;

    result.set(vertex.uv, offset);
    offset += vertex.uv.length;
  });
  return result;
}
