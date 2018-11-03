import { handleActions } from "redux-actions";
// import { combineReducers } from "redux";
import { setCityActive, removeCitySuccess } from "./actions";

const active = handleActions(
  {
    [setCityActive.toString()]: (_state, action) => ({
      activeId: action.payload
    }),
    [removeCitySuccess.toString()]: (_state, action) => ({ activeId: null })
  },
  null
);

export default active;
// export default combineReducers({ active });
