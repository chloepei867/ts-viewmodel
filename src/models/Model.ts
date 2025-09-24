import axios, { AxiosPromise, AxiosResponse } from "axios";

interface ModelAttributes<T> {
  get<K extends keyof T>(key: K): T[K];
  set(update: T): void;
  getAll(): T;
}

interface Sync<T> {
  fetch(id: number): AxiosPromise<T>;
  save(data: T): AxiosPromise<T>;
}

interface Events {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

export interface hasId {
  id?: number;
}

export class Model<T extends hasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>
  ) {}

  // on = this.events.on;
  // trigger = this.events.trigger;
  // get = this.attributes.get;

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    // console.log("get method is called", this.attributes);
    return this.attributes.get;
  }

  set(update: T) {
    this.attributes.set(update);
    this.events.trigger("change");
  }

  // fetch return Promise<void>
  async fetch(): Promise<void> {
    const id = this.attributes.get("id");
    if (id === undefined) {
      throw new Error("Cannot fetch without an id.");
      // return Promise.reject(new Error("Cannot fetch without an id."));
    }
    // return this.sync.fetch(id).then((response: AxiosResponse): void => {
    //   this.set(response.data);
    // });
    const response: AxiosResponse = await this.sync.fetch(id);
    this.set(response.data);
  }

  async save(): Promise<void> {
    const response: AxiosResponse = await this.sync.save(
      this.attributes.getAll()
    );
    this.trigger("save");
  }
}
