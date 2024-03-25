import { CellShaderContainer } from "../../containers/cell-shader.container";
import { device } from "../../renderer";

export class CellRenderPipeline{
    private readonly perVertex:number = (3 + 3 + 2);      // 3 for position, 3 for normal, 2 for uv, 3 for color
    private stride:number = this.perVertex * 4;
    private cellShaderContainer = CellShaderContainer.getInstance();
    public Pipeline:GPURenderPipeline;

    private constructor(){
        this.Pipeline = device.createRenderPipeline({
            layout: 'auto',
            vertex: {
                module: device.createShaderModule({ code: this.cellShaderContainer.vertexCode }),
                entryPoint: 'main',
                buffers: [
                    {
                        arrayStride: this.stride, // ( 3 (pos) + 3 (norm) + 2 (uv) ) * 4 bytes,
                        attributes: [
                            {
                                // position
                                shaderLocation: 0,
                                offset: 0,
                                format: 'float32x3',
                            },
                            {
                                // norm
                                shaderLocation: 1,
                                offset: 3 * 4,
                                format: 'float32x3',
                            },
                            {
                                // uv
                                shaderLocation: 2,
                                offset: (3 + 3) * 4,
                                format: 'float32x2',
                            },
                        ],
                    } as GPUVertexBufferLayout,
                ],
            },
            fragment: {
                module: device.createShaderModule({ code: this.cellShaderContainer.fragmentCode }),
                entryPoint: 'main',
                targets: [
                    {
                        format: 'bgra8unorm' as GPUTextureFormat,
                    },
                ],
            },
            primitive: {
                topology: 'triangle-list',
                cullMode: 'back',
            },
            // Enable depth testing so that the fragment closest to the camera
            // is rendered in front.
            depthStencil: {
                depthWriteEnabled: true,
                depthCompare: 'less',
                format: 'depth24plus-stencil8',
            },
        } as unknown as GPURenderPipelineDescriptor);
    }

    public static instance:CellRenderPipeline;
    public static GetInstance():CellRenderPipeline{
        if(this.instance != null){
            return this.instance;
        }
        this.instance = new CellRenderPipeline();
        return this.instance;
    }
}