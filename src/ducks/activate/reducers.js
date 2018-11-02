import { handleActions } from "redux-actions";
import { combineReducers } from "redux";
import { setWeatherActive, removeWeatherSuccess } from "./actions";

const activate = handleActions(
  {
    [setWeatherActive.toString()]: (_state, action) => ({
      activeId: action.payload
    }),
    [removeWeatherSuccess.toString()]: (state, action) => ({ activeId: null })
  },
  null
);

export default combineReducers({ activate });
