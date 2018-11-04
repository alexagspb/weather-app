import { handleActions } from "redux-actions";
import { combineReducers } from "redux";
import {
  getCitySuccess,
  getCitiesSuccess,
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
    [getCitiesSuccess.toString()]: (state, action) => action.payload,
    [getCityError.toString()]: () => false,
    [removeCitySuccess.toString()]: (state, action) =>
      state.filter(item => item.name !== action.payload)
  },
  []
);

export default combineReducers({ citiesList, activeCity });
