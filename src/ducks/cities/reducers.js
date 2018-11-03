import { handleActions } from "redux-actions";
// import { combineReducers } from "redux";
import { getCitySuccess, getCityError, removeCitySuccess } from "./actions";

const cities = handleActions(
  {
    [getCitySuccess.toString()]: (state, action) => [...state, action.payload],
    [getCityError.toString()]: () => false,
    [removeCitySuccess.toString()]: (state, action) =>
      state.filter(item => item.id !== action.payload)
  },
  []
);

export default cities;
// export default combineReducers({ cities });
