import { createActions } from "redux-actions";

export const { getCityRequest } = createActions("GET_CITY_REQUEST");
export const { updateCityRequest } = createActions("UPDATE_CITY_REQUEST");
export const { selectCityRequest } = createActions("SELECT_CITY_REQUEST");
export const { getCitySuccess } = createActions("GET_CITY_SUCCESS");
export const { getCityError } = createActions("GET_CITY_ERROR");
export const { removeCityRequest } = createActions("REMOVE_CITY_REQUEST");
export const { removeCitySuccess } = createActions("REMOVE_CITY_SUCCESS");
export const { setCityActive } = createActions("SET_CITY_ACTIVE");
