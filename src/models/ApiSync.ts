import axios, { AxiosPromise, AxiosResponse } from "axios";
import { UserProps } from "./User";

interface hasId {
  id?: number;
}

export class ApiSync<T extends hasId> {
  constructor(public rootUrl: string) {}

  fetch = (id: number): AxiosPromise<T> => {
    return axios.get(`${this.rootUrl}/${id}`);
    // .then((response: AxiosResponse): void => {
    //   return response.data;
    // });
  };

  save = (data: T): AxiosPromise<T> => {
    const { id } = data;

    if (id) {
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      return axios.post(this.rootUrl, data);
    }
  };
}
