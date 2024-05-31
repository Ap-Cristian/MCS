export class FpsCounter{
    private lastCalledTime:number;
    private delta:number;

    public SkipFrame:boolean = true;
    public Fps:number;

    public start(){
        this.lastCalledTime = Date.now();
        this.Fps = 0;
        this.SkipFrame = false;
    }
    public frame(){
        if(this.SkipFrame == true){
            console.log("[FPSCounter] Update called before start!")
            return;
        }
        this.delta = (Date.now() - this.lastCalledTime) / 1000;
        this.lastCalledTime = Date.now();
        this.Fps = 1/this.delta;
    }
    constructor(){

    }
}