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
  //При выборе города из списка просто достаем его из LocalStorage
  if (action.type === selectCityRequest().type) {
    const { id, name, list } = getCityFromLocalStorage(action.payload);
    yield put(setCityActive({ id, name, list }));
  }

  if (
    action.type === getCityRequest().type ||
    action.type === updateCityRequest().type
  ) {
    let id, name, list;
    //При запросе нового города или запросе обновления получаем его по api по имени или координатам
    try {
      ({
        city: { id, name },
        list
      } = action.payload.location
        ? yield api.fetchForecastByLocation(action.payload)
        : yield api.fetchForecastByCoords(action.payload));

      yield put(removeCitySuccess(name));
      yield call(removeCityFromLocalStorage, name);

      yield put(getCitySuccess({ id, name, list }));
      yield call(setCityToLocalStorage, { id, name, list });
    } catch (error) {
      //Обработка ошибок
      yield put(getCityError("Укажите корректный город"));
    }
    //Устанавливаем активный город
    yield put(setCityActive({ id, name, list }));
  }
  //Удаляем город
  if (action.type === removeCityRequest().type) {
    yield put(removeCitySuccess(action.payload));
    yield call(removeCityFromLocalStorage, action.payload);
  }
}
