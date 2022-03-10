import { useState } from "react";
import useFetch from "../hooks/useFetch";

const Login = () => {
  const { login } = useFetch();
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(loginData);
  };

  return (
    <main className="flex items-center justify-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex p-10 border-2 border-bee rounded items-center justify-around flex-col"
      >
        <lanel className="">Email</lanel>
        <input value={loginData.email} name="email" onChange={handleChange} />
        <lanel>Password</lanel>
        <input
          type="password"
          value={loginData.password}
          name="password"
          onChange={handleChange}
        />

        <button type="submit" className="border-bee rounded">
          Login
        </button>
      </form>
    </main>
  );
};

export default Login;
