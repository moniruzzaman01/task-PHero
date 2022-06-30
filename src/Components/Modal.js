import React from "react";

const Modal = ({ setModal }) => {
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
        <form action="" className=" w-2/3 mx-auto">
          <input
            type="text"
            placeholder=" Full Name"
            className=" w-full mb-5"
          />
          <input type="email" placeholder=" Email" className=" w-full mb-5" />
          <div className=" grid grid-cols-2 gap-5 ">
            <input type="text" placeholder=" Phone" className=" w-full mb-5" />
            <input
              type="number"
              placeholder=" Bill Amount"
              className=" w-full mb-5"
            />
          </div>
          <button className=" bg-black text-white w-full py-1">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;