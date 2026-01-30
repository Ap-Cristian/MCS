import { Vec2 } from "wgpu-matrix";
import { SimMath } from "../core/helpers/simMath";
import { meshgrid } from "@tensorflow/tfjs";

function printMatrix2D(m: Array<Array<number>>) {
  let outBuffer: string = "";
  m.forEach((m_y) => {
    m_y.forEach((m_x) => {
      outBuffer += m_x.toString() + " ";
    });
    outBuffer += "\n";
  });
}

function setVelocityBoundary(u: Array<Array<number>>, v: Array<Array<number>>) {
  for (let i = 0; i < u[0].length; i++) {
    u[0][i] = 0;
  }
  for (let i = 0; i < u.length; i++) {
    u[i][0] = 0;
  }
  for (let i = 0; i < u.length; i++) {
    u[i][u[i].length - 1] = 0;
  }
  for (let i = 0; i < u[0].length; i++) {
    u[u.length - 1][i] = 1;
  }

  for (let i = 0; i < v[0].length; i++) {
    v[0][i] = 0;
    v[v.length - 1][i] = 0;
  }
  for (let i = 0; i < v.length; i++) {
    v[i][0] = 0;
    v[i][v[0].length - 1] = 0;
  }
  printMatrix2D(u);

  return [u, v];
}

function setPressureBoundary(p: Array<Array<number>>) {
  p.forEach((p_x) => {
    p_x[p_x.length - 1] = p_x[p_x.length - 2];
  });

  p.forEach((p_x) => {
    p_x[0] = p_x[1];
  });

  for (let i = 0; i < p[0].length; i++) {
    p[0][i] = p[1][i];
  }

  for (let i = 0; i < p[0].length; i++) {
    p[p.length - 1][i] = p[p.length - 2][i];
  }

  return p;
}

function diff1stX(f: Array<Array<number>>, dx: number): Array<Array<number>> {
  let result = SimMath.zeros([f.length - 2, f[0].length - 2]);
  let x = 0;
  let y = 0;

  for (let i = 1; i < f.length - 1; ++i) {
    for (let j = 2; j < f[i].length; ++j) {
      result[x][y] = (f[i][j] - f[i][j - 2]) / (2 * dx);
      ++y;
    }
    y = 0;
    ++x;
  }

  return result;
}

function diff1stY(f: Array<Array<number>>, dy: number): Array<Array<number>> {
  let result = SimMath.zeros([f.length - 2, f[0].length - 2]);
  let x = 0;
  let y = 0;

  for (let i = 2; i < f.length; ++i) {
    for (let j = 1; j < f[i].length - 1; ++j) {
      result[x][y] = (f[i][j] - f[i - 2][j]) / (2 * dy);
      ++y;
    }
    y = 0;
    ++x;
  }

  return result;
}

function diff2ndX(f: Array<Array<number>>, dx: number): Array<Array<number>> {
  let result = SimMath.zeros([f.length - 2, f[0].length - 2]);
  let x = 0;
  let y = 0;

  for (let i = 1; i < f.length - 1; ++i) {
    for (let j = 0; j < f[i].length - 2; ++j) {
      result[x][y] =
        (f[i][j] - 2 * f[i][j + 1] + f[i][j + 2]) / Math.pow(dx, 2);
      ++y;
    }
    y = 0;
    ++x;
  }
  return result;
}

function diff2ndY(f: Array<Array<number>>, dy: number): Array<Array<number>> {
  let result = SimMath.zeros([f.length - 2, f[0].length - 2]);
  let x = 0;
  let y = 0;

  for (let i = 0; i < f.length - 2; ++i) {
    for (let j = 1; j < f[i].length - 1; ++j) {
      result[x][y] =
        (f[i][j] - 2 * f[i + 1][j] + f[i + 2][j]) / Math.pow(dy, 2);
      ++y;
    }
    y = 0;
    ++x;
  }
  return result;
}

function laplacian(
  f: Array<Array<number>>,
  dx: number,
  dy: number,
): Array<Array<number>> {
  return SimMath.matAdd(diff2ndX(f, dx), diff2ndY(f, dy));
}

function computeVelStar(
  un: Array<Array<number>>,
  vn: Array<Array<number>>,
  dx: number,
  dy: number,
  dt: number,
  nu: number, // viscosity coeff
) {
  let uStar = SimMath.matCopy(un);
  let vStar = SimMath.matCopy(vn);

  let laplNu = SimMath.matConstantProduct(laplacian(un, dx, dy), nu);
  for (let i = 1; i < uStar.length - 1; ++i) {
    for (let j = 1; j < uStar[0].length - 1; ++j) {
      let pX = SimMath.matConstantProduct(diff1stX(un, dx), un[i][j]);
      let pY = SimMath.matConstantProduct(diff1stY(un, dy), vn[i][j]);
      let sum = SimMath.matSum(pX, pY);
      let diff = SimMath.matDiff(laplNu, sum);
      let diffDt = SimMath.matConstantProduct(diff, dt);
      let finSum = SimMath.matConstSum(diffDt, un[i][j]);
      // uStar[i][j] = finSum;
      // TO_DO:
      // Finish implementing this
      // Add IMGUI (slider for domain wireframe opacity/ toggle)
      // Center domain a bit better
    }
  }
}

export function LidProblem() {
  let nx = 20;
  let xMinMax: Vec2 = [0, 2];
  let dx = (xMinMax[1] - xMinMax[0]) / nx - 1;
  let ny = 20;
  let yMinMax: Vec2 = [0, 2];
  let dy = (yMinMax[1] - yMinMax[0]) / ny - 1;
  let nz = 20;
  let zMinMax: Vec2 = [0, 2];
  let dz = (zMinMax[1] - zMinMax[0]) / nz - 1;

  let x = SimMath.linspace(xMinMax[0], xMinMax[1], nx);
  let y = SimMath.linspace(yMinMax[0], yMinMax[1], ny);
  let z = SimMath.linspace(zMinMax[0], zMinMax[1], nz);

  let [X, Y] = meshgrid(x, y);

  let rho = 1;
  let nu = 0.1; // viscosity coeff
  let dt = 0.001;

  let u = SimMath.zeros([ny, nx]);
  let v = SimMath.zeros([ny, nx]);
  let p = SimMath.zeros([ny, nx]);
}
