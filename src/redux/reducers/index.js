import { combineReducers } from "redux";
import notes from "./notesReducer";
import activity from "./activityReducer";

const rootReducer = combineReducers({
  notes,
  activity,
});

export default rootReducer;
