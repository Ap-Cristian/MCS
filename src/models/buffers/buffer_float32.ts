export class EqBufferF32 extends Float32Array {
    private _buff: GPUBuffer;
    private _device: GPUDevice;
    private _values: number[];

    constructor(device: GPUDevice, values: number[], usage: number, label: string) {
        super(values);
        this._device = device;
        this._values = values
        this._buff = this._device.createBuffer({
            size: this.length * this.BYTES_PER_ELEMENT,
            usage: usage,
            label: label
        })
        this.writeBuffer();
    }

    set Values(newValues: number[]) {
        //some validation here
        this.set(newValues, 0);
        this.writeBuffer();
    }

    get Values(): number[] {
        return this._values;
    }

    get Buffer(): GPUBuffer {
        return this._buff;
    }

    private writeBuffer() {
        this._device.queue.writeBuffer(
            this._buff,
            0,
            this.buffer,
            this.byteOffset,
            this.byteLength
        )
    }
}