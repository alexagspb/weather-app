import { handleActions } from "redux-actions";
// import { combineReducers } from "redux";
import {
  getCityRequest,
  getCitySuccess,
  getCityError,
  setCityActive
} from "./actions";

const loading = handleActions(
  {
    [getCityRequest.toString()]: () => true,
    [getCitySuccess.toString()]: () => false,
    [getCityError.toString()]: () => false,
    [setCityActive.toString()]: () => false
  },
  false
);

export default loading;
// export default combineReducers({ loading });
