import { useDispatch } from "react-redux";
import actions from "../redux/actions";

const useFetch = () => {
  const dispatch = useDispatch();

  const login = async (data) => {
    dispatch(actions.utils.setLoading(true));
    const response = await fetch("api/auth/login", {
      method: "POST",
      body: data,
    });

    const parsed = await response.json();

    dispatch(actions.utils.setLoading(true));
  };

  const register = async (data) => {
    dispatch(actions.utils.setLoading(true));
    const response = await fetch("api/auth/register", {
      method: "POST",
      body: data,
    });

    const parsed = await response.json();

    dispatch(actions.utils.setLoading(true));
  };

  return { login, register };
};

export default useFetch;
