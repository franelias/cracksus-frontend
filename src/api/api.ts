import axios, { AxiosResponse, Method } from "axios";

export interface JsonBody {
  [key: string]: any;
}

type Request = (url: string, body?: JsonBody) => Promise<AxiosResponse["data"]>;

interface APIInterface {
  get: Request;
  post: Request;
  put: Request;
  delete: Request;
}

const newRequest = async (url: string, method: Method, body?: JsonBody) => {
  return await axios({
    method: method,
    url: url,
    data: body,
  });
};

export const API: APIInterface = {
  get: async (url: string) => {
    return newRequest(url, "get");
  },

  post: async (url: string, body?: JsonBody) => {
    return newRequest(url, "post", body);
  },

  put: async (url: string, body?: JsonBody) => {
    return newRequest(url, "put", body);
  },

  delete: async (url: string, body?: JsonBody) => {
    return newRequest(url, "delete", body);
  },
};
