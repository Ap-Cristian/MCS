import { Drawable } from "../base-classes/drawable";
import { McsObj, McsObject } from "../base-classes/objectBase";

export enum CanvasLayers {
    RENDER_CANVAS,
    FRAMERATE_CANVAS
}

export enum ObjectTopology {
    POINT_LIST = 'point-list',
    TRIANGLE_LIST = 'triangle-list',
    LINE_STRIP = 'line-strip',
    LINE_LIST = 'line-list',
    TRIANGLE_STRIP = 'triangle-strip'
}

export enum ShaderType {
    VERTEX,
    FRAGMENT
}

export enum DrawableObjectType {
    CELL,
    IMPORTED,
    GIZMO,
    NOT_SET
}
export interface ILine {
    startVrtIndex: number,
    endVrtIndex: number
}
export interface RenderPipelineArgs {
    vertexShaderCode: string,
    fragmentShaderCode: string,
    topology: ObjectTopology,
    device: GPUDevice
}

export function depthTextureView(device: GPUDevice, canvas: HTMLCanvasElement): GPUTextureView {
    return device.createTexture({
        size: [
            canvas.clientWidth * window.devicePixelRatio,
            canvas.clientHeight * window.devicePixelRatio,
        ],
        format: 'depth24plus-stencil8',
        usage: GPUTextureUsage.RENDER_ATTACHMENT,
    }).createView();
}

export function createRenderPassDescriptor(textureView: GPUTextureView): GPURenderPassDescriptor {
    return {
        colorAttachments: [
            {
                view: undefined, // Assigned later

                clearValue: { r: 0.1, g: 0.1, b: 0.1, a: 1.0 },
                loadOp: 'clear',
                storeOp: 'store',
            },
        ],
        depthStencilAttachment: {
            view: textureView,
            depthLoadOp: 'clear',
            depthClearValue: 1.0,
            depthStoreOp: 'store',
            stencilLoadOp: 'clear',
            stencilClearValue: 0,
            stencilStoreOp: 'store',
        },
    } as GPURenderPassDescriptor;
}

function outputShaderCompIssues(compilationMessages: Readonly<GPUCompilationMessage[]>, shaderType: ShaderType) {
    if (compilationMessages.length > 0) {
        switch (shaderType) {
            case ShaderType.FRAGMENT:
                console.error("Faulty fragment shader: ");
                break;
            case ShaderType.VERTEX:
                console.error("Faulty vertex shader: ");
                break;
            default:
                return;
        }

        compilationMessages.forEach((entry) => {
            console.error(entry.message)
        })
    }
}

export function generateRenderPipeline(arg: RenderPipelineArgs): GPURenderPipeline | null {
    if (arg.device) {
        const vertexShaderModule = arg.device.createShaderModule({
            code: arg.vertexShaderCode
        });
        const fragmentShaderModule = arg.device.createShaderModule({
            code: arg.fragmentShaderCode
        });

        var vertexCompilationInfo = vertexShaderModule.getCompilationInfo();
        var fragmentCompilationInfo = fragmentShaderModule.getCompilationInfo();
        vertexCompilationInfo.then((info) => {
            outputShaderCompIssues(info.messages, ShaderType.VERTEX);
        });
        fragmentCompilationInfo.then((info) => {
            outputShaderCompIssues(info.messages, ShaderType.FRAGMENT);
        });

        const bytesPerVertex: number = (3 + 3 + 2);      // 3 for vert position, 2 for vert uv, 3 for vert norm
        const stride: number = bytesPerVertex * 4;

        return arg.device.createRenderPipeline({
            layout: 'auto',
            vertex: {
                module: vertexShaderModule,
                entryPoint: 'mainVertex',
                buffers: [
                    {
                        arrayStride: stride,
                        attributes: [
                            {
                                shaderLocation: 0,
                                offset: 0,
                                format: 'float32x4', // 3 (+ 1 padding)
                            } as GPUVertexAttribute,
                            {
                                shaderLocation: 1,
                                offset: 0,
                                format: 'float32x4',
                            } as GPUVertexAttribute,
                            {
                                shaderLocation: 2,
                                offset: 0,
                                format: 'float32x2'
                            } as GPUVertexAttribute
                        ],
                    },
                ],
            } as GPUVertexState,
            fragment: {
                module: fragmentShaderModule,
                entryPoint: 'mainFragment',
                targets: [
                    {
                        format: navigator.gpu.getPreferredCanvasFormat() as GPUTextureFormat,
                    },
                ],
            } as GPUFragmentState,
            primitive: {
                topology: arg.topology,
                cullMode: 'back',
            } as GPUPrimitiveState,
            depthStencil: {
                depthWriteEnabled: true,
                depthCompare: 'less',
                format: 'depth24plus-stencil8',
            } as GPUDepthStencilState,
        } as unknown as GPURenderPipelineDescriptor)
    }
    return null;
}

export function mergeDrawables(a: Drawable, b: Drawable, cameraBO: GPUBuffer): Drawable | null {
    let result: Drawable;
    var parentObjects: McsObject[] = [];

    if (a.RenderPipeline == b.RenderPipeline) {
        a.ParentObjects.forEach((parent) => {
            parentObjects.push(parent);
        });
        b.ParentObjects.forEach((parent) => {
            parentObjects.push(parent);
        })

        result = new Drawable(
            {
                _renderPipeline: a.RenderPipeline,
                _cameraProjectionBO: cameraBO,

            },
            parentObjects
        );
    }
    else {
        console.error("[render_utils] Objects have to be of the same type");
        return null;
    }

    return result
}

export function checkDeviceAvailability(device: GPUDevice): boolean {
    if (!device) {
        return false;
    }
    return true;
}