import { User } from "../models/User";

export class UserForm {
  constructor(public parent: Element, public user: User) {}

  eventsMap(): { [key: string]: () => void } {
    return {
      "click:button": this.onClickButton,
    };
  }

  onClickButton(): void {
    console.log("hi there!");
  }

  template(): string {
    return `
    <div>
      <h1>User Form</h1>
      <div>User ID: ${this.user.get("id")}</div>
      <div>User Name: ${this.user.get("name")}</div>
      <div>User Age: ${this.user.get("age")}</div>

      <button>click me</button>
      <input />
    </div>
    `;
  }

  private bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();
    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(":");
      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  render(): void {
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.parent.append(templateElement.content as DocumentFragment);
  }
}
