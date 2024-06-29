import { IFace } from "./IFace";
import { IVertex } from "./IVertex";

export interface ISuzanneObjResponse{
    vertecies:IVertex[] | null;
    faces:IFace[] | null;
};