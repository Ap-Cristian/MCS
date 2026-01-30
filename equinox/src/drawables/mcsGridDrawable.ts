import { Drawable, Vertecies } from "../models/drawable";
import {
  generateRenderPipeline,
  IVertexArrToF32Arr,
  ObjectTopology,
} from "../core/helpers/renderUtils";
import { MACGridModel } from "../models/macGrid";
import { device } from "../models/renderer";

import cellFragment from "../core/shaders/cell/cell.fragment.wgsl";
import cellVertex from "../core/shaders/cell/cell.vertex.wgsl";
import { vertices as CellVertecies } from "../core/shaders/cell/cell.mesh";

export class MACGridDrawable extends Drawable {
  private grid: MACGridModel;

  constructor(
    cameraProjectionArray: Float32Array<ArrayBufferLike>,
    grid: MACGridModel,
    name: string,
  ) {
    const gridPipeline = generateRenderPipeline({
      device: device,
      vertexShaderCode: cellVertex,
      fragmentShaderCode: cellFragment,
      topology: ObjectTopology.LINE_LIST,
    });

    const gridCellVertecies: Vertecies = {
      vertecies_f32: IVertexArrToF32Arr(CellVertecies),
      number: CellVertecies.length,
      perVertexLength:
        CellVertecies[0].pos.length +
        CellVertecies[0].norm.length +
        CellVertecies[0].uv.length,
    };

    const gridModels = grid.CellModelsF32;
    super(
      [
        {
          // TO_DO:
          // 3.update only if camera moves | a cell position/state changes
          values: gridModels,
          type: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
          byteSize: gridModels.length * Float32Array.BYTES_PER_ELEMENT,
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
      gridCellVertecies,
      gridPipeline,
      name,
    );
    this.grid = grid;
  }

  public Draw(passEncoder: GPURenderPassEncoder) {
    if (this.bindGroupInit) {
      this.flushBufferObjects();
      passEncoder.setVertexBuffer(0, this.vertexBO);
      passEncoder.setPipeline(this.renderPipeline);
      passEncoder.setBindGroup(0, this.bindGroup);
      passEncoder.draw(this.vertecies.number, this.grid.NumberOfCells, 0, 0);
      this.resetDirtyFlags();
    }
  }
}
