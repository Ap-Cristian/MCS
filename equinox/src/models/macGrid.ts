import { Vec3 } from "wgpu-matrix";
import { McsObj, McsObject } from "./objectBase";
import { Cell } from "./cell";

const X = 0;
const Y = 1;
const Z = 2;

export class Velocity {
  u: Float32Array; // x * y * z arrays
  v: Float32Array;
  w: Float32Array;

  matrix_size: Vec3;

  constructor(size: Vec3) {
    this.u = new Float32Array(size[0] * size[1] * size[2]);
    this.v = new Float32Array(size[0] * size[1] * size[2]);
    this.w = new Float32Array(size[0] * size[1] * size[2]);
    this.matrix_size = size;
  }

  public UGet(x: number, y: number, z: number): number {
    return this.u[x + y * this.matrix_size[1] + z * this.matrix_size[2]];
  }
  public VGet(x: number, y: number, z: number): number {
    return this.v[x + y * this.matrix_size[1] + z * this.matrix_size[2]];
  }
  public WGet(x: number, y: number, z: number): number {
    return this.w[x + y * this.matrix_size[1] + z * this.matrix_size[2]];
  }

  public USet(x: number, y: number, z: number, value: number): void {
    this.u[x + y * this.matrix_size[1] + z * this.matrix_size[2]] = value;
  }
  public VSet(x: number, y: number, z: number, value: number): void {
    this.v[x + y * this.matrix_size[1] + z * this.matrix_size[2]] = value;
  }
  public WSet(x: number, y: number, z: number, value: number): void {
    this.w[x + y * this.matrix_size[1] + z * this.matrix_size[2]] = value;
  }
}

export class MACGridModel extends McsObject {
  private _cells: Cell[] = [];
  private readonly CELL_SIZE: Vec3 = [1, 1, 1];
  private velocity;

  public get NumberOfCells(): number {
    return this._cells.length;
  }

  public get CellPositionsF32(): Float32Array {
    const result = new Float32Array(
      this._cells.length * Float32Array.BYTES_PER_ELEMENT,
    );
    let current_offset = 0;
    this._cells.forEach((cell) => {
      result.set(cell.Position, current_offset);
      current_offset += cell.Position.length;
    });
    return result;
  }

  public get CellRotationsF32(): Float32Array {
    const result = new Float32Array(
      this._cells.length * Float32Array.BYTES_PER_ELEMENT,
    );
    let current_offset = 0;
    this._cells.forEach((cell) => {
      result.set(cell.Rotation, current_offset);
      current_offset += cell.Rotation.length;
    });
    return result;
  }

  public get CellScalesF32(): Float32Array {
    const result = new Float32Array(
      this._cells.length * Float32Array.BYTES_PER_ELEMENT,
    );
    let current_offset = 0;
    this._cells.forEach((cell) => {
      result.set(cell.Scale, current_offset);
      current_offset += cell.Scale.length;
    });
    return result;
  }

  public get CellDataF32(): Float32Array {
    const result = new Float32Array(
      this._cells.length * 3 * 4, // position[4], rotation[4], scale[4] - 3 actual vlaues 1 for padding
    );
    var current_offset = 0;

    this._cells.forEach((cell) => {
      result.set([...cell.Position, 1.0], current_offset);
      current_offset += cell.Position.length + 1; // 1 - padding
      result.set([...cell.Scale, 1.0], current_offset);
      current_offset += cell.Scale.length + 1;
      result.set([...cell.Rotation, 1.0], current_offset);
      current_offset += cell.Rotation.length + 1;
    });

    return result;
  }

  public get CellModelsF32(): Float32Array {
    const result = new Float32Array(this._cells.length * 16);
    let currentOffset = 0;
    this._cells.forEach((cell) => {
      result.set(cell.ModelMatrix, currentOffset);
      currentOffset += cell.ModelMatrix.length;
    });
    return result;
  }

  private buildGrid(size: Vec3): void {
    var currentPos: Vec3 = [this.X, this.Y, this.Z];
    for (let x = 0; x < size[0]; x++) {
      for (let y = 0; y < size[1]; y++) {
        for (let z = 0; z < size[2]; z++) {
          this._cells.push(
            new Cell({
              parameters: {
                X: currentPos[X],
                Y: currentPos[Y],
                Z: currentPos[Z],
                ScaleX: this.CELL_SIZE[X],
                ScaleY: this.CELL_SIZE[Y],
                ScaleZ: this.CELL_SIZE[Z],
              },
            }),
          );
          currentPos[Z] += this.CELL_SIZE[Z] * 2;
        }
        currentPos[Y] += this.CELL_SIZE[Y] * 2;
        currentPos[Z] = this.Z;
      }
      currentPos[X] += this.CELL_SIZE[X] * 2;
      currentPos[Y] = this.Y;
    }
  }

  constructor(size: Vec3, object?: McsObj) {
    object ? super(object) : super();
    this.buildGrid(size);
    this.velocity = new Velocity(size);
  }
}
