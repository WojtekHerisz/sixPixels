import { useState } from "react";

const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {};

  return (
    <main className="flex items-center justify-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex p-5 border-2 border-bee rounded items-center justify-around flex-col"
      >
        <lanel>Email</lanel>
        <input value={loginData.email} name="email" onChange={handleChange} />
        <lanel>Password</lanel>
        <input
          type="password"
          value={loginData.password}
          name="password"
          onChange={handleChange}
        />
      </form>
    </main>
  );
};

export default Login;
