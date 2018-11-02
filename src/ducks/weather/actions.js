import { createActions } from "redux-actions";

export const { getWeatherRequest } = createActions("GET_WEATHER_REQUEST");
export const { getWeatherSuccess } = createActions("GET_WEATHER_SUCCESS");
export const { getWeatherError } = createActions("GET_WEATHER_ERROR");
