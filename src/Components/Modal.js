import React from "react";

const Modal = ({ setModal, refetch }) => {
  const handleForm = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const bill = event.target.bill.value;
    const data = { name, email, phone, bill };
    fetch(`http://localhost:5000/add-billing`, {
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
          setModal(false);
          refetch();
        } else {
          // handle error
        }
      });
  };
  return (
    <div className=" bg-gray-300 bg-opacity-60 absolute w-screen h-screen top-0 left-0 flex items-center ">
      <div className=" relative bg-gray-400 h-1/2 w-2/3 mx-auto rounded-md p-5">
        <p
          className=" absolute top-5 right-5 font-bold bg-white h-6 w-6 rounded cursor-pointer "
          onClick={() => setModal(false)}
        >
          X
        </p>
        <h2 className=" text-2xl font-bold mb-5 mt-20">Please Fill the form</h2>
        <form onSubmit={handleForm} action="" className=" w-2/3 mx-auto">
          <input
            type="text"
            name="name"
            placeholder=" Full Name"
            className=" w-full mb-5"
            required
          />
          <input
            type="email"
            name="email"
            placeholder=" Email"
            className=" w-full mb-5"
            required
          />
          <div className=" grid grid-cols-2 gap-5 ">
            <input
              type="text"
              name="phone"
              placeholder=" Phone"
              className=" w-full mb-5"
              required
            />
            <input
              type="number"
              name="bill"
              placeholder=" Bill Amount"
              className=" w-full mb-5"
              required
            />
          </div>
          <button className=" bg-black text-white w-full py-1">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
