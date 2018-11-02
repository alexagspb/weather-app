import { combineReducers } from "redux";
import weather from "./weather";
import activate from "./activate";
// import weather from "./weather";

export default combineReducers({ weather, activate });
