import { CubeShaderService } from "./services/cube-shader-service";
import "./style.scss";

class NotNormalizedHexColor{
    R:number = 0;
    G:number = 0;
    B:number = 0;
    A:number = 0;
}

class GlInitialContext{
    private htmlCanvas:HTMLCanvasElement;
    private context:GPUCanvasContext;
    private gpu:GPU;
    private adapter:GPUAdapter;
    private device:GPUDevice;
    private canvasFormat:GPUTextureFormat;
    private comamndEncoder:GPUCommandEncoder;
    private pass:GPURenderPassEncoder;

    private cubeService:CubeShaderService = new CubeShaderService();


    // GPUCommandEncoder --> contains commands speciffic for GPU to execute. In other words, in order to send a set of instruction to the gpu,
    // they'll have to be of type GPUCommandEncoder.
    
    // next step is to use the encoder to begin a Render Pass. - Render passes are when all drawing operations in WebGPU happen.
    
    // watch out for async -> await on device/adapter request, webGPU doesnt like unintialized mem.

    constructor(){
        this.initVtxEng();
    }

    private normalizeHex(color:NotNormalizedHexColor):GPUColor{
        return {r: color.R / 255, g:color.G / 255, b:color.B / 255, a:color.A};
    }

    private async initVtxEng(){
        this.htmlCanvas = document.querySelector('canvas');
        if(this.htmlCanvas){
            console.log('[DEBUG] Found context canvas.  ');
            this.resizeContextToWindow();   
            window.addEventListener("resize", this.resizeContextToWindow);
            await this.initContext();

            this.canvasFormat = this.gpu.getPreferredCanvasFormat();
            this.context.configure({
                device: this.device,
                format: this.canvasFormat
            });
            this.comamndEncoder = this.device.createCommandEncoder();
            var clearColor:GPUColor = this.normalizeHex({R:0, G:29, B:46, A:1});
            var colorAtt:GPURenderPassColorAttachment = {
                view: this.context.getCurrentTexture().createView(),
                loadOp: "clear",
                clearValue: clearColor,
                storeOp: "store",
            };

            //draw()
            this.pass = this.comamndEncoder.beginRenderPass({
                colorAttachments: [colorAtt]
            });
            this.drawSq();

            this.pass.end();

            var commandBuffer: GPUCommandBuffer = this.comamndEncoder.finish();
            this.device.queue.submit([commandBuffer]);

        }
    }

    private async initContext():Promise<void> {
        if(navigator.gpu){
            console.log("[DEBUG] WebGPU is supported by your browser.");
            this.gpu = navigator.gpu;
            this.adapter = await this.gpu.requestAdapter();
            if (!this.adapter) {
                throw new Error("[ERR!] No appropriate GPUAdapter found.");
            }
            this.device = await this.adapter.requestDevice();
            if(!this.device){
                throw new Error("[ERR!] No appropriate GPUDevice found.");
            }
            this.context = this.htmlCanvas.getContext('webgpu');
        }
        else{
            console.log('[ERR!] Browser does not support webGPU.');
        }
    }

    private drawSq(): void {
        var vertices = new Float32Array([
            //   X,    Y,
            -0.8, -0.8, // Triangle 1 (Blue)
            0.8, -0.8,
            0.8, 0.8,

            -0.8, -0.8, // Triangle 2 (Red)
            0.8, 0.8,
            -0.8, 0.8,
        ]);
        var vertexBuffer = this.device.createBuffer({
            label: "Cell vertices",
            size: vertices.byteLength,
            usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
        });
        this.device.queue.writeBuffer(vertexBuffer, /*bufferOffset=*/0, vertices);

        var vertexAttribute:GPUVertexAttribute={
            format: "float32x2",
            offset: 0,
            shaderLocation: 0, // Position, see vertex shader
        }
        var vertexBufferLayout:GPUVertexBufferLayout = {
            arrayStride: 8,
            attributes: [vertexAttribute],
        };

        var cubeShaderModule = this.device.createShaderModule({
            label: "Cell shader",
            code: `
            @vertex
            fn vertexMain(@location(0) pos: vec2f) ->
              @builtin(position) vec4f {
              return vec4f(pos, 0, 1);
            }
        
            @fragment
            fn fragmentMain() -> @location(0) vec4f {
              return vec4f(1, 0, 0, 1);
            }
            `
        });

        var cellPipeline = this.device.createRenderPipeline({
            label: "Cell pipeline",
            layout: "auto",
            vertex: {
              module: cubeShaderModule,
              entryPoint: "vertexMain",
              buffers: [vertexBufferLayout]
            },
            fragment: {
              module: cubeShaderModule,
              entryPoint: "fragmentMain",
              targets: [{
                format: this.canvasFormat
              }]
            }
          });
        
        this.pass.setPipeline(cellPipeline);
        this.pass.setVertexBuffer(0, vertexBuffer);
        this.pass.draw(vertices.length / 2); // 6 vertices
    }


    private resizeContextToWindow():void {
        if(typeof(this.htmlCanvas) == 'undefined'){
            this.htmlCanvas = document.querySelector('canvas');
        }

        this.htmlCanvas.style.width = window.innerWidth.toString() + 'px';
        this.htmlCanvas.style.height = window.innerHeight.toString() + 'px';
    }
}

var initialContext = new GlInitialContext();