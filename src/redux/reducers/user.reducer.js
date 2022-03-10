import { REMOVE_USER, SET_USER } from "../types/user.types";

const defaultState = {
  userData: null,
  isAuthenticated: false,
};

const main = (state = defaultState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        userData: action.payload,
        isAuthenticated: true,
      };

    case REMOVE_USER: {
      return { ...defaultState };
    }

    default:
      return { ...state };
  }
};

export default main;
