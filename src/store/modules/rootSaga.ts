import { all } from "redux-saga/effects";

import vehicle from "./vehicle/sagas";

export default function* rootSaga() {
  yield all([vehicle]);
}
