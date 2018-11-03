import { handleActions } from "redux-actions";
import { combineReducers } from "redux";
import {
  getCitySuccess,
  getCityError,
  removeCitySuccess,
  setCityActive
} from "./actions";

const activeCity = handleActions(
  {
    [setCityActive.toString()]: (_state, action) => action.payload,
    [removeCitySuccess.toString()]: state => state
  },
  {}
);

const citiesList = handleActions(
  {
    [getCitySuccess.toString()]: (state, action) => [...state, action.payload],
    [getCityError.toString()]: () => false,
    [removeCitySuccess.toString()]: (state, action) =>
      state.filter(item => item.id !== action.payload)
  },
  []
);

export default combineReducers({ citiesList, activeCity });
