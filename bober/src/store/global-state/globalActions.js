import { SET_LOADER_VALUE } from "./globalConstants";

export function updateLoading(contract) {
    return {
      type: SET_LOADER_VALUE,
      payload: contract,
    };
  }