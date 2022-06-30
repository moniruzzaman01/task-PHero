import React from "react";

const Modal = ({ setModal }) => {
  return (
    <div className=" bg-gray-300 bg-opacity-60 absolute w-screen h-screen top-0 left-0 flex items-center ">
      <div className=" bg-gray-400 h-2/3 w-2/3 mx-auto rounded-md p-5">
        <h2 onClick={() => setModal(false)}>Modal</h2>
      </div>
    </div>
  );
};

export default Modal;
