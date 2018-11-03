import { fork } from "redux-saga/effects";
import { watchFetchCities } from "./cities";

export default function*() {
  yield fork(watchFetchCities);
}
