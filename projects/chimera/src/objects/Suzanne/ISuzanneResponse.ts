import { IFace } from "./IFace";
import { IVertex } from "./IVertex";

export interface ISuzanneResponse{
    vertecies:IVertex[] | null;
    faces:IFace[] | null;
};