import { checkDeviceAvailability } from "../core/helpers/renderUtils";
import { EqBufferF32 } from "./buffers/buffer_float32";
import { EqBufferU32 } from "./buffers/buffer_uint32";
import { device } from "./engine";

// newDrawable needs:
// at least a vertexArray
// or a face array
// or line array.
// without these it doesn't instanciate.

// ShaderResources
// values: Array containing the actual values we want to pass for a single uniform
// byteSize: byte size of uniform?
// type: any GPUBufferUsage type for the uniform
// label: the uniform label

/** @internal Resource values. Order needs to match group and binding in shader. */
export interface ShaderResource {
  values: number[];
  byteSize: number;
  type: number;
  label: string;
  dirty?: boolean;
}

export interface Vertecies {
  vertecies_f32: Float32Array;
  number: number;
  perVertexLength: number;
}

export interface DrawableParams {
  shaderBuffers: Array<EqBufferF32>;
  verteciesBuf: EqBufferF32;
  renderPipeline: GPURenderPipeline;
  drawableName?: string;
  verteciesIndexBuf?: EqBufferU32 | undefined; 
}

export class Drawable {
  protected verteciesBuffer?: EqBufferF32;
  private buffers: Array<EqBufferF32> = [];
  private bufferResources: Array<ShaderResource> = [];
  private name: string = "";
  private verteciesIndexBuf: EqBufferU32 | undefined;

  protected renderPipeline?: GPURenderPipeline;
  protected bindGroup?: GPUBindGroup;
  protected bindGroupInit: boolean = false;

  protected get ShouldRedraw(): boolean {
    for (let i = 0; i < this.bufferResources.length; i++) {
      if (this.bufferResources[i].dirty === true) {
        return true;
      }
    }
    return false;
  }

  constructor(params: DrawableParams) {
    if (!checkDeviceAvailability(device)) {
      console.error("Drawable: Drawable() No GPU available");
      return;
    }
    this.buffers = params.shaderBuffers;
    this.renderPipeline = params.renderPipeline;
    this.name = params.drawableName ?? '';
    
    this.verteciesBuffer = params.verteciesBuf;
    this.verteciesIndexBuf = params.verteciesIndexBuf;
    this.initBindGroup();
  }

  private initBindGroup() {
    var bindingIdx = 0;

    if (!this.renderPipeline) return;

    var entries: Array<GPUBindGroupEntry> = [];
    this.buffers.forEach((b) => {
      entries.push({
        binding: bindingIdx++,
        resource: {
          buffer: b.Buffer,
          label: `${b.Buffer.label}-bind-group-entry`,
        },
      });
    });

    this.bindGroup = device.createBindGroup({
      layout: this.renderPipeline.getBindGroupLayout(0), //shady
      entries: entries,
      label: `${this.name}-bind-group`,
    });

    if (this.bindGroup) this.bindGroupInit = true;
  }

  protected resetDirtyFlags() {
    for (let i = 0; i < this.bufferResources.length; i++) {
      this.bufferResources[i].dirty = false;
    }
  }

  public Draw(passEncoder: GPURenderPassEncoder) {
    if (this.bindGroupInit && this.verteciesBuffer && this.renderPipeline) {
      passEncoder.setVertexBuffer(0, this.verteciesBuffer.Buffer);

      if (this.verteciesIndexBuf)
        passEncoder.setIndexBuffer(this.verteciesIndexBuf.Buffer, "uint32", 0);
      
      passEncoder.setPipeline(this.renderPipeline);
      passEncoder.setBindGroup(0, this.bindGroup);

      if (this.verteciesIndexBuf) {
        passEncoder.drawIndexed(this.verteciesIndexBuf.length, 1, 0, 0, 0);
      }
      else {
        passEncoder.draw(this.verteciesBuffer.length / 4, 1, 0, 0); // <- / 4 to get the number of vertecies from the coords array (x, y, z, 1)
      }
      this.resetDirtyFlags();
    }
  }
}
