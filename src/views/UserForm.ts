import { User } from "../models/User";
import { View } from "./View";
import { UserProps } from "../models/User";

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      // "click:button": this.onClickButton,
      "click:.set-age": () => this.onClickSetAge(),
      "click:.set-name": () => this.onClickSetName(),
      "click:.save-model": () => this.onClickSave(),
    };
  }

  onClickSave(): void {
    console.log("user was saved.");
    this.model.save();
  }

  onClickSetName(): void {
    const input = this.parent.querySelector("input");
    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  }

  onClickSetAge() {
    // const randomAge = Math.floor(Math.random() * 100);
    // console.log("model", this.model);
    // this.model.set({ ...this.model, age: randomAge });
    // console.log("clicked");
    // console.log("this in onClickSetAge", this);
    // console.log("this.model in onClickSetAge", this.model);
    this.model.setRandomAge();
  }

  onClickButton(): void {
    console.log("hi there!");
  }

  template(): string {
    return `
    <div>
      <input placeholder="${this.model.get("name")}"/>
      <button class="set-name">Change Name</button>
      <button class="set-age">Set Random Age</button>
      <button class="save-model">Save User</button>
    </div>
    `;
  }
}
