import { generateRenderPipeline, ObjectTopology } from "../core/helpers/renderUtils";
import { ObjectMetadata } from "../core/interfaces/import-object.metadata";
import { EqBufferF32 } from "../models/buffers/buffer_float32";
import { EqBufferU32 } from "../models/buffers/buffer_uint32";
import { Render } from "./render";
import { cpm, device } from "../models/engine";
import { McsObject } from "../models/objectBase";

import arrowFragment from "../core/shaders/vector-arrow/arrow.fragment.wgsl";
import arrowVertex from "../core/shaders/vector-arrow/arrow.vertex.wgsl";
import arrowVertecies from "../core/shaders/vector-arrow/vector.obj";
import { SimMath } from "../core/helpers/simMath";

interface VectorRenderParams {
  baseObject: McsObject,
  vertexCode: string,
  fragmentCode: string,
  vertecies: string,
  name: string,
  cpmBuffer: EqBufferF32,
}

export class VectorRender extends Render {
  constructor(params: VectorRenderParams) {
    const renderMeta: ObjectMetadata = new ObjectMetadata(params.vertecies);

    const pipeline = generateRenderPipeline({
      device: device,
      vertexShaderCode: params.vertexCode,
      fragmentShaderCode: params.fragmentCode,
      topology: ObjectTopology.TRIANGLE_LIST,
    })
 
    // ************* buffers **************
    let verteciesBuffer = new EqBufferF32(
      device,
      renderMeta.VerteciesToFlatArray,
      GPUBufferUsage.COPY_DST | GPUBufferUsage.VERTEX,
      "outline_shader_vertecies_buffer"
    )

    let verteciesIndexBuffer = new EqBufferU32(
      device,
      renderMeta.VerteciesIndexesFlat,
      GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST,
      'vector_shader_vertecies_index_buffer'
    )

    let modelMatrixBuffer = new EqBufferF32(
      device,
      params.baseObject.ModelMatrix as number[],
      GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
      "vector_shader_model_matrix_buffer"
    )
    // ************************************

    if (pipeline) {
      super(
        {
          shaderBuffers: [
            modelMatrixBuffer,
            params.cpmBuffer
          ],
          verteciesBuf: verteciesBuffer,
          renderPipeline: pipeline,
          verteciesIndexBuf: verteciesIndexBuffer,
          drawableName: params.name,
        }
      );
    }
  }
}

export class Vector extends VectorRender {
    private _object: McsObject;

    constructor(
      _pos: SimMath.Vector3, 
      _rot: SimMath.Vector3, 
      _scal: SimMath.Vector3,
      _name: string,
    ) {
      let object = new McsObject();

      object.X = _pos.X;
      object.Y = _pos.Y;
      object.Z = _pos.Z;

      object.RotationX = _rot.X;
      object.RotationY = _rot.Y;
      object.RotationZ = _rot.Z;

      object.ScaleX = _scal.X;
      object.ScaleY = _scal.Y;
      object.ScaleZ = _scal.Z;

      object.name = _name ?? "Vector";

      super(
          {
              baseObject: object,
              vertexCode: arrowVertex,
              fragmentCode: arrowFragment,
              vertecies: arrowVertecies,
              name: _name,
              cpmBuffer: cpm,
          }
      );

      this._object = object; // retain object for future reference
    }
}