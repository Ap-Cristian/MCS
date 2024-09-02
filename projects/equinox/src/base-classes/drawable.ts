// if indexBuffer is not set, normal draw is asumed, branch otherwise
// NO INSTANCED drawing SUPPORT!
// add instancing somewhere rather than the renderer

import { IFace } from "../res/interfaces/IFace";
import { IVertex } from "../res/interfaces/IVertex";
import { IDrawable, ILine } from "../res/interfaces/IDrawable";
import { device } from "../objects/renderer";
import { McsObject } from "./objectBase";
import { findBoundingBoxVertexCoordinates, LineArrayToUInt32 } from "../helpers/gizmoMisc";


export class Drawable {
    private readonly FLOATS_PER_VERTEX: number = (4 + 4 + 2);
    private readonly VERTECIES_STRIDE = this.FLOATS_PER_VERTEX * 4;
    private readonly NUMBER_OF_INSTANCES: number;

    private _parentObject?: McsObject;
    private _parentsObjects?: McsObject[];

    private _faceIndexData?: Uint32Array;
    private _vertexArray: IVertex[];
    private _facesArray?: IFace[];
    private _linesArray?: ILine[];

    private _positionBO: GPUBuffer;
    private _scaleBO: GPUBuffer;
    private _rotationBO: GPUBuffer;
    private _verticesBO: GPUBuffer;
    private _facesIndexBO?: GPUBuffer;
    private _cameraProjectionBO: GPUBuffer;

    private _uniformBindGroup: GPUBindGroup;

    public RenderPipeline: GPURenderPipeline;
    public set VertexArray(value: IVertex[]) {
        this._vertexArray = value;
        //tbi: write to verteciesBO
    }

    public get VertexArray() {
        return this._vertexArray;
    }

    public set FacesArray(value: IFace[]) {
        this._facesArray = value;
        //tbi: update verteciesBO
    }

    public get FacesArray() {
        return this._facesArray;
    }

    public get Object(): McsObject | null {
        if (this._parentObject) {
            return this._parentObject;
        }
        return null;
    }

    // 6.16 <-- dates (2024)
    //maybe pass an mcsObject as objectParams,
    //all the renderer should do is get a list of objects and then
    //create the coresponding drawables in order to avoid clutter.
    //this class will be the result of the renderer object to drawable convertor
    //the engine user will use objects not with drawables!
    //drawables should be kept behind the scenes as much as possible
    //
    //renderer only gets a list of objects and a camera (maybe add these to a scene)

    // 7.16
    // in order to treat instancing, _parentsObjects property was added.
    // the plan is to check whether an array of parrents is given at creation point,
    // and if true, instance the given object. All of the parents have to be of the same type.
    // This cannot be avoided due to the requirement of drawing many copies of the same object,
    // which would render (hah get it) iterating trough an object array every frame very slow.
    // !! modifying the shader source at runtime might be required in order to support instancing for all objects.

    // 7.23 
    // create a pipeline creation object/function that takes as arguments the source code for 
    // the object shader. The pipeline creation process is exactly (kinda lost what i wrote here, oh well)

    // 8.19 
    // long time no see,
    // whats left in order to draw the bounding box is to iterate trough each line object inside of the parent of the bounding box drawable,\
    // and then pass them to the render pass acordingly to the vertex order (unknown yet).

    constructor(drawableParams: IDrawable, parent?: McsObject, parents?: McsObject[]) {
        if (parent) {
            this._parentObject = parent;
        } else if (parents) {
            this._parentsObjects = parents;
        }


        this._vertexArray = drawableParams._vertecies;
        this.RenderPipeline = drawableParams._renderPipeline;
        this._cameraProjectionBO = drawableParams._cameraProjectionBO;

        if (drawableParams._faces) {
            this._facesArray = drawableParams._faces;
            this.mapFaces();
        }

        if (drawableParams._lines) {
            //....map lines ---------------------------------------------------------------------------------
            this._linesArray = drawableParams._lines;
            this.mapLines();

            console.log("face_idx_data: ", this._faceIndexData)
        }

        this.initOBs();
        this.initBindGroup();
    };

    private initOBs() {
        if (!device) {
            console.error("Drawable: initOBs: No device available!");
            return;
        }

        this._positionBO = device.createBuffer({
            label: "DRAWABLE_POS",
            size: this._parentObject.Position.length * Float32Array.BYTES_PER_ELEMENT,
            usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        });

        this._scaleBO = device.createBuffer({
            label: "DRAWABLE_SCAL",
            size: this._parentObject.Scale.length * Float32Array.BYTES_PER_ELEMENT,
            usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        });

        this._rotationBO = device.createBuffer({
            label: "DRAWABLE_ROT",
            size: this._parentObject.Rotation.length * Float32Array.BYTES_PER_ELEMENT,
            usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
        });

        this._verticesBO = device.createBuffer({
            label: "DRAWABLE_VTC",
            size: this.VertexArray.length * this.VERTECIES_STRIDE,
            usage: GPUBufferUsage.VERTEX,
            mappedAtCreation: true
        });

        if (this._facesArray || this._faceIndexData) {
            this._facesIndexBO = device.createBuffer({
                label: "DRAWABLE_FACES",
                size: this._faceIndexData.length * Uint32Array.BYTES_PER_ELEMENT,
                usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.INDEX
            });
        }

        this.mapVertecies();
        // else {
        //     console.error("DRAWABLE: initOBs(): _facesIndexData is null!");
        // }
    }

    private mapVertecies() {
        const verteciesMapping = new Float32Array(this._verticesBO.getMappedRange());
        var vertexByteOffset = 0;
        this._vertexArray.forEach((vertex) => {
            verteciesMapping.set(vertex.pos, vertexByteOffset);
            vertexByteOffset += vertex.pos.length;

            verteciesMapping.set(vertex.norm, vertexByteOffset);
            vertexByteOffset += vertex.norm.length;
        });
        this._verticesBO.unmap();
    }

    private mapFaces() {
        const NUMBER_OF_NUMBERS_IN_FACE = 3;
        this._faceIndexData = new Uint32Array(this._facesArray.length * NUMBER_OF_NUMBERS_IN_FACE * Uint32Array.BYTES_PER_ELEMENT);

        var idx = 0;
        this._facesArray.forEach((face) => {
            this._faceIndexData[idx++] = face.indexes[0];
            this._faceIndexData[idx++] = face.indexes[1];
            this._faceIndexData[idx++] = face.indexes[2];
        })
    }

    private mapLines() {
        this._faceIndexData = LineArrayToUInt32(this._linesArray);
    }

    private initBindGroup() {

        var bindingIdx = 0;
        var entries: Iterable<GPUBindGroupEntry> = [
            {
                binding: bindingIdx++,
                resource: {
                    buffer: this._positionBO,
                    label: `${this._parentObject.Type}-position_uniform`
                }
            },
            {
                binding: bindingIdx++,
                resource: {
                    buffer: this._rotationBO,
                    label: `${this._parentObject.Type}-rotation_uniform`
                }
            },
            {
                binding: bindingIdx++,
                resource: {
                    buffer: this._scaleBO,
                    label: `${this._parentObject.Type}-scale_uniform`
                }
            },
            {
                binding: bindingIdx++,
                resource: {
                    buffer: this._cameraProjectionBO,
                    label: `${this._parentObject.Type}-camera_uniform`
                }
            },
        ];

        //             layout: this.cell_renderPipeline.getBindGroupLayout(0),
        //             entries: uniformBindGroupEntries

        this._uniformBindGroup = device.createBindGroup({
            layout: this.RenderPipeline.getBindGroupLayout(0),
            entries: entries,
            label: "DRAWABLE_BIND_GROUP"
        })
    }

    private writeUniformsDataToBuffers() {
        if (!device) {
            console.error("Drawable: writeUniformsDataToBuffers: No device available!");
            return;
        }

        device.queue.writeBuffer(
            this._positionBO,
            0,
            this._parentObject.Position.buffer,
            this._parentObject.Position.byteOffset,
            this._parentObject.Position.byteLength
        ); // position
        device.queue.writeBuffer(
            this._scaleBO,
            0,
            this._parentObject.Scale.buffer,
            this._parentObject.Scale.byteOffset,
            this._parentObject.Scale.byteLength
        ); // rotation
        device.queue.writeBuffer(
            this._rotationBO,
            0,
            this._parentObject.Rotation.buffer,
            this._parentObject.Rotation.byteOffset,
            this._parentObject.Rotation.byteLength
        ); // scale

        // console.log(`rot ${this._parentObject.Rotation}`)
        // console.log(`scale ${this._parentObject.Scale}`)
        // console.log(`pos ${this._parentObject.Position}`)

        if (this._faceIndexData) {
            device.queue.writeBuffer(
                this._facesIndexBO,
                0,
                this._faceIndexData.buffer,
                this._faceIndexData.byteOffset,
                this._faceIndexData.byteLength
            );
        }
    }

    public draw(passEncoder: GPURenderPassEncoder, cameraProjectionBO: GPUBuffer) {
        this._cameraProjectionBO = cameraProjectionBO;
        this.writeUniformsDataToBuffers();

        passEncoder.setVertexBuffer(0, this._verticesBO);
        passEncoder.setPipeline(this.RenderPipeline);
        passEncoder.setBindGroup(0, this._uniformBindGroup);

        if (this._faceIndexData) {
            passEncoder.setIndexBuffer(this._facesIndexBO, "uint32");
            passEncoder.drawIndexed(this._faceIndexData.length, 1, 0, 0, 0);
        }
        else {
            passEncoder.draw(this.VertexArray.length, 1, 0, 0);
        }

    }

}