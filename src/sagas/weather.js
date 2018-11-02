import { takeEvery, put } from "redux-saga/effects";
import {
  getWeatherRequest,
  getWeatherSuccess,
  getWeatherError,
  removeWeatherRequest,
  removeWeatherSuccess,
  setWeatherActive
} from "../ducks/weather";

export function* watchFetchProducts() {
  yield takeEvery([getWeatherRequest, removeWeatherRequest], fetchWeather);
}

function* fetchWeather(action) {
  console.log("fetchWeather");
  console.log(action);
  if (action.type === getWeatherRequest().type) {
    const {
      city: { id, name },
      list
    } = yield fetch(
      `http://api.openweathermap.org/data/2.5/forecast/daily?q=${
        action.payload
      }&type=accurate&APPID=e539b3dcdce62f43d0c9eac4ff2b6ab4&cnt=5`
    ).then(res => res.json());
    yield put(getWeatherSuccess({ id, name, list }));
    yield put(setWeatherActive({ id }));
  }
  if (action.type === removeWeatherRequest().type) {
    yield put(removeWeatherSuccess(action.payload));
    console.log(action.payload);
  }
}
