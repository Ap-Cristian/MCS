import { Vec2 } from "wgpu-matrix";
import { Binding } from "./binding";

enum MOUSE_DOWN_BUTTONS {
  LEFT = 0,
  WHEEL = 1,
  RIGHT = 2,
}

export class InputHandler {
  private input: Map<string, number>;
  private bindings: Array<Binding> = [];
  private mousePos: Vec2 = [0, 0];
  private lastMousePos: Vec2 = [0, 0];
  private mouseWheel_deltaY: number = 0;

  public get MousePos(): Vec2 {
    return this.mousePos;
  }

  public get LastMousePos(): Vec2 {
    return this.lastMousePos;
  }

  public get MouseWheel_deltaY(): number {
    return this.mouseWheel_deltaY;
  }

  constructor(context: HTMLCanvasElement) {
    //keyboard attachment
    window.onkeydown = (ev) => this.kbKeyDownCallback(ev);
    window.onkeyup = (ev) => this.kbKeyUpCallback(ev);

    //mouse attachment
    context.onmousedown = (ev) => this.msDownCallback(ev);
    context.onmouseup = (ev) => this.msUpCallback(ev);
    context.onmousemove = (ev) => this.msMoveCallback(ev);
    context.onwheel = (ev) => this.msScrollCallback(ev);

    //required to disable right click menu context
    context.oncontextmenu = (ev) => {
      return false;
    };

    this.input = new Map<string, number>();
  }

  private checkBindings(): void {
    this.bindings.forEach((binding) => {
      if (binding.CheckIfPressed(this.input)) return;
    });
  }

  private kbKeyUpCallback(event: KeyboardEvent) {
    this.input.delete(event.key.toLowerCase());
    this.checkBindings();
  }

  private kbKeyDownCallback(event: KeyboardEvent) {
    this.input.set(event.key.toLowerCase(), 0);
    this.checkBindings();
  }

  private clickAndCheckBindings(button: string) {
    this.input.set(button, 0);
    this.checkBindings();
  }

  private clickUpAndCheckBindings(button: string) {
    this.input.delete(button);
    this.checkBindings();
  }

  private msDownCallback(event: MouseEvent) {
    switch (event.button) {
      case MOUSE_DOWN_BUTTONS.LEFT:
        this.clickAndCheckBindings("left_click");
        break;
      case MOUSE_DOWN_BUTTONS.WHEEL:
        this.clickAndCheckBindings("wheel_click");
        break;
      case MOUSE_DOWN_BUTTONS.RIGHT:
        this.clickAndCheckBindings("right_click");
        break;
      default:
        break;
    }
  }

  private msUpCallback(event: MouseEvent) {
    switch (event.button) {
      case MOUSE_DOWN_BUTTONS.LEFT:
        this.clickUpAndCheckBindings("left_click");
        break;
      case MOUSE_DOWN_BUTTONS.WHEEL:
        this.clickUpAndCheckBindings("wheel_click");
        break;
      case MOUSE_DOWN_BUTTONS.RIGHT:
        this.clickUpAndCheckBindings("right_click");
        break;
      default:
        break;
    }
  }

  private msMoveCallback(event: MouseEvent) {
    this.lastMousePos = this.mousePos;
    this.mousePos = [event.x, event.y];
    this.input.set("mouse_move", 0);
    this.checkBindings();
    this.input.delete("mouse_move");
  }

  private msScrollCallback(event: WheelEvent) {
    if (event.ctrlKey) {
      event.preventDefault();
      // block default scroll behaviour
    }
    this.mouseWheel_deltaY = event.deltaY;

    this.input.set("mouse_scroll", 0);
    this.checkBindings();
    this.input.delete("mouse_scroll");
  }

  public addBinding(b: Binding) {
    this.bindings.push(b);
  }
}
