import { Scene } from './scene';
import { Drawable } from '../base-classes/drawable';
import { CellShaderResources } from '../res/cell.res';
import { CanvasLayers, createRenderPassDescriptor, depthTextureView, DrawableObjectType, generateRenderPipeline, ObjectTopology } from '../helpers/renderUtils';
import { SuzanneShaderResources } from '../res/suzanne.res';
import { IFace } from '../res/interfaces/IFace';
import { IVertex } from '../res/interfaces/IVertex';
import { WireframeShaderResources } from '../res/wireframe.res';
import { BOUNDING_BOX_FACE_INDEXES, findBoundingBoxVertexCoordinates } from '../helpers/gizmoMisc';
import { ObjectType } from 'typescript';
import { McsObject } from '../base-classes/objectBase';

export var adapter: GPUAdapter;
export var device: GPUDevice;

const FRAME_ERROR_PROBE_ONLY_ONCE: boolean = true;
export interface RendererParams {
    scenes: Array<Scene>,
    activeSceneIndex: number,
    canvases: HTMLCanvasElement[]
}
export class Renderer {
    private scenes: Scene[];
    private activeSceneIdx: number = 0;
    private drawables: Drawable[] = new Array<Drawable>();
    private gizmos: Drawable[] = new Array<Drawable>();

    private _cameraProjectionBO: GPUBuffer;
    private _renderPassDescriptor: GPURenderPassDescriptor;
    private _commandEncoder: GPUCommandEncoder;
    private _renderContext: GPUCanvasContext;
    private _framerateContext: CanvasRenderingContext2D;
    private _passEncoder: GPURenderPassEncoder;
    private _gpuCurrentTexture: GPUTexture;
    private _RPAColorAttachment: GPURenderPassColorAttachment;
    private _rendererTypesAndCounts = new Map();

    constructor(rendererParams: RendererParams) {
        this.scenes = rendererParams.scenes;
        this.initGpuDevice().then(() => {
            if (rendererParams.activeSceneIndex >= 0 && rendererParams.activeSceneIndex < this.scenes.length) {
                this.activeSceneIdx = rendererParams.activeSceneIndex;
                this.initCameraProjectionBO();
                this.initContexts(rendererParams.canvases);
                this.initRenderPassDescriptor(rendererParams.canvases[CanvasLayers.RENDER_CANVAS]);

                this.configRenderingContext();
                this.createDrawablesFromSceneObjects();
                // this.updateCamera(); // might not be needed
            }
            else {
                console.error("Renderer: Active scene out of scene array range.");
                return;
            }
        });
    }

    private pushErrorScopes() {
        device.pushErrorScope("validation")
        device.pushErrorScope("out-of-memory")
        device.pushErrorScope("internal")
    }

    private popErrorScopes() {
        device.popErrorScope().then((ex) => {
            if (ex) {
                console.error(`INTERNAL: ${ex.message}`);
            }
        })
        device.popErrorScope().then((ex) => {
            if (ex) {
                console.error(`OUT_OF_MEM: ${ex.message}`);
            }
        })
        device.popErrorScope().then((ex) => {
            if (ex) {
                console.error(`INTERNAL: ${ex.message}`);
            }
        })
    }

    private async initGpuDevice() {
        if (navigator.gpu) {
            const adapter = await navigator.gpu.requestAdapter();
            device = await adapter.requestDevice();
        }
        else {
            console.error("WebGPU is not available for your browser. Please check compatibility.")
        }
    }

    private configRenderingContext() {
        this._renderContext.configure(
            {
                device: device,
                format: navigator.gpu.getPreferredCanvasFormat(),
                alphaMode: 'premultiplied',
            }
        )
    }

    private initCameraProjectionBO() {
        var cameraProjArray = this.scenes[this.activeSceneIdx].ActiveCamera.getProjectionArray();
        this._cameraProjectionBO = device.createBuffer({
            label: "CAMERA_BUFFER",
            size: cameraProjArray.length * Float32Array.BYTES_PER_ELEMENT,
            usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.UNIFORM
        });
    }

    private updateCamera() {
        var activeSceneCamera = this.scenes[this.activeSceneIdx].ActiveCamera;

        var _projArr = activeSceneCamera.getProjectionArray();

        device.queue.writeBuffer(
            this._cameraProjectionBO,
            0,
            _projArr.buffer,
            _projArr.byteOffset,
            _projArr.byteLength
        )

    }
    //GPU rendering init
    private initRenderPassDescriptor(canvas: HTMLCanvasElement) {
        this._renderPassDescriptor = createRenderPassDescriptor(depthTextureView(device, canvas));
    }

    private initContexts(canvasLayers: HTMLCanvasElement[]) {
        this._renderContext = canvasLayers[CanvasLayers.RENDER_CANVAS].getContext("webgpu") as unknown as GPUCanvasContext;
        this._framerateContext = canvasLayers[CanvasLayers.FRAMERATE_CANVAS].getContext("2d") as unknown as CanvasRenderingContext2D;
    }
    //

    private updateObjects() {

    }

    public update() {
        if (device) {
            this.updateCamera();
        } else {
            console.warn("Renderer: Update(): Device is still loading...");
        }
        // this.updateObjectsDrawables();
    }

    public draw() {
        if (device) {
            this.pushErrorScopes();

            this._commandEncoder = device.createCommandEncoder();
            this._gpuCurrentTexture = this._renderContext.getCurrentTexture();
            this._RPAColorAttachment = (this._renderPassDescriptor.colorAttachments as [GPURenderPassColorAttachment])[0];
            this._RPAColorAttachment.view = this._gpuCurrentTexture.createView();

            this._passEncoder = this._commandEncoder.beginRenderPass(this._renderPassDescriptor);
            this.drawables.forEach((drawable) => {
                drawable.draw(this._passEncoder, this._cameraProjectionBO);
            })
            this.gizmos.forEach((gizmo) => {
                gizmo.draw(this._passEncoder, this._cameraProjectionBO);
            })

            this._passEncoder.end();
            device.queue.submit([this._commandEncoder.finish()]);

            this.popErrorScopes();
        }
        else {
            console.warn("Renderer: Draw(): Device is still loading...");
        }
    }

    private createBoundingBox(boundingBoxParentDrawable: Drawable): Drawable {
        var boundingBoxVertecies = findBoundingBoxVertexCoordinates(boundingBoxParentDrawable);
        const boundingBoxRenderPipeline = generateRenderPipeline({
            device: device,
            vertexShaderCode: WireframeShaderResources.getInstance().vertexCode,
            fragmentShaderCode: WireframeShaderResources.getInstance().fragmentCode,
            topology: ObjectTopology.LINE_LIST
        });
        var boundingBox = new Drawable({
            _cameraProjectionBO: this._cameraProjectionBO,
            _vertecies: boundingBoxVertecies,
            _lines: BOUNDING_BOX_FACE_INDEXES,
            _renderPipeline: boundingBoxRenderPipeline
        }, boundingBoxParentDrawable.Object);

        return boundingBox;
    }

    private createDrawablesFromSceneObjects() {
        var activeScene = this.scenes[this.activeSceneIdx];
        var activeSceneObjects = activeScene.Objects;

        if (activeSceneObjects) {
            activeSceneObjects.forEach((object) => {
                this._rendererTypesAndCounts.has(object.Type) ?
                    this._rendererTypesAndCounts.set(object.Type, this._rendererTypesAndCounts.get(object.Type) + 1) :
                    this._rendererTypesAndCounts.set(object.Type, 1);
            });
            this._rendererTypesAndCounts.forEach((value, key) => {
                var objectTypeArray: McsObject[] = [];

                activeSceneObjects.forEach((object) => {
                    if (object.Type === value) {
                        objectTypeArray.push(object);
                    }
                })

                objectTypeArray.forEach((object) => {

                })
                //iterate trough objectTypeArray and generate its instanced BO
                //we have: 
                // --object_type
                // --object_type_count
                // --object_of_type_array

                //we need:
                // --bo with the length object_type_count containing instanced copies of object
                // change with simple for

            });

            activeSceneObjects.forEach((object) => {
                var drawableRenderPipeline: GPURenderPipeline;
                var facesIndexes: IFace[];
                var vertexArray: IVertex[];
                // transform to drawables
                switch (object.Type) {
                    case DrawableObjectType.CELL: {
                        var cellShaderResources = CellShaderResources.getInstance();

                        drawableRenderPipeline = generateRenderPipeline({
                            device: device,
                            vertexShaderCode: CellShaderResources.getInstance().VertexCode,
                            fragmentShaderCode: CellShaderResources.getInstance().FragmentCode,
                            topology: ObjectTopology.TRIANGLE_LIST
                        })
                        vertexArray = cellShaderResources.VertexArray;
                        break;
                    }
                    case DrawableObjectType.IMPORTED: {
                        drawableRenderPipeline = generateRenderPipeline({
                            device: device,
                            vertexShaderCode: SuzanneShaderResources.getInstance().vertexCode,
                            fragmentShaderCode: SuzanneShaderResources.getInstance().fragmentCode,
                            topology: ObjectTopology.TRIANGLE_LIST
                        });
                        vertexArray = SuzanneShaderResources.getInstance().vertexArray;
                        facesIndexes = SuzanneShaderResources.getInstance().faces;
                        break;
                    }
                    case DrawableObjectType.NOT_SET: {
                        console.error(`Renderer: createDrawableFromSceneObjects(): Object type not set. ${object}`);
                        break;
                    }
                    default: {
                        break;
                    }
                }

                var currentDrawable = new Drawable({
                    _cameraProjectionBO: this._cameraProjectionBO,
                    _vertecies: vertexArray,
                    _faces: facesIndexes ? facesIndexes : null,
                    _renderPipeline: drawableRenderPipeline
                }, object);

                this.drawables.push(currentDrawable);
                this.gizmos.push(this.createBoundingBox(currentDrawable));
            });
        }
    }
}