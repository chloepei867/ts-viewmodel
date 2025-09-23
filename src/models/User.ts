import { Eventing } from "./Eventing";
import { Sync } from "./Sync";
import { Attributes } from "./Attributes";
import { AxiosResponse } from "axios";

const rootUrl = "http://localhost:3000/users";

export interface UserProps {
  id?: string;
  name?: string;
  age?: number;
}

export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
  public attributes: Attributes<UserProps>;

  constructor(attrs: UserProps) {
    this.attributes = new Attributes(attrs);
  }

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

  set(update: UserProps) {
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
