import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/notes/";

export function getNotes() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function saveNote(note) {
  return fetch(baseUrl, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(note),
  })
    .then(handleResponse)
    .catch(handleError);
}
