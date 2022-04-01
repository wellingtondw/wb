import { AxiosResponse } from "axios";
import { all, takeLatest, call, put } from "redux-saga/effects";
import api from "../../../services/api";
import {
  loading,
  makeRequestFailure,
  makeRequestSuccess,
  modelRequest,
  modelRequestFailure,
  modelRequestSuccess,
  versionRequest,
  versionRequestFailure,
  versionRequestSuccess,
} from "./actions";
import { ActionTypes, IMake, IModel, IVersion } from "./types";

type ModelRequest = ReturnType<typeof modelRequest>;
type VersionRequest = ReturnType<typeof versionRequest>;

export function* handleGetMake() {
  try {
    yield put(loading());
    const { data }: AxiosResponse<IMake[]> = yield call(api.get, "Make");

    yield put(makeRequestSuccess(data));
  } catch (error) {
    yield put(makeRequestFailure());
  }
}

export function* handleGetModel({ payload }: ModelRequest) {
  const { makeId } = payload;
  try {
    yield put(loading());
    const { data }: AxiosResponse<IModel[]> = yield call(
      api.get,
      `Model?MakeID=${makeId}`
    );

    yield put(modelRequestSuccess(data));
  } catch (error) {
    yield put(modelRequestFailure());
  }
}

export function* handleGetVersion({ payload }: VersionRequest) {
  const { modelId } = payload;
  try {
    yield put(loading());
    const { data }: AxiosResponse<IVersion[]> = yield call(
      api.get,
      `Version?ModelID=${modelId}`
    );

    yield put(versionRequestSuccess(data));
  } catch (error) {
    yield put(versionRequestFailure());
  }
}

export default all([
  takeLatest(ActionTypes.makeRequest, handleGetMake),
  takeLatest(ActionTypes.modelRequest, handleGetModel),
  takeLatest(ActionTypes.versionRequest, handleGetVersion),
]);
