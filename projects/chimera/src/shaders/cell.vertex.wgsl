// struct Uniforms {               // 4x4 transform matrices
//     transform : array<mat4x4<f32>>,    // translate AND rotate
// };

// struct Camera {                 // 4x4 transform matrix
//     matrix : mat4x4<f32>,
// };

// struct Color {                  // RGB color
//     color: vec3<f32>
// };

// // bind model/camera/color buffers
// @group(0) @binding(0) var<uniform> modelsTransforms   : Uniforms;
// @group(0) @binding(1) var<storage,read> color        : Color;
// @group(0) @binding(2) var<uniform> cameraTransform   : Camera;

// // output struct of this vertex shader
// struct VertexOutput {
//     @builtin(position) Position : vec4<f32>,
//     @location(0) fragColor : vec3<f32>,
//     @location(1) fragNorm : vec3<f32>,
//     @location(3) fragPos : vec3<f32>,
// };

// // input struct according to vertex buffer stride
// struct VertexInput {
//     @builtin(instance_index) instanceIndex: u32,
//     @location(0) position : vec3<f32>,
//     @location(1) norm : vec3<f32>,
//     @location(2) uv : vec2<f32>,
// };

// @vertex
// fn main(input: VertexInput) -> VertexOutput {

//     var output: VertexOutput;
//     var transformedPosition: vec4<f32> = modelsTransforms.transform[input.instanceIndex] * vec4<f32>(input.position, 1.0);
    
//     output.Position = cameraTransform.matrix * transformedPosition;             // transformed with model & camera projection
//     output.fragColor = color.color;                                             // fragment color from buffer

//     return output;
// }

struct Uniforms {
  //size has to be set manually which is bad
  //size if number of elements ^2
  modelViewProjectionMatrix : array<mat4x4f, 1024>
}

@binding(0) @group(0) var<uniform> uniforms : Uniforms;

struct VertexOutput {
  @builtin(position) Position : vec4f,
  @location(0) fragUV : vec2f,
  @location(1) fragPosition : vec4f,
}

@vertex
fn mainVertex(
  @builtin(instance_index) instanceIdx : u32,
  @location(0) position : vec4f,
  @location(1) uv : vec2f
) -> VertexOutput {
  var output : VertexOutput;
  output.Position = uniforms.modelViewProjectionMatrix[instanceIdx] * position;
  output.fragUV = uv;
  output.fragPosition = 0.5 * (position + vec4(1.0));  
  return output;
}