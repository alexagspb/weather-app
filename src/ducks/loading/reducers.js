import { handleActions } from "redux-actions";
import { combineReducers } from "redux";
import {
  setWeatherActive,
  getWeatherSuccess,
  getWeatherError,
  removeWeatherSuccess
} from "./actions";

const cities = handleActions(
  {
    [setWeatherActive.toString()]: (state, action) => [
      ...state,
      { activeId: action.payload }
    ],
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
