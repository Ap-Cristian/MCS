export enum CanvasLayers {
    RENDER_CANVAS,
    FRAMERATE_CANVAS
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