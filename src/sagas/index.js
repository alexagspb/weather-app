import { fork } from "redux-saga/effects";
import { watchFetchProducts } from "./weather";

export default function*() {
  yield fork(watchFetchProducts);
}
