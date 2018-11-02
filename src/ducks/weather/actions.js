import { createActions } from "redux-actions";

export const { getWeatherRequest } = createActions("GET_WEATHER_REQUEST");
export const { getWeatherSuccess } = createActions("GET_WEATHER_SUCCESS");
export const { getWeatherError } = createActions("GET_WEATHER_ERROR");
export const { removeWeatherRequest } = createActions("REMOVE_WEATHER_REQUEST");
export const { removeWeatherSuccess } = createActions("REMOVE_WEATHER_SUCCESS");
