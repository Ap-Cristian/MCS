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

fn translateMatrix(translation: vec3f) -> mat4x4<f32> {
    return mat4x4<f32>(
        vec4(1.0, 0.0, 0.0, 0.0),
        vec4(0.0, 1.0, 0.0, 0.0),
        vec4(0.0, 0.0, 1.0, 0.0),
        vec4(translation, 1.0)
    );
}

fn rotationMatrix(rotation: vec3f) -> mat4x4<f32> {
    let cosX = cos(rotation.x);
    let sinX = sin(rotation.x);

    let cosY = cos(rotation.y);
    let sinY = sin(rotation.y);

    let cosZ = cos(rotation.z);
    let sinZ = sin(rotation.z);

    let rotationX = mat4x4<f32>(
        vec4(1.0, 0.0, 0.0, 0.0),
        vec4(0.0, cosX, -sinX, 0.0),
        vec4(0.0, sinX, cosX, 0.0),
        vec4(0.0, 0.0, 0.0, 1.0),
    );

    let rotationY = mat4x4<f32>(
        vec4(cosY, 0.0, sinY, 0.0),
        vec4(0.0, 1.0, 0.0, 0.0),
        vec4(-sinY, 0.0, cosY, 0.0),
        vec4(0.0, 0.0, 0.0, 1.0),
    );

    let rotationZ = mat4x4<f32>(
        vec4(cosZ, -sinZ, 0.0, 0.0),
        vec4(sinZ, cosZ, 0.0, 0.0),
        vec4(0.0, 0.0, 1.0, 0.0),
        vec4(0.0, 0.0, 0.0, 1.0),
    );

    return rotationX * rotationY * rotationZ;
}

struct CellPositions {
  position: array<vec3f>,
};

struct CellScales {
  scale: array<vec3f>,
};

struct CellRotations {
  rotation: array<vec3f>,
};

@group(0) @binding(0) var<storage, read> cellsRotation :        CellRotations;
@group(0) @binding(1) var<storage, read> cellsPositions :       CellPositions;
@group(0) @binding(2) var<uniform> cameraViewProjectionMatrix : mat4x4f;

struct VertexOutput {
  @builtin(position) Position: vec4f,
  @location(0) fragUV: vec2f,
  @location(1) fragPosition: vec4f,
}

struct VertexInput {
  @builtin(instance_index) instanceIdx: u32,
  @location(0) position: vec4f,
  @location(1) uv: vec2f
}

@vertex
fn mainVertex(input: VertexInput) -> VertexOutput {
    var output: VertexOutput;

    var cellTranslationMatrix: mat4x4<f32> = translateMatrix(cellsPositions.position[input.instanceIdx]);
    var rotationTranslationMatrix: mat4x4<f32> = rotationMatrix(cellsRotation.rotation[input.instanceIdx]);
    var rotatedCellTransform: mat4x4<f32> = cellTranslationMatrix * rotationTranslationMatrix;

    output.Position = rotatedCellTransform * input.position * cameraViewProjectionMatrix;
    output.fragUV = input.uv;
    output.fragPosition = 0.5 * (input.position + vec4(1.0));
    return output;
}