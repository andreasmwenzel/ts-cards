export class Rank {
  private _name: string;
  get name() {
    return this._name;
  }
  constructor(name: string) {
    this._name = name;
  }
}
