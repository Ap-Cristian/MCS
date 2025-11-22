fn makeScale(s:vec3f) -> mat4x4<f32> {
  var scaleMatrix = mat4x4<f32>(
    vec4(s.x,0,0,0),
    vec4(0,s.y,0,0),
    vec4(0,0,s.z,0),
    vec4(0,0, 0, 1)
  );
  return scaleMatrix;
}

fn makeTranslation(t: vec3f) -> mat4x4<f32> {
    return mat4x4<f32>(
        vec4(1.0, 0.0, 0.0, 0.0),
        vec4(0.0, 1.0, 0.0, 0.0),
        vec4(0.0, 0.0, 1.0, 0.0),
        vec4(t.x, t.y, t.z, 1.0)
    );
}

fn rotateX(angleInRadians:f32) -> mat4x4<f32> {
    let c = cos(angleInRadians);
    let s = sin(angleInRadians);
    var res = mat4x4<f32>(
        vec4(1.0,     0.0,      0.0,     0.0),
        vec4(0.0,      c,       -s,      0.0),
        vec4(0.0,      s,        c,      0.0),
        vec4(0.0,     0.0,      0.0,     1.0),
    );

    return res;
}

fn rotateY(angleInRadians:f32) -> mat4x4<f32> {
    let c = cos(angleInRadians);
    let s = sin(angleInRadians);
    var res = mat4x4<f32>(
        vec4( c,      0.0,      s,      0.0),
        vec4(0.0,     1.0,     0.0,     0.0),
        vec4(-s,      0.0,      c,      0.0),
        vec4(0.0,     0.0,     0.0,     1.0),
    );

    return res;
}

fn rotateZ(angleInRadians:f32) -> mat4x4<f32>{
    let c = cos(angleInRadians);
    let s = sin(angleInRadians);
    var res = mat4x4<f32>(
        vec4( c,      -s,      0.0,     0.0),
        vec4( s,       c,      0.0,     0.0),
        vec4(0.0,     0.0,     1.0,     0.0),
        vec4(0.0,     0.0,     0.0,     1.0),
    );

    return res;
}

struct InstanceData {
    model: mat4x4f,
}

@group(0) @binding(0) var<storage, read> instancesData: array<InstanceData>;
//pass the model matrixes in this bih
@group(0) @binding(1) var<uniform> cameraVP: mat4x4f;
//@group(0) @binding(2) var<storage, read> models: array<mat4x4f>;

struct VertexOutput {
  @builtin(position) Position: vec4f,
  @location(0) fragUV: vec2f,
  @location(1) fragColor: vec4f,
}

struct VertexInput {
  @builtin(instance_index) instanceIdx: u32,
  @location(0) position: vec4f,
  @location(1) norm: vec4f,
  @location(2) uv: vec2f
}

@vertex
fn mainVertex(input: VertexInput) -> VertexOutput {
    var output: VertexOutput;

    var world = instancesData[input.instanceIdx].model * input.position;
    var clipped = cameraVP * world;

    output.Position = clipped;
    output.fragUV = input.uv;
    output.fragColor = vec4(1, 1, 1, 0);

    return output;
}
