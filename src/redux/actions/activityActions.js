import * as types from "./actionTypes";
import * as activityApi from "../../api/activityApi";

export function loadActivitySuccess(activity) {
  return { type: types.LOAD_ACTIVITY_SUCCESS, activity };
}

export function loadActivity() {
  return function (dispatch) {
    return activityApi
      .getActivity()
      .then((activity) => {
        dispatch(loadActivitySuccess(activity));
      })
      .catch((error) => {
        throw error;
      });
  };
}
