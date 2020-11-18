import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function activityReducer(state = initialState.activity, action) {
  switch (action.type) {
    case types.LOAD_ACTIVITY_SUCCESS:
      return action.activity;
    default:
      return state;
  }
}
