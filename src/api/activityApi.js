import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/activity/";

export function getActivity() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
