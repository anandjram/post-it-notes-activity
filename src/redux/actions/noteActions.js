import * as types from "./actionTypes";
import * as notesApi from "../../api/notesApi";

export function loadNotesSuccess(notes) {
  return { type: types.LOAD_NOTES_SUCCESS, notes };
}

export function createNoteSuccess(note) {
  return { type: types.CREATE_NOTE_SUCCESS, note };
}

export function loadNotes() {
  return function (dispatch) {
    return notesApi
      .getNotes()
      .then((notes) => {
        dispatch(loadNotesSuccess(notes));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function saveNote(note) {
  return function (dispatch) {
    return notesApi
      .saveNote(note)
      .then((savedNote) => dispatch(createNoteSuccess(savedNote)))
      .catch((error) => {
        throw error;
      });
  };
}
