import { combineReducers } from "redux";
import loading from "./loading";
import cities from "./cities";

export default combineReducers({ loading, cities });
