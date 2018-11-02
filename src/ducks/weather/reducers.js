import { handleActions } from "redux-actions";
import { combineReducers } from "redux";
import {
  getWeatherRequest,
  getWeatherSuccess,
  getWeatherError
} from "./actions";

const cities = handleActions(
  {
    [getWeatherRequest.toString()]: state => [...state],
    [getWeatherSuccess.toString()]: (state, action) => [
      ...state,
      action.payload
    ],
    [getWeatherError.toString()]: () => false
  },
  []
);

export default combineReducers({ cities });
