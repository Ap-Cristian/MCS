@group(0) @binding(0) var<storage, read> modelMatrix: mat4x4f;
@group(0) @binding(1) var<uniform> cameraVP: mat4x4f;

struct VertexOutput {
  @builtin(position) Position: vec4f,
  @location(0) fragUV: vec2f,
  @location(1) fragColor: vec4f,
}

struct VertexInput {
  @location(0) position: vec4f,
  @location(1) norm: vec4f,
  @location(2) uv: vec2f
}

@vertex
fn mainVertex(input: VertexInput) -> VertexOutput {
    var output: VertexOutput;

    var world = modelMatrix * input.position;
    var clipped = cameraVP * world;

    output.Position = clipped;
    output.fragUV = input.uv;
    output.fragColor = vec4(1, 1, 1, 0);

    return output;
}
