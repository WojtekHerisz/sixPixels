import { SET_LOADING } from "../types/utils.types";

const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});

const actions = {
  setLoading,
};

export default actions;
