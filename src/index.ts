import axios, { AxiosResponse } from "axios";
import { User, UserProps } from "./models/User";
import { Collection } from "./models/Collection";

const userRootUrl = "http://localhost:3000/users";

const collections = new Collection<User, UserProps>(
  userRootUrl,
  User.buildUser
);

collections.on("change", () => {
  console.log("collection has changed");
});

collections.fetch().then((response) => {
  console.log(collections.models);
});
