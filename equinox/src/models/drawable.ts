import { checkDeviceAvailability } from "../core/helpers/renderUtils";
import { device } from "./renderer";

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
  values: Float32Array | Float64Array;
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

export class Drawable {
  private bufferObjects: Array<GPUBuffer> = [];
  private bufferResources: Array<ShaderResource> = [];
  private name: string = "";

  protected vertecies: Vertecies;
  protected vertexBO: GPUBuffer;
  protected renderPipeline: GPURenderPipeline;
  protected bindGroup: GPUBindGroup;
  protected bindGroupInit: boolean = false;

  protected get ShouldRedraw(): boolean {
    for (let i = 0; i < this.bufferResources.length; i++) {
      if (this.bufferResources[i].dirty === true) {
        return true;
      }
    }
    return false;
  }

  constructor(
    shaderResources: Array<ShaderResource>,
    vertecies: Vertecies,
    renderPipeline: GPURenderPipeline,
    drawableName: string,
  ) {
    if (!checkDeviceAvailability(device)) {
      console.error("[DEVICE][DRAWABLE] No GPU available");
      return;
    }
    this.bufferResources = shaderResources;
    this.renderPipeline = renderPipeline;
    this.name = drawableName;
    this.vertecies = vertecies;
    this.initBufferObjects();
    this.initBindGroup();
  }

  private initBufferObjects() {
    this.bufferResources.forEach((resource) => {
      this.bufferObjects.push(
        device.createBuffer({
          size: resource.byteSize,
          usage: resource.type,
          label: resource.label,
        }),
      );
    });
    this.vertexBO = device.createBuffer({
      size:
        this.vertecies.vertecies_f32.length * Float32Array.BYTES_PER_ELEMENT,
      usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.VERTEX,
      label: `${this.name}-vertexBuffer`,
    });
    const vertecies_f32 = this.vertecies.vertecies_f32;

    device.queue.writeBuffer(
      this.vertexBO,
      0,
      vertecies_f32.buffer,
      vertecies_f32.byteOffset,
      vertecies_f32.byteLength,
    );
  }

  private initBindGroup() {
    var bindingIdx = 0;
    var entries: Array<GPUBindGroupEntry> = [];
    this.bufferObjects.forEach((bo) => {
      entries.push({
        binding: bindingIdx++,
        resource: {
          buffer: bo,
          label: `${bo.label}-bind-group-entry`,
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

  protected flushBufferObjects() {
    for (let i = 0; i < this.bufferObjects.length; i++) {
      device.queue.writeBuffer(
        this.bufferObjects[i],
        0,
        this.bufferResources[i].values.buffer,
        this.bufferResources[i].values.byteOffset,
        this.bufferResources[i].values.byteLength,
      );
    }
  }

  protected resetDirtyFlags() {
    for (let i = 0; i < this.bufferResources.length; i++) {
      this.bufferResources[i].dirty = false;
    }
  }

  public Draw(passEncoder: GPURenderPassEncoder) {
    if (this.bindGroupInit) {
      this.flushBufferObjects();
      passEncoder.setVertexBuffer(0, this.vertexBO);
      passEncoder.setPipeline(this.renderPipeline);
      passEncoder.setBindGroup(0, this.bindGroup);
      passEncoder.draw(this.vertecies.number, 0, 0);
      this.resetDirtyFlags();
    }
  }
}
