import { handleActions } from "redux-actions";
import {
  getCityRequest,
  updateCityRequest,
  getCitySuccess,
  getCityError,
  setCityActive
} from "./actions";

const loading = handleActions(
  {
    [getCityRequest.toString()]: () => true,
    [updateCityRequest.toString()]: () => true,
    [getCitySuccess.toString()]: () => false,
    [getCityError.toString()]: () => false,
    [setCityActive.toString()]: () => false
  },
  false
);

export default loading;
