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
    [removeCitySuccess.toString()]: _state => ({})
  },
  {}
);

const citiesList = handleActions(
  {
    [getCitySuccess.toString()]: (state, action) => [...state, action.payload],
    [getCitiesSuccess.toString()]: (_state, action) => action.payload,
    [getCityError.toString()]: state => state,
    [removeCitySuccess.toString()]: (state, action) =>
      state.filter(item => item.name !== action.payload)
  },
  []
);

const error = handleActions(
  {
    [getCitySuccess.toString()]: _state => null,
    [getCityError.toString()]: (_state, action) => action.payload
  },
  null
);

export default combineReducers({ citiesList, activeCity, error });
