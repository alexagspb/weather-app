import { fork } from "redux-saga/effects";
import { watchFetchCity } from "./city";
import { watchFetchCities } from "./cities";

export default function*() {
  yield fork(watchFetchCities);
  yield fork(watchFetchCity);
}
