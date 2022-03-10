import { SET_USER } from "../types/user.types";

const setUser = (payload) => ({
  type: SET_USER,
  payload,
});

const removeUser = (payload) => ({
  type: SET_USER,
  payload,
});

const actions = {
  setUser,
  removeUser,
};

export default actions;
