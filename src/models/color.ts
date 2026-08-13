export class Color {
  public R: number;
  public G: number;
  public B: number;

  public static get WHITE() {
    return new Color(255, 255, 255);
  }

  public static get BLACK() {
    return new Color(0, 0, 0);
  }

  public static get RED() {
    return new Color(255, 0, 0);
  }

  public static get GREEN() {
    return new Color(0, 255, 0);
  }

  public static get BLUE() {
    return new Color(0, 0, 255);
  }

  constructor(R: number, G: number, B: number) {
    this.R = R / 255;
    this.G = G / 255;
    this.B = B / 255;
  }
}
