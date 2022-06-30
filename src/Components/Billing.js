import React from "react";
import BillingTable from "./BillingTable";
import Pagination from "./Pagination";

const Billing = () => {
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
        <button>Add New Bill</button>
      </div>
      <BillingTable />
      <Pagination />
    </div>
  );
};

export default Billing;
