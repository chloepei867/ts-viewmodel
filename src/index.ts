import axios, { AxiosResponse } from "axios";
import { User, UserProps } from "./models/User";
import { Collection } from "./models/Collection";
import { UserForm } from "./views/UserForm";
import { UserEdit } from "./views/UserEdit";
import { UserList } from "./views/UserList";

//render user list
const deserialize = (jsonData: UserProps): User => {
  return User.buildUser(jsonData);
};
const users = new Collection("http://localhost:3000/users", deserialize);
users.fetch().then((res) => {
  const root = document.getElementById("root");

  if (root) {
    const userList = new UserList(root, users);
    userList.render();
  }
});
