import { call } from "redux-saga/effects";
import { expectSaga } from "redux-saga-test-plan";
import { throwError } from "redux-saga-test-plan/providers";
import api from "../../../services/api";
import reducer, { INITIAL_STATE } from "./reducer";
import { handleGetMake, handleGetModel, handleGetVersion } from "./sagas";
import {
  loading,
  makeRequestFailure,
  makeRequestSuccess,
  modelRequest,
  modelRequestFailure,
  modelRequestSuccess,
  versionRequest,
  versionRequestSuccess,
} from "./actions";
import { IMake, IModel, IVersion } from "./types";

const initialState = INITIAL_STATE;

describe("VehicleSagas", () => {
  it("should be able to fetch make", () => {
    const fakeMake: IMake[] = [
      { ID: 1, Name: "Chevrolet" },
      { ID: 2, Name: "Honda" },
      { ID: 3, Name: "Ford" },
    ];

    return expectSaga(handleGetMake)
      .withReducer(reducer)
      .put(loading())
      .provide([[call(api.get, "Make"), { data: fakeMake }]])
      .dispatch(makeRequestSuccess(fakeMake))
      .hasFinalState({
        ...initialState,
        data: {
          ...initialState.data,
          make: fakeMake,
        },
        loading: false,
      })
      .run();
  });

  it("should be able to handle fetch make error", () => {
    const error = new Error("error");

    return expectSaga(handleGetMake)
      .withReducer(reducer)
      .put(loading())
      .provide([[call(api.get, "Make"), throwError(error)]])
      .dispatch(makeRequestFailure())
      .hasFinalState({
        ...initialState,
        loading: false,
        error: true,
      })
      .run();
  });

  it("should be able to fetch model", () => {
    const fakeModel: IModel[] = [
      { MakeID: 1, ID: 1, Name: "Agile" },
      { MakeID: 1, ID: 2, Name: "Astra" },
      { MakeID: 1, ID: 3, Name: "Onix" },
    ];

    return expectSaga(() => handleGetModel(modelRequest("1")))
      .withReducer(reducer)
      .put(loading())
      .provide([[call(api.get, "Model?MakeID=1"), { data: fakeModel }]])
      .dispatch(modelRequestSuccess(fakeModel))
      .hasFinalState({
        ...initialState,
        data: {
          ...initialState.data,
          model: fakeModel,
        },
        loading: false,
      })
      .run();
  });

  it("should be able to handle fetch model error", () => {
    const error = new Error("error");

    return expectSaga(() => handleGetModel(modelRequest("1")))
      .withReducer(reducer)
      .put(loading())
      .provide([[call(api.get, "Model?MakeID=1"), throwError(error)]])
      .dispatch(modelRequestFailure())
      .hasFinalState({
        ...initialState,
        loading: false,
        error: true,
      })
      .run();
  });

  it("should be able to fetch version", () => {
    const fakeVersion: IVersion[] = [
      { ModelID: 1, ID: 6, Name: "1.5 DX 16V FLEX 4P AUTOMÁTICO" },
      { ModelID: 1, ID: 7, Name: "1.5 LX 16V FLEX 4P MANUAL" },
    ];

    return expectSaga(() => handleGetVersion(versionRequest("1")))
      .withReducer(reducer)
      .put(loading())
      .provide([[call(api.get, "Version?ModelID=1"), { data: fakeVersion }]])
      .dispatch(versionRequestSuccess(fakeVersion))
      .hasFinalState({
        ...initialState,
        data: {
          ...initialState.data,
          version: fakeVersion,
        },
        loading: false,
      })
      .run();
  });

  it("should be able to handle fetch version error", () => {
    const error = new Error("error");

    return expectSaga(() => handleGetVersion(versionRequest("1")))
      .withReducer(reducer)
      .put(loading())
      .provide([[call(api.get, "Version?ModelID=1"), throwError(error)]])
      .dispatch(modelRequestFailure())
      .hasFinalState({
        ...initialState,
        loading: false,
        error: true,
      })
      .run();
  });
});
