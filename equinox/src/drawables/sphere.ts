import { Drawable, Vertecies } from "../models/drawable";
import {
  generateRenderPipeline,
  IVertexArrToF32Arr,
  ObjectTopology,
  objToIVertex,
  objToUINT16,
} from "../core/helpers/renderUtils";
import { MACGridModel } from "../models/macGrid";
import { device } from "../models/renderer";

import sphereFragment from "../core/shaders/sphere/sphere.fragment.wgsl";
import sphereVertex from "../core/shaders/sphere/sphere.vertex.wgsl";
import sphereObj from "../core/shaders/sphere/sphere.obj";
import { McsObject } from "../models/objectBase";
import { IVertex } from "../core/interfaces/IVertex";

export class SphereDrawable extends Drawable {
  private facesUINT16: Uint16Array;
  private facesBuffer: GPUBuffer;
  constructor(
    cameraProjectionArray: Float32Array<ArrayBufferLike>,
    baseObject: McsObject,
    name: string,
  ) {
    const spherePipeline = generateRenderPipeline({
      device: device,
      vertexShaderCode: sphereVertex,
      fragmentShaderCode: sphereFragment,
      topology: ObjectTopology.TRIANGLE_LIST,
    });

    const sphereIVertex: Array<IVertex> = objToIVertex(sphereObj);

    const sphereVertecies: Vertecies = {
      vertecies_f32: IVertexArrToF32Arr(sphereIVertex),
      number: sphereIVertex.length,
      perVertexLength:
        sphereIVertex[0].pos.length +
        sphereIVertex[0].norm.length +
        sphereIVertex[0].uv.length,
    };

    const sphereModel = baseObject.ModelMatrix;
    super(
      [
        {
          // TO_DO:
          // 3.update only if camera moves | a cell position/state changes
          values: sphereModel as Float32Array,
          type: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
          byteSize: sphereModel.length * Float32Array.BYTES_PER_ELEMENT,
          label: "Grid_cellData",
          dirty: true,
        },
        {
          values: cameraProjectionArray,
          type: GPUBufferUsage.COPY_DST | GPUBufferUsage.UNIFORM,
          byteSize:
            cameraProjectionArray.length * Float32Array.BYTES_PER_ELEMENT,
          label: "Grid_CameraProjection",
          dirty: true,
        },
      ],
      sphereVertecies,
      spherePipeline,
      name,
    );
    this.facesUINT16 = objToUINT16(sphereObj);
    this.facesBuffer = device.createBuffer({
      size: this.facesUINT16.length * Uint16Array.BYTES_PER_ELEMENT,
      usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.INDEX,
      label: "sphere_drawable_faces",
      mappedAtCreation: false,
    });
    device.queue.writeBuffer(
      this.facesBuffer,
      0,
      this.facesUINT16.buffer,
      this.facesUINT16.byteOffset,
      this.facesUINT16.byteLength,
    );
  }

  public Draw(passEncoder: GPURenderPassEncoder) {
    if (this.bindGroupInit) {
      this.flushBufferObjects();
      passEncoder.setVertexBuffer(0, this.vertexBO);
      passEncoder.setPipeline(this.renderPipeline);
      passEncoder.setBindGroup(0, this.bindGroup);
      passEncoder.setIndexBuffer(
        this.facesBuffer,
        "uint16",
        0,
        this.facesBuffer.size,
      );
      passEncoder.drawIndexed(this.facesUINT16.length, 1, 0, 0);
      this.resetDirtyFlags();
    }
  }
}
