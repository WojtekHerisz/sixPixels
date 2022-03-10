import { useRouter } from "next/router";
import { useState } from "react";
import useFetch from "../hooks/useFetch";

const Login = () => {
  const { login } = useFetch();
  const Router = useRouter();
  const [loginData, setLoginData] = useState({ mail: "", password: "" });

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const redirect = await login(loginData);
    console.log(redirect);
    if (redirect) Router.push(redirect);
  };

  return (
    <main className="flex items-center justify-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex p-10 border-2 border-bee rounded items-left justify-around flex-col"
      >
        <label>Email</label>
        <input
          className="mb-2"
          value={loginData.mail}
          name="mail"
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={loginData.password}
          onChange={handleChange}
          className="mb-2"
        />

        <button type="submit" className="mt-10 border border-bee rounded">
          Login
        </button>
      </form>
    </main>
  );
};

export default Login;
