import { fork } from "redux-saga/effects";
import { watchFetchCity } from "./city";
import { watchFetchAllCities } from "./allCities";

export default function*() {
  yield fork(watchFetchAllCities);
  yield fork(watchFetchCity);
}
