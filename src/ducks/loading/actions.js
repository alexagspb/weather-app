import { createActions } from "redux-actions";

export const { getCityRequest } = createActions("GET_CITY_REQUEST");
export const { getCitySuccess } = createActions("GET_CITY_SUCCESS");
export const { getCityError } = createActions("GET_CITY_ERROR");
