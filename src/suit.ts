export class Suit {
  private _name: string;
  get name() {
    return this._name;
  }
  constructor(name: string) {
    this._name = name;
  }
}
