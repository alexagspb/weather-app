import { takeEvery, put } from "redux-saga/effects";
import {
  getCityRequest,
  getCitySuccess,
  getCityError,
  removeCityRequest,
  removeCitySuccess,
  setCityActive
} from "../ducks/cities";

export function* watchFetchCities() {
  yield takeEvery([getCityRequest, removeCityRequest], fetchCity);
}

function* fetchCity(action) {
  console.log("fetchCity");
  console.log(action);
  if (action.type === getCityRequest().type) {
    const {
      city: { id, name },
      list
    } = yield fetch(
      `http://api.openweathermap.org/data/2.5/forecast/daily?q=${
        action.payload
      }&type=accurate&APPID=e539b3dcdce62f43d0c9eac4ff2b6ab4&cnt=5`
    ).then(res => res.json());
    yield put(getCitySuccess({ id, name, list }));
    yield put(setCityActive({ id }));
  }
  if (action.type === removeCityRequest().type) {
    yield put(removeCitySuccess(action.payload));
    console.log(action.payload);
  }
}
