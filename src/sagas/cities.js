import { takeEvery, put, call } from "redux-saga/effects";
import { getCitiesRequest, getCitiesSuccess } from "../ducks/cities";

import { getCitiesFromLocalStorage } from "../localstorage";

export function* watchFetchCities() {
  yield takeEvery([getCitiesRequest, getCitiesSuccess], fetchCities);
}

function* fetchCities(action) {
  if (action.type === getCitiesRequest().type) {
    let cities = getCitiesFromLocalStorage();

    let citiesArr = [];

    for (let name in cities) {
      citiesArr.push({
        name: name,
        id: cities[name].id,
        list: cities[name].list
      });
    }

    yield put(getCitiesSuccess(citiesArr));
  }
}
