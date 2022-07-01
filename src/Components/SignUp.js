import React from "react";

const SignUp = () => {
  const handleForm = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const pass = event.target.pass.value;
    console.log(name, email, pass);
    const data = { name, email, pass };

    fetch(`https://red-toque-40345.herokuapp.com/registration`, {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          event.target.reset();
          console.log(data);
        } else {
          // handle error
        }
      });
  };
  return (
    <div className=" min-h-[60vh] flex justify-center items-center ">
      <div className=" w-full">
        <h2 className=" text-3xl mb-10 font-bold">SignUp</h2>
        <form onSubmit={handleForm} action="" className=" w-2/3 mx-auto">
          <input
            type="text"
            name="name"
            placeholder=" Name"
            className=" w-full mb-5 bg-gray-100"
            required
          />
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
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
