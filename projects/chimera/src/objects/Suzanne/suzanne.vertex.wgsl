fn translateMatrix(translation: vec3f) -> mat4x4<f32> {
    return mat4x4<f32>(
        vec4(1.0, 0.0, 0.0, 0.0),
        vec4(0.0, 1.0, 0.0, 0.0),
        vec4(0.0, 0.0, 1.0, 0.0),
        vec4(translation, 1.0)
    );
}

fn rotateX(m:mat4x4<f32>, angleInRadians:f32) -> mat4x4<f32>{
  var res = mat4x4<f32>(
    vec4(m[0][0], m[0][1], m[0][2], m[0][3]),
    vec4(0.0,     0.0,     0.0,     0.0    ),
    vec4(0.0,     0.0,     0.0,     0.0    ),
    vec4(m[3][0], m[3][1], m[3][2], m[3][3]),
  );

  let m10 = m[1][0];
  let m11 = m[1][1];
  let m12 = m[1][2];
  let m13 = m[1][3];
  
  let m20 = m[2][0];
  let m21 = m[2][1];
  let m22 = m[2][2];
  let m23 = m[2][3];

  let c = cos(angleInRadians);
  let s = sin(angleInRadians);

  res[1][0]  = c * m10 + s * m20;
  res[1][1]  = c * m11 + s * m21;
  res[1][2]  = c * m12 + s * m22;
  res[1][3]  = c * m13 + s * m23;

  res[2][0]  = c * m20 - s * m10;
  res[2][1]  = c * m21 - s * m11;
  res[2][2] = c * m22 - s * m12;
  res[2][3] = c * m23 - s * m13;

  return res;
}

fn rotateY(m:mat4x4<f32>, angleInRadians:f32) -> mat4x4<f32>{
  var res = mat4x4<f32>(
    vec4(0.0,     0.0,     0.0,     0.0    ),
    vec4(m[1][0], m[1][1], m[1][2], m[1][3]),
    vec4(0.0,     0.0,     0.0,     0.0    ),
    vec4(m[3][0], m[3][1], m[3][2], m[3][3]),
  );

  let m00 = m[0][0];
  let m01 = m[0][1];
  let m02 = m[0][2];
  let m03 = m[0][3];
  
  let m20 = m[2][0];
  let m21 = m[2][1];
  let m22 = m[2][2];
  let m23 = m[2][3];

  let c = cos(angleInRadians);
  let s = sin(angleInRadians);

  res[0][0] = c * m00 + s * m20;
  res[0][1] = c * m01 + s * m21;
  res[0][2] = c * m02 + s * m22;
  res[0][3] = c * m03 + s * m23;

  res[2][0] = c * m20 - s * m00;
  res[2][1] = c * m21 - s * m01;
  res[2][2] = c * m22 - s * m02;
  res[2][3] = c * m23 - s * m03;

  return res;
}

fn rotateZ(m:mat4x4<f32>, angleInRadians:f32) -> mat4x4<f32>{
  var res = mat4x4<f32>(
    vec4(0.0,     0.0,     0.0,     0.0    ),
    vec4(0.0,     0.0,     0.0,     0.0    ),
    vec4(m[2][0], m[2][1], m[2][2], m[2][3]),
    vec4(m[3][0], m[3][1], m[3][2], m[3][3]),
  );

  let m00 = m[0][0];
  let m01 = m[0][1];
  let m02 = m[0][2];
  let m03 = m[0][3];
  
  let m10 = m[1][0];
  let m11 = m[1][1];
  let m12 = m[1][2];
  let m13 = m[1][3];

  let c = cos(angleInRadians);
  let s = sin(angleInRadians);

  res[0][0] = c * m00 + s * m10;
  res[0][1] = c * m01 + s * m11;
  res[0][2] = c * m02 + s * m12;
  res[0][3] = c * m03 + s * m13;

  res[1][0] = c * m10 - s * m00;
  res[1][1] = c * m11 - s * m01;
  res[1][2] = c * m12 - s * m02;
  res[1][3] = c * m13 - s * m03;

  return res;
}

fn scaleColumnMatrix(scaleValues:vec3f, vertPos:vec4f) -> vec4f{
  var scaleMatrix = mat4x4<f32>(
    vec4(scaleValues.x,        0,               0,       0),
    vec4(0,              scaleValues.y,         0,       0),
    vec4(0,                     0,       scaleValues.z,  0),
    vec4(0,                     0,               0,      1)
  );
  return scaleMatrix * vertPos;
}

@group(0) @binding(0) var<storage, read> suzannePosition        : vec3f;
@group(0) @binding(1) var<storage, read> suzanneScale           : vec3f;
@group(0) @binding(2) var<storage, read> suzanneRotation        : vec3f;

@group(0) @binding(3) var<uniform> cameraViewProjectionMatrix : mat4x4f;

struct VertexOutput {
  @builtin(position) Position: vec4f,
  @location(0) fragUV: vec2f,
  @location(1) fragPosition: vec4f,
}

struct VertexInput {
  @location(0) position: vec4f,
  @location(1) uv: vec2f
}

@vertex
fn mainVertex(input: VertexInput) -> VertexOutput {
    var output: VertexOutput;

    var suzanneScaleColumnMatrix: vec4f = scaleColumnMatrix(suzanneScale, input.position);
    var suzanneTranslationMatrix: mat4x4<f32> = translateMatrix(suzannePosition);

    var rotationTranslationMatrix: mat4x4<f32> = rotateX(suzanneTranslationMatrix, suzanneRotation.x);
        rotationTranslationMatrix = rotateY(rotationTranslationMatrix, suzanneRotation.y);
        rotationTranslationMatrix = rotateZ(rotationTranslationMatrix, suzanneRotation.z);
    
      output.Position =  cameraViewProjectionMatrix * rotationTranslationMatrix * suzanneScaleColumnMatrix;
      output.fragUV = input.uv;
      output.fragPosition = 0.5 * (input.position + vec4(1.0));
    
    return output;
}