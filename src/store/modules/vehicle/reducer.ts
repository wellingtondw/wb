import { Reducer } from "redux";
import { ActionTypes, IVehicleState } from "./types";

export const INITIAL_STATE: IVehicleState = {
  data: {
    make: [],
    model: [],
    version: [],
  },
  loading: true,
  error: false,
};

const vehicle: Reducer<IVehicleState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.loading: {
      return {
        ...state,
        loading: true,
      };
    }
    case ActionTypes.makeRequestSuccess: {
      return {
        ...state,
        data: {
          ...state.data,
          make: action.payload,
        },
        loading: false,
        error: false,
      };
    }
    case ActionTypes.makeRequestFailure: {
      return {
        ...state,
        error: true,
        loading: false,
      };
    }
    case ActionTypes.modelRequest: {
      return {
        ...state,
        data: {
          ...state.data,
          model: [],
          version: [],
        },
      };
    }
    case ActionTypes.modelRequestSuccess: {
      return {
        ...state,
        data: {
          ...state.data,
          model: action.payload,
        },
        loading: false,
        error: false,
      };
    }
    case ActionTypes.modelRequestFailure: {
      return {
        ...state,
        error: true,
        loading: false,
      };
    }
    case ActionTypes.versionRequest: {
      return {
        ...state,
        data: {
          ...state.data,
          version: [],
        },
      };
    }
    case ActionTypes.versionRequestSuccess: {
      return {
        ...state,
        data: {
          ...state.data,
          version: action.payload,
        },
        loading: false,
        error: false,
      };
    }
    case ActionTypes.versionRequestFailure: {
      return {
        ...state,
        error: true,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
};
export default vehicle;
