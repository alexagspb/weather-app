import { combineReducers } from "redux";
import loading from "./loading";
import active from "./active";
import cities from "./cities";

export default combineReducers({ loading, active, cities });
