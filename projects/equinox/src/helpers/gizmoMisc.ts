import { Drawable } from "../base-classes/drawable";
import { ILine } from "../res/interfaces/IDrawable";
import { IVertex } from "../res/interfaces/IVertex";

// export const BOUNDING_BOX_FACE_INDEXES: IFace[] = new Array<IFace>([
//     // back
//     0, 6,
//     3, 2,
//     6, 3,
//     0, 2,
//     // front
//     7, 4,
//     4, 5,
//     5, 1,
//     1, 7,
//     // sides
//     4, 6,
//     5, 0,
//     1, 2,
//     7, 3
// ]);

export const BOUNDING_BOX_FACE_INDEXES: ILine[] = new Array<ILine>(
    {
        // indexes: [0, 6],
        startVrtIndex: 0,
        endVrtIndex: 6
    },
    {
        // indexes: [3, 2],
        startVrtIndex: 3,
        endVrtIndex: 2
    },
    {
        // indexes: [6, 3]
        startVrtIndex: 6,
        endVrtIndex: 3
    },
    {
        // indexes: [0, 2]
        startVrtIndex: 0,
        endVrtIndex: 2
    },
    {
        // indexes: [7, 4]
        startVrtIndex: 7,
        endVrtIndex: 4
    },
    {
        // indexes: [4, 5]
        startVrtIndex: 4,
        endVrtIndex: 5
    },
    {
        // indexes: [5, 1]
        startVrtIndex: 5,
        endVrtIndex: 1
    },
    {
        // indexes: [1, 7]
        startVrtIndex: 1,
        endVrtIndex: 7
    },
    {
        // indexes: [4, 6]
        startVrtIndex: 4,
        endVrtIndex: 6
    },
    {
        // indexes: [5, 0]
        startVrtIndex: 5,
        endVrtIndex: 0
    },
    {
        // indexes: [1, 2]
        startVrtIndex: 1,
        endVrtIndex: 2
    },
    {
        // indexes: [7, 3]
        startVrtIndex: 7,
        endVrtIndex: 3
    },

);

// export const BOUNDING_BOX_FACE_INDEXES: ILine[] = [
//     {
//         // indexes: [0, 6],
//         startVrtIndex: 0,
//         endVrtIndex: 1
//     } as ILine,
// ];

export function findBoundingBoxVertexCoordinates(parentDrawable: Drawable): IVertex[] {
    var v7: IVertex = { //top-most
        norm: [0, 0, 0, 1],
        pos: [Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, 1],
        uv: [0, 0]
    };
    var v0: IVertex = { //bottom-most
        norm: [0, 0, 0, 1],
        pos: [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, 1],
        uv: [0, 0]
    };

    parentDrawable.VertexArray.forEach((vertex) => {
        vertex.pos[0] < v0.pos[0] ? v0.pos[0] = vertex.pos[0] : null;
        vertex.pos[1] < v0.pos[1] ? v0.pos[1] = vertex.pos[1] : null;
        vertex.pos[2] < v0.pos[2] ? v0.pos[2] = vertex.pos[2] : null;

        vertex.pos[0] > v7.pos[0] ? v7.pos[0] = vertex.pos[0] : null;
        vertex.pos[1] > v7.pos[1] ? v7.pos[1] = vertex.pos[1] : null;
        vertex.pos[2] > v7.pos[2] ? v7.pos[2] = vertex.pos[2] : null;
    })

    //box VERTECIES
    var v1: IVertex = {
        norm: [0, 0, 0, 1],
        pos: [0, 0, 0, 1],
        uv: [0, 0]
    };
    var v2: IVertex = {
        norm: [0, 0, 0, 1],
        pos: [0, 0, 0, 1],
        uv: [0, 0]
    };
    var v3: IVertex = {
        norm: [0, 0, 0, 1],
        pos: [0, 0, 0, 1],
        uv: [0, 0]
    };
    var v4: IVertex = {
        norm: [0, 0, 0, 1],
        pos: [0, 0, 0, 1],
        uv: [0, 0]
    };
    var v5: IVertex = {
        norm: [0, 0, 0, 1],
        pos: [0, 0, 0, 1],
        uv: [0, 0]
    };
    var v6: IVertex = {
        norm: [0, 0, 0, 1],
        pos: [0, 0, 0, 1],
        uv: [0, 0]
    };

    v1.pos = [v7.pos[0], v0.pos[1], v7.pos[2], 1]; //bottom
    v2.pos = [v7.pos[0], v0.pos[1], v0.pos[2], 1]; //bottom
    v5.pos = [v0.pos[0], v0.pos[1], v7.pos[2], 1]; //bottom

    v3.pos = [v7.pos[0], v7.pos[1], v0.pos[2], 1]; //top
    v4.pos = [v0.pos[0], v7.pos[1], v7.pos[2], 1]; //top
    v6.pos = [v0.pos[0], v7.pos[1], v0.pos[2], 1]; //top

    return [v0, v1, v2, v3, v4, v5, v6, v7];

    // this.TopVertecies = [v6, v3, v4, v7]; //ordered left to right
    // this.BottomVertecies = [v0, v2, v5, v1];
}

export function LineArrayToUInt32(lines: ILine[]): Uint32Array {
    const POINTS_PER_LINE = 2;
    var result = new Uint32Array(lines.length * POINTS_PER_LINE); //line starWt and line end
    var index: number = 0;

    lines.forEach((line) => {
        result[index++] = line.startVrtIndex;
        result[index++] = line.endVrtIndex;
    });

    return result;
}