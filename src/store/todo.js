import { observable, action, makeObservable, computed } from "mobx"

class Todo {
  constructor() {
    makeObservable(this, {
      list: observable,
      loading: observable,
      addItem: action,
      getList: action,
      toggle: action,
      delete: action,
      getLength: computed
    })
  }
  list = [];
  loading = false;

  get getLength() {
    return this.list.length;
  }
  async getList() {
    this.loading = true;
    const list = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([{
          val: '2121',
          complete: false,
        }])
        this.loading = false;
      }, 4000)
    });
    this.list = list;
  }
  addItem(item) {
    this.list = [ item, ...this.list ];
  }

  delete(idx) {
    this.list = this.list.filter((item, index) => {
      if (idx === index) {
        return false;
      }
      return true;
    })
  }

  toggle(idx) {
    this.list = this.list.map((item, index) => {
      if (idx === index) {
        item.complete = !item.complete;
      }
      return item;
    })
  }
}

export default new Todo();