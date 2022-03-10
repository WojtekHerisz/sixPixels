import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import actions from "../redux/actions";

const useFetch = () => {
  const dispatch = useDispatch();
  const Router = useRouter();

  const login = async (data) => {
    dispatch(actions.utils.setLoading(true));
    const response = await fetch("api/auth/login", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const parsed = await response.json();
    dispatch(actions.utils.setLoading(false));
    if (response.status === 200) {
      dispatch(actions.user.setUser(parsed));
      return Router.query?.from || "/";
    }
    return "";
  };

  const register = async (data) => {
    dispatch(actions.utils.setLoading(true));
    const response = await fetch("api/auth/register", {
      method: "POST",
      body: data,
    });

    const parsed = await response.json();

    dispatch(actions.utils.setLoading(false));
  };

  return { login, register };
};

export default useFetch;
