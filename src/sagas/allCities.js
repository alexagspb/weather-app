import { takeEvery, put, call } from "redux-saga/effects";
import {
  getCityRequest,
  getCitySuccess,
  getCityError,
  removeCityRequest,
  removeCitySuccess,
  setCityActive
} from "../ducks/cities";

import {
  getCityFromLocalStorage,
  setCityToLocalStorage,
  removeCityFromLocalStorage
} from "../localstorage";

export function* watchFetchAllCities() {
  yield takeEvery([getCityRequest, removeCityRequest], fetchAllCities);
}

function* fetchAllCities(action) {
  // if (action.type === getAllCitiesRequest().type) {
  // let cities = getAllCitiesFromLocalStorage(action.payload);
  //   let id, name, list;
  //   if (existCity) {
  //     const { id, name, list } = existCity;
  //     yield put(setCityActive({ id, name, list }));
  //   } else {
  //     ({
  //       city: { id, name },
  //       list
  //     } = yield fetch(
  //       `http://api.openweathermap.org/data/2.5/forecast/daily?q=${
  //         action.payload
  //       }&type=accurate&APPID=e539b3dcdce62f43d0c9eac4ff2b6ab4&cnt=5`
  //     ).then(res => res.json()));
  //     yield call(setCityToLocalStorage, { id, name, list });
  //   }
  //   yield put(getCitySuccess({ id, name, list }));
  //   yield put(setCityActive({ id, name, list }));
  // }
  // if (action.type === removeCityRequest().type) {
  //   yield put(removeCitySuccess(action.payload));
  //   yield call(removeCityFromLocalStorage, action.payload);
  // }
}
