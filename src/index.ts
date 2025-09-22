import axios, { AxiosResponse } from "axios";
import { User } from "./models/User";

// axios.post("http://localhost:3000/users", {
//   id: 123,
//   name: "alice",
//   age: 34,
// });

// axios
//   .get("http://localhost:3000/posts/1")
//   .then((response: AxiosResponse): void => {
//     console.log(response.data);
//   });

// const user = new User({ id: 123 });
// user.fetch();

// setTimeout(() => {
//   console.log(user);
// }, 4000);

const user = new User({
  name: "ddd",
  age: 11,
});

// user.events.on("click", () => {
//   console.log("clicked");
// });

// user.events.trigger("click");

user.sync.save({
  id: "qxNr2Rx",
  name: "zhangsan",
  age: 999,
});

user.sync.fetch(user.get("id")).then((response) => {
  console.log(response.data);
});
