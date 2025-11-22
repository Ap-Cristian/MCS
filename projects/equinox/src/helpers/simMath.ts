import { mat4 } from "gl-matrix";

export function randomIntFromInterval(min: number, max: number) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function multiply3Mat(mat1: mat4, mat2: mat4, mat3: mat4): mat4 {
  const result = mat4.create();
  mat4.multiply(result, mat1, mat2);
  mat4.multiply(result, result, mat3);

  return result;
}
