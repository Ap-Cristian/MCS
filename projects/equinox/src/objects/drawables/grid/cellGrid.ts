import { Drawable, Vertecies } from "../../../base-classes/drawable";
import {
  generateRenderPipeline,
  IVertexArrToF32Arr,
  ObjectTopology,
} from "../../../helpers/renderUtils";
import { CellShaderResources } from "../../../res/cell.res";
import { MACGrid } from "../../macGrid";
import { device } from "../../renderer";

export class CellGridDrawable extends Drawable {
  private grid: MACGrid;

  constructor(
    cameraProjectionArray: Float32Array<ArrayBufferLike>,
    grid: MACGrid,
    name: string,
  ) {
    const gridCellShaderResources = CellShaderResources.getInstance();
    const gridPipeline = generateRenderPipeline({
      device: device,
      vertexShaderCode: gridCellShaderResources.VertexCode,
      fragmentShaderCode: gridCellShaderResources.FragmentCode,
      topology: ObjectTopology.LINE_LIST,
    });

    const gridCellVertecies: Vertecies = {
      vertecies_f32: IVertexArrToF32Arr(gridCellShaderResources.VertexArray),
      number: gridCellShaderResources.VertexArray.length,
      perVertexLength:
        gridCellShaderResources.VertexArray[0].pos.length +
        gridCellShaderResources.VertexArray[0].norm.length +
        gridCellShaderResources.VertexArray[0].uv.length,
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
