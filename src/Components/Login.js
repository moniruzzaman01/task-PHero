import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleForm = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const pass = event.target.pass.value;
    const data = { email, pass };

    fetch(`https://red-toque-40345.herokuapp.com/login`, {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success === true) {
          event.target.reset();
          localStorage.setItem("accessToken", data.accessToken);
          navigate("/");
        } else {
          // handle error
        }
      });
  };
  return (
    <div className=" min-h-[60vh] flex justify-center items-center ">
      <div className=" w-full">
        <h2 className=" text-3xl mb-10 font-bold">Login</h2>
        <form onSubmit={handleForm} action="" className=" w-2/3 mx-auto">
          <input
            type="email"
            name="email"
            placeholder=" Email"
            className=" w-full mb-5 bg-gray-100"
            required
          />
          <input
            type="password"
            name="pass"
            placeholder=" Password"
            className=" w-full mb-5 bg-gray-100"
            required
          />
          <button name="add" className=" bg-black text-white w-full py-1">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
