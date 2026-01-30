import { IVertex } from "../interfaces/IVertex";
import { mat4 } from "gl-matrix";
import { IFace } from "../interfaces/IFace";

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
      // canvas.clientWidth * window.devicePixelRatio,
      // canvas.clientHeight * window.devicePixelRatio,
      canvas.clientWidth,
      canvas.clientHeight,
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
        cullMode: "front",
      } as GPUPrimitiveState,
      depthStencil: {
        depthWriteEnabled: true,
        depthCompare: "always",
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

export function objToIVertex(objContent: string): Array<IVertex> {
  var pos: Array<number[]> = [];
  var norm: Array<number[]> = [];
  var uv: Array<number[]> = [];

  const objContentLines = objContent.split("\n");

  for (const line of objContentLines) {
    const lineSplitRes = line.split(" ");

    switch (lineSplitRes[0]) {
      case "v":
        pos.push([
          Number.parseFloat(lineSplitRes[1]),
          Number.parseFloat(lineSplitRes[2]),
          Number.parseFloat(lineSplitRes[3]),
        ]);
        break;

      case "vn":
        norm.push([
          Number.parseFloat(lineSplitRes[1]),
          Number.parseFloat(lineSplitRes[2]),
          Number.parseFloat(lineSplitRes[3]),
        ]);
        break;

      case "vt":
        uv.push([
          Number.parseFloat(lineSplitRes[1]),
          Number.parseFloat(lineSplitRes[2]),
        ]);
        break;

      default:
        break;
    }
  }

  let result: Array<IVertex> = [];
  for (var i = 0; i < pos.length; i++) {
    var vertex: IVertex = {
      pos: pos[i],
      norm: i < norm.length ? norm[i] : [0, 0, 0],
      uv: uv[i],
    };
    result.push(vertex);
  }

  return result;
}

export function objToUINT16(objContent: string): Uint16Array {
  let faceBuffer: Number[] = [];
  const objContentLines = objContent.split("\n");

  for (const line of objContentLines) {
    const lineSplitRes = line.split(" ");
    switch (lineSplitRes[0]) {
      case "f":
        lineSplitRes.forEach((value) => {
          if (value != "f") {
            var faceSplit = value.split("/");
            faceBuffer.push(Number.parseInt(faceSplit[0]));
          }
        });
        break;

      default:
        break;
    }
  }

  let result: Uint16Array = new Uint16Array(
    faceBuffer.length * Uint16Array.BYTES_PER_ELEMENT,
  );

  return result;
}
