import { SET_LOADER_VALUE } from "./globalConstants";

const initialState = {
  loading: false,
};

export const globalReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADER_VALUE:
      return {
        ...state,
        loading: payload,
      };
    default:
      return state;
  }
};
