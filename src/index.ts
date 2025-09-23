import axios, { AxiosResponse } from "axios";
import { User, UserProps } from "./models/User";
import { Collection } from "./models/Collection";

const userRootUrl = "http://localhost:3000/users";

const userCollections = User.buildUserCollection();

userCollections.on("change", () => {
  console.log("collection has changed");
});

userCollections.fetch().then((response) => {
  console.log(userCollections.models);
});
