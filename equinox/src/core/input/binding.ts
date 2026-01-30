export class Binding {
  private callback: (() => void) | undefined;
  private keys: string[];

  public get Keys(): string[] {
    return this.keys;
  }

  public CheckIfPressed(pressedKeys: Map<string, number>): boolean {
    let keys = Array.from(pressedKeys.keys());

    if (keys.length != this.keys.length) return false;

    if (keys.every((key: string): boolean => this.keys.includes(key))) {
      this.pressed();
      return true;
    }
    return false;
  }

  private pressed() {
    if (this.callback != undefined) {
      this.callback();
    }
  }

  constructor(keys: Array<string>, callback: (() => void) | undefined) {
    this.keys = keys;
    this.callback = callback;
  }
}
