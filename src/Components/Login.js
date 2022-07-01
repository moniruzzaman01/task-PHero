import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const handleForm = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const pass = event.target.pass.value;
    const data = { email, pass };

    fetch(`http://localhost:5000/login`, {
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
          navigate("/billing");
        } else {
          setErr(data.message);
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
          {err && (
            <p className=" text-left mb-5 text-red-500 font-bold capitalize">
              {err} !!!
            </p>
          )}
          <button name="add" className=" bg-black text-white w-full py-1">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
