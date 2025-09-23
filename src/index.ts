import axios, { AxiosResponse } from "axios";
import { User } from "./models/User";

const user = User.buildUser({
  id: 1,
  name: "Adolf",
  age: 45,
});

user.on("save", () => {
  console.log("data is saved");
});

// user.save();
// console.log(user.get("name"));
// console.log(user.get("age"));

user.fetch();
console.log(user);
user.trigger("save");
