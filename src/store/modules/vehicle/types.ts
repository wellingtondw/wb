export enum ActionTypes {
  loading = "LOADING",
  makeRequest = "MAKE_REQUEST",
  makeRequestSuccess = "MAKE_REQUEST_SUCCESS",
  makeRequestFailure = "MAKE_REQUEST_FAILURE",
  modelRequest = "MODEL_REQUEST",
  modelRequestSuccess = "MODEL_REQUEST_SUCCESS",
  modelRequestFailure = "MODEL_REQUEST_FAILURE",
  versionRequest = "VERSION_REQUEST",
  versionRequestSuccess = "VERSION_REQUEST_SUCCESS",
  versionRequestFailure = "VERSION_REQUEST_FAILURE",
}

export type IMake = {
  ID: number;
  Name: string;
};

export type IModel = {
  MakeID: number;
  ID: number;
  Name: string;
};

export type IVersion = {
  ModelID: number;
  ID: number;
  Name: string;
};

export type IVehicleState = {
  data: {
    make: IMake[];
    model: IModel[];
    version: IVersion[];
  };
  loading: boolean;
  error: boolean;
};
