import { SuzanneAPI } from "../api/suzanne.api";
import { IContainer } from "../res/interfaces/IContainer";
import { ISuzanneResponse } from "../res/interfaces/ISuzanneResponse";
import { IFace } from "../res/interfaces/IFace";
import { IVertex } from "../res/interfaces/IVertex";

export class SuzanneShaderResources implements IContainer {
  public vertexArray: IVertex[];
  public faces: IFace[];
  public vertexCode: string = "placeholder vertex sauce";
  public fragmentCode: string = "placeholder fragment sauce";
  private static instance: SuzanneShaderResources;

  public static getInstance(): SuzanneShaderResources {
    if (!this.instance) {
      this.instance = new SuzanneShaderResources();
    }
    return this.instance;
  }
  public async fetchData() {
    const verteciesAndFaces: ISuzanneResponse = (
      await SuzanneAPI.GetSuzanneVerteciesAndFaces()
    ).data;
    const vertexShaderSource: string = (
      await SuzanneAPI.GetSuzanneVertexShader()
    ).data;
    const fragmentShaderSource: string = (
      await SuzanneAPI.GetSuzanneFragmentShader()
    ).data;

    this.vertexArray = verteciesAndFaces.vertecies;
    this.faces = verteciesAndFaces.faces;
    this.vertexCode = vertexShaderSource;
    this.fragmentCode = fragmentShaderSource;

    this.vertexArray.forEach((vert) => {
      vert.pos.push(1);
      vert.norm.push(1);
    });
  }
  private constructor() {}
}
