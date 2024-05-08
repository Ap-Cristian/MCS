import { IFace } from "./IFace";
import { IVertex } from "./IVertex";

export interface ISuzanneResponse{
    vertecies:Array<IVertex> | null;
    faces:Array<IFace> | null;
};