import { handleActions } from "redux-actions";
import { combineReducers } from "redux";
import {
  getWeatherRequest,
  getWeatherSuccess,
  getWeatherError,
  removeWeatherSuccess
} from "./actions";

const cities = handleActions(
  {
    [getWeatherRequest.toString()]: state => [...state],
    [getWeatherSuccess.toString()]: (state, action) => [
      ...state,
      action.payload
    ],
    [getWeatherError.toString()]: () => false,
    [removeWeatherSuccess.toString()]: (state, action) =>
      state.filter(item => item.id !== action.payload)
  },
  []
);

export default combineReducers({ cities });
