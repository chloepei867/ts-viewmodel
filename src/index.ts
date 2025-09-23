import axios, { AxiosResponse } from "axios";
import { User } from "./models/User";

const user = new User({
  name: "wendy",
  age: 45,
});

user.on("save", () => {
  console.log("data is saved");
});

user.save();
