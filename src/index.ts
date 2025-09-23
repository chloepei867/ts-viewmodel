import axios, { AxiosResponse } from "axios";
import { User, UserProps } from "./models/User";
import { Collection } from "./models/Collection";
import { UserForm } from "./views/UserForm";

const userForm = new UserForm(document.getElementById("root")!);
userForm.render();

// const userRootUrl = "http://localhost:3000/users";

// const userCollections = User.buildUserCollection();

// userCollections.on("change", () => {
//   console.log("collection has changed");
// });

// userCollections.fetch().then((response) => {
//   console.log(userCollections.models);
// });
