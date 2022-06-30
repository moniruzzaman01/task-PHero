import React, { useState } from "react";
import BillingTable from "./BillingTable";
import Pagination from "./Pagination";

const Billing = () => {
  const [modal, setModal] = useState(false);
  return (
    <div className=" mx-10 mt-10 bg-gray-400 h-10">
      <div className=" flex justify-between h-full items-center px-5 ">
        <div className=" flex">
          <h2 className=" mr-5">Billings</h2>
          <input
            className=" border-[1px] border-black "
            type="text"
            placeholder="Search"
          />
        </div>
        <button
          className=" bg-black text-white px-3"
          onClick={() => setModal(true)}
        >
          Add New Bill
        </button>
      </div>
      <BillingTable modal={modal} setModal={setModal} />
      <Pagination />
    </div>
  );
};

export default Billing;
