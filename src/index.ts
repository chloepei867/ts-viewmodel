import axios, { AxiosResponse } from "axios";
import { User, UserProps } from "./models/User";
import { Collection } from "./models/Collection";
import { UserForm } from "./views/UserForm";

const user = User.buildUser({
  id: 1,
  name: "bob",
  age: 23,
});

const root = document.getElementById("root");

if (root) {
  const userForm = new UserForm(root, user);
  userForm.render();
} else {
  throw new Error("root element not found!");
}

// const userRootUrl = "http://localhost:3000/users";

// const userCollections = User.buildUserCollection();

// userCollections.on("change", () => {
//   console.log("collection has changed");
// });

// userCollections.fetch().then((response) => {
//   console.log(userCollections.models);
// });
