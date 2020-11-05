import { makeAutoObservable } from "mobx"

class Num {
  constructor() {
    makeAutoObservable(this);
  }
  num = 0;
  
  addNum() {
    this.num = this.num + 1;
  }
  subNum() {
    if (this.num !== 0) {
      this.num = this.num - 1;
    }
  }
}

export default new Num();
