import React from "react";

const SignUp = () => {
  return (
    <div className=" min-h-[60vh] flex justify-center items-center ">
      <div className=" w-full">
        <h2 className=" text-3xl mb-10 font-bold">SignUp</h2>
        <form onSubmit={"handleForm"} action="" className=" w-2/3 mx-auto">
          <input
            type="text"
            name="name"
            placeholder=" Name"
            //   onChange={(event) => setEmail(event.target.value)}
            className=" w-full mb-5 bg-gray-100"
            required
          />
          <input
            type="email"
            name="email"
            placeholder=" Email"
            //   onChange={(event) => setEmail(event.target.value)}
            className=" w-full mb-5 bg-gray-100"
            required
          />
          <input
            type="password"
            name="pass"
            placeholder=" Password"
            // onChange={(event) => setBill(event.target.value)}
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

export default SignUp;
