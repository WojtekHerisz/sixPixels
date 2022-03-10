import { SET_LOADING } from "../types/utils.types";

const defaultState = {
  isLoading: false,
};

const main = (state = defaultState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return { ...state };
  }
};

export default main;
