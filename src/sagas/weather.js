import { takeEvery, put } from "redux-saga/effects";
import { getWeatherRequest, getWeatherSuccess } from "../ducks/weather";

export function* watchFetchProducts() {
  yield takeEvery(getWeatherRequest.toString(), fetchWeather);
}

function* fetchWeather() {
  console.log("fetchWeather");
  const {
    city: { id, name },
    list
  } = yield fetch(
    "http://api.openweathermap.org/data/2.5/forecast/daily?q=belgorod&type=accurate&APPID=e539b3dcdce62f43d0c9eac4ff2b6ab4&cnt=5"
  ).then(res => res.json());
  //   const { city, list: weather } = data;
  //   console.log(data);
  console.log(id, name);
  console.log(list);
  yield put(getWeatherSuccess({ id, name, list }));
}
