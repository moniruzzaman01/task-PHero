import React from "react";
import { useQuery } from "react-query";
import Modal from "./Modal";

const BillingTable = ({ modal, setModal }) => {
  const { data, isLoading, refetch } = useQuery("billing-list", () =>
    fetch(`http://localhost:5000/billing-list`).then((res) => res.json())
  );
  if (isLoading) {
    return;
  }

  return (
    <>
      {modal && <Modal refetch={refetch} setModal={setModal} />}
      <table className=" w-full border-[1px] mt-5 ">
        <thead>
          <tr className=" border-b-[1px] h-10 ">
            <th>Billing ID</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Paid Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((list, index) => (
            <tr key={index} className=" border-b-[1px] h-8">
              <td>{index + 1}</td>
              <td>{list.name}</td>
              <td>{list.email}</td>
              <td>{list.phone}</td>
              <td>{list.bill}</td>
              <td>
                <span className=" cursor-pointer">Edit</span> <span>|</span>{" "}
                <span className=" cursor-pointer">Delete</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default BillingTable;
