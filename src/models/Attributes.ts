export class Attributes<T> {
  constructor(private data: T) {}
  get = <K extends keyof T>(key: K): T[K] => {
    // console.log(
    //   "attributes get method is called",
    //   key,
    //   this.data,
    //   "->",
    //   this.data[key]
    // );

    return this.data[key];
  };

  set = (update: T): void => {
    Object.assign(this.data as object, update);
  };

  getAll(): T {
    return this.data;
  }
}
