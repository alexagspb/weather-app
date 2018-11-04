import { takeEvery, put, call } from "redux-saga/effects";
import {
  getCityRequest,
  getCitySuccess,
  updateCityRequest,
  getCityError,
  removeCityRequest,
  removeCitySuccess,
  selectCityRequest,
  setCityActive
} from "../ducks/cities";

import {
  getCityFromLocalStorage,
  setCityToLocalStorage,
  removeCityFromLocalStorage
} from "../localstorage";

import api from "../api";

export function* watchFetchCity() {
  yield takeEvery(
    [getCityRequest, removeCityRequest, selectCityRequest, updateCityRequest],
    fetchCity
  );
}

function* fetchCity(action) {
  if (action.type === selectCityRequest().type) {
    const { id, name, list } = getCityFromLocalStorage(action.payload);
    yield put(setCityActive({ id, name, list }));
  }

  if (
    action.type === getCityRequest().type ||
    action.type === updateCityRequest().type
  ) {
    let existCity = getCityFromLocalStorage(action.payload);
    let id, name, list;

    if (existCity && action.type !== updateCityRequest().type) {
      ({ id, name, list } = existCity);
    } else {
      ({
        city: { id, name },
        list
      } = yield api.fetchForecast(action.payload));

      if (action.type === updateCityRequest().type) {
        yield put(removeCitySuccess(action.payload));
        yield call(removeCityFromLocalStorage, action.payload);
      }

      yield put(getCitySuccess({ id, name, list }));
      yield call(setCityToLocalStorage, { id, name, list });
    }

    yield put(setCityActive({ id, name, list }));
  }

  if (action.type === removeCityRequest().type) {
    yield put(removeCitySuccess(action.payload));
    yield call(removeCityFromLocalStorage, action.payload);
  }
}
