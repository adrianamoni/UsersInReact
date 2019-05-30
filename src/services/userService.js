import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "users";

function userUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getUsers() {
  return http.get(apiEndpoint);
}

export function getUser(userId) {
  return http.get(userUrl(userId));
}
