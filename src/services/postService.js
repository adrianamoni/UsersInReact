import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "posts";

export function getPosts() {
  return http.get(apiEndpoint);
}
