// import { User, UserProps } from "./User";
import { Eventing } from "./Eventing";
import axios, { AxiosPromise, AxiosResponse } from "axios";

export class Collection<T, K> {
  models: T[] = [];
  events: Eventing = new Eventing();

  constructor(public rootUrl: string, public deserialize: (jsonData: K) => T) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  async fetch(): Promise<void> {
    const response: AxiosResponse = await axios.get(this.rootUrl);
    response.data.map((user: K) => {
      // console.log("user", user);
      this.models.push(this.deserialize(user));
      // console.log(this.models);
      this.trigger("change");
    });
  }
}
