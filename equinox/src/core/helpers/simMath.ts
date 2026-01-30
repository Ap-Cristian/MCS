import { mat4 } from "gl-matrix";
import { Vec2, Vec3 } from "wgpu-matrix";

function matchingSizes(M1: Array<Array<number>>, M2: Array<Array<number>>) {
  return M1.length == M2.length && M1[0].length == M2[0].length;
}

export namespace SimMath {
  export function randomIntFromInterval(min: number, max: number) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  export function multiply3Mat(mat1: mat4, mat2: mat4, mat3: mat4): mat4 {
    let result = mat4.create();
    mat4.multiply(result, mat1, mat2);
    mat4.multiply(result, result, mat3);

    return result;
  }

  export function linspace(min: number, max: number, length: number) {
    const step = (max - min) / (length - 1);
    let result: number[] = [];
    let currentNumber: number = 0;

    for (let i = 0; i < length - 1; i++) {
      currentNumber = min + step * i;
      result.push(currentNumber);
    }

    result.push(max);
    return result;
  }

  /**
   * @summary Instanciates a MxN matrix of zeros
   * @size Vec2 of X and Y representing the matrix size
   */
  export function zeros(size: Vec2): number[][] {
    let result: Array<Array<number>> = new Array<Array<number>>(size[0]);

    for (let i = 0; i < result.length; ++i) {
      result[i] = new Array<number>(size[1]);
      result[i].fill(0);
    }
    return result;
  }

  export function zeros3D(size: Vec3) {
    let result = Array.from({ length: size[0] }, () =>
      zeros([size[1], size[2]]),
    );
    return result;
  }

  /**
   * @summary Instanciates a copy of a matrix
   * @mat Matrix to copy
   */
  export function matCopy(mat: Array<Array<number>>) {
    let result = zeros([mat.length, mat[0].length]);
    for (let i = 0; i < mat.length; i++) {
      for (let j = 0; j < mat[i].length; j++) {
        result[i][j] = mat[i][j];
      }
    }

    return result;
  }

  /**
   * @summary Element wise addition for a matrix
   * @A First member of the addition
   * @B Second member of the addition
   */
  export function matAdd(M1: Array<Array<number>>, M2: Array<Array<number>>) {
    if (matchingSizes(M1, M2)) {
      console.error(
        `Operand sizes don't match: (${M1.length},${M1[0].length}), (${M2.length},${M2[0].length})`,
      );
      return;
    }
    let result = SimMath.zeros([M1.length, M1[0].length]);
    for (let i = 0; i < M1.length; ++i) {
      for (let j = 0; j < M1[0].length; ++j) {
        result[i][j] = M1[i][j] + M2[i][j];
      }
    }

    return result;
  }

  /**
   * @summary Element wise multiplication for two matrices
   */
  export function matHadamardProduct(
    M1: Array<Array<number>>,
    M2: Array<Array<number>>,
  ) {
    if (!matchingSizes(M1, M2)) {
      console.error(
        `Operand sizes don't match: (${M1.length},${M1[0].length}), (${M2.length},${M2[0].length})`,
      );
      return -1;
    }
    let result: Array<Array<number>> = SimMath.zeros([M1.length, M1[0].length]);
    for (let i = 0; i < result.length; ++i) {
      for (let j = 0; j < result[i].length; ++j) {
        result[i][j] = M1[i][j] * M2[i][j];
      }
    }
    return result;
  }
  /**
   * @summary Element wise multiplication for a matrix and a constant
   */
  export function matConstantProduct(M: Array<Array<number>>, C: number) {
    let result = SimMath.zeros([M.length, M[0].length]);
    for (let i = 0; i < M.length; ++i) {
      for (let j = 0; j < M[i].length; ++j) {
        result[i][j] *= C;
      }
    }
    return result;
  }

  /**
   * @summary Element wise addition for two matrices
   */
  export function matSum(M1: Array<Array<number>>, M2: Array<Array<number>>) {
    if (!matchingSizes(M1, M2)) {
      console.error(
        `Operand sizes don't match: (${M1.length},${M1[0].length}), (${M2.length},${M2[0].length})`,
      );
      return;
    }
    let result: Array<Array<number>> = SimMath.zeros([M1.length, M1[0].length]);
    for (let i = 0; i < result.length; ++i) {
      for (let j = 0; j < result[i].length; ++j) {
        result[i][j] = M1[i][j] + M2[i][j];
      }
    }
    return result;
  }

  /**
   * @summary Element wise difference for two matrices
   */
  export function matDiff(M1: Array<Array<number>>, M2: Array<Array<number>>) {
    if (!matchingSizes(M1, M2)) {
      console.error(
        `Operand sizes don't match: (${M1.length},${M1[0].length}), (${M2.length},${M2[0].length})`,
      );
      return;
    }
    let result: Array<Array<number>> = SimMath.zeros([M1.length, M1[0].length]);
    for (let i = 0; i < result.length; ++i) {
      for (let j = 0; j < result[i].length; ++j) {
        result[i][j] = M1[i][j] - M2[i][j];
      }
    }
    return result;
  }

  /**
   * @summary Element wise difference for two matrices
   */
  export function matConstDiff(M1: Array<Array<number>>, C: number) {
    let result: Array<Array<number>> = SimMath.zeros([M1.length, M1[0].length]);
    for (let i = 0; i < result.length; ++i) {
      for (let j = 0; j < result[i].length; ++j) {
        result[i][j] = M1[i][j] - C;
      }
    }
    return result;
  }

  /**
   * @summary Element wise difference for two matrices
   */
  export function matConstSum(M1: Array<Array<number>>, C: number) {
    let result: Array<Array<number>> = SimMath.zeros([M1.length, M1[0].length]);
    for (let i = 0; i < result.length; ++i) {
      for (let j = 0; j < result[i].length; ++j) {
        result[i][j] = M1[i][j] + C;
      }
    }
    return result;
  }
}
// TO_DO: meshgrid could be added here and tensorflow removed for improved efficiency
// size overhead for one function. REALLY BAD!!
