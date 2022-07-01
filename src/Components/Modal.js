import React, { useState } from "react";

const Modal = ({
  setModal,
  refetch,
  updateData,
  setUpdateData,
  totalRefetch,
}) => {
  const [name, setName] = useState(updateData?.name || "");
  const [email, setEmail] = useState(updateData?.email || "");
  const [phone, setPhone] = useState(updateData?.phone || "");
  const [bill, setBill] = useState(updateData?.bill || "");

  const handleForm = (event) => {
    event.preventDefault();

    if (event.target?.add?.innerHTML === "Add") {
      const data = { name, email, phone, bill };
      fetch(`http://localhost:5000/add-billing`, {
        method: "post",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged === true) {
            event.target.reset();
            setModal(false);
            refetch();
            totalRefetch();
          } else {
            // handle error
          }
        });
    } else if (event.target?.update?.innerHTML === "Update") {
      const data = { name, email, phone, bill };

      fetch(`http://localhost:5000/update-billing/${updateData._id}`, {
        method: "put",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged === true) {
            event.target.reset();
            setModal(false);
            refetch();
            totalRefetch();
          } else {
            // handle error
          }
        });
    }
  };
  return (
    <div className=" bg-gray-300 bg-opacity-60 absolute w-screen h-screen top-0 left-0 flex items-center ">
      <div className=" relative bg-gray-400 h-1/2 w-2/3 mx-auto rounded-md p-5">
        <p
          className=" absolute top-5 right-5 font-bold bg-white h-6 w-6 rounded cursor-pointer "
          onClick={() => {
            setModal(false);
            setUpdateData({});
          }}
        >
          X
        </p>
        <h2 className=" text-2xl font-bold mb-5 mt-20">Billing Form</h2>
        <form onSubmit={handleForm} action="" className=" w-2/3 mx-auto">
          <input
            type="text"
            name="name"
            placeholder=" Full Name"
            defaultValue={updateData?.name || ""}
            onChange={(event) => setName(event.target.value)}
            className=" w-full mb-5"
            required
          />
          <input
            type="email"
            name="email"
            placeholder=" Email"
            defaultValue={updateData?.email || ""}
            onChange={(event) => setEmail(event.target.value)}
            className=" w-full mb-5"
            required
          />
          <div className=" grid grid-cols-2 gap-5 ">
            <input
              type="text"
              name="phone"
              placeholder=" Phone"
              defaultValue={updateData?.phone || ""}
              onChange={(event) => setPhone(event.target.value)}
              className=" w-full mb-5"
              required
            />
            <input
              type="number"
              name="bill"
              placeholder=" Bill Amount"
              defaultValue={updateData?.bill || ""}
              onChange={(event) => setBill(event.target.value)}
              className=" w-full mb-5"
              required
            />
          </div>
          {updateData?._id ? (
            <button name="update" className=" bg-black text-white w-full py-1">
              Update
            </button>
          ) : (
            <button name="add" className=" bg-black text-white w-full py-1">
              Add
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Modal;
