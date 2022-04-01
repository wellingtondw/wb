import { ActionTypes, IMake, IModel, IVersion } from "./types";

export const loading = () => ({
  type: ActionTypes.loading,
});
export const makeRequest = () => ({
  type: ActionTypes.makeRequest,
});
export const makeRequestSuccess = (make: IMake[]) => ({
  type: ActionTypes.makeRequestSuccess,
  payload: make,
});
export const makeRequestFailure = () => ({
  type: ActionTypes.makeRequestFailure,
});
export const modelRequest = (makeId: string) => ({
  type: ActionTypes.modelRequest,
  payload: { makeId },
});
export const modelRequestSuccess = (model: IModel[]) => ({
  type: ActionTypes.modelRequestSuccess,
  payload: model,
});
export const modelRequestFailure = () => ({
  type: ActionTypes.modelRequestFailure,
});
export const versionRequest = (modelId: string) => ({
  type: ActionTypes.versionRequest,
  payload: { modelId },
});
export const versionRequestSuccess = (version: IVersion[]) => ({
  type: ActionTypes.versionRequestSuccess,
  payload: version,
});
export const versionRequestFailure = () => ({
  type: ActionTypes.modelRequestFailure,
});
