import { mat4 } from "gl-matrix";
import { generateRenderPipeline, ObjectTopology } from "../core/helpers/renderUtils";
import { ObjectMetadata } from "../core/interfaces/import-object.metadata";
import { EqBufferF32 } from "../models/buffers/buffer_float32";
import { EqBufferU32 } from "../models/buffers/buffer_uint32";
import { Drawable } from "../models/drawable";
import { device } from "../models/engine";
import { McsObject } from "../models/objectBase";

interface CellRenderParams {
  baseObjects: McsObject[],
  vertexCode: string,
  fragmentCode: string,
  vertecies: string,
  cpmBuffer: EqBufferF32,
}

export class CellRender extends Drawable {
  constructor(params: CellRenderParams) {
    const renderMeta: ObjectMetadata = new ObjectMetadata(params.vertecies);
    
    const pipeline = generateRenderPipeline({
      device: device,
      vertexShaderCode: params.vertexCode,
      fragmentShaderCode: params.fragmentCode,
      topology: ObjectTopology.POINT_LIST,
    });

 
    // ************* buffers **************
    let verteciesBuffer = new EqBufferF32(
      device,
      renderMeta.VerteciesToFlatArray,
      GPUBufferUsage.COPY_DST | GPUBufferUsage.VERTEX,
      "cell_shader_vertecies_buffer"
    )

    let verteciesIndexBuffer = new EqBufferU32(
      device,
      renderMeta.VerteciesIndexesFlat,
      GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST,
      'vector_shader_vertecies_index_buffer'
    )

    let cellModelMatrices: mat4[] = [];

    params.baseObjects.forEach((object) => {
      cellModelMatrices.push(object.ModelMatrix);
    })
    
    console.log(cellModelMatrices)

    // let modelMatrixBuffer = new EqBufferF32(
    //   device,
    //   params.baseObject.ModelMatrix as number[],
    //   GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
    //   "outline_shader_model_matrix_buffer"
    // )
    // ************************************

    if (pipeline) {
      super(
        {
            shaderBuffers: [
                // modelMatrixBuffer,
                params.cpmBuffer
            ],
            verteciesBuf: verteciesBuffer,
            renderPipeline: pipeline,
            verteciesIndexBuf: verteciesIndexBuffer 
        }
      );
    }
  }
}