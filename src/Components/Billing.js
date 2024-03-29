import React, { useEffect, useState } from "react";
import BillingTable from "./BillingTable";
import Pagination from "./Pagination";

const Billing = ({ refetch }) => {
  const [modal, setModal] = useState(false);
  const [totalPage, setTotalPage] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    fetch("https://red-toque-40345.herokuapp.com/numberOfData", {
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const totalData = data.number;
        const pages = Math.ceil(totalData / 10);
        setTotalPage(pages);
      });
  }, []);

  return (
    <div className=" mx-10 mt-10 bg-gray-400 h-10">
      <div className=" flex justify-between h-full items-center px-5 ">
        <div className=" flex">
          <h2 className=" mr-5">Billings</h2>
          <input
            className=" border-[1px] border-black "
            type="text"
            placeholder="Search"
            onKeyUp={(event) => setSearchData(event.target.value.toLowerCase())}
          />
        </div>
        <button
          className=" bg-black text-white px-3"
          onClick={() => setModal(true)}
        >
          Add New Bill
        </button>
      </div>
      <BillingTable
        refetch={refetch}
        searchData={searchData}
        pageNumber={pageNumber}
        modal={modal}
        setModal={setModal}
      />
      <Pagination setPageNumber={setPageNumber} totalPage={totalPage} />
    </div>
  );
};

export default Billing;
