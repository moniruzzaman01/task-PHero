import React, { useState } from "react";
import { useQuery } from "react-query";
// import EditModal from "./EditModal";
import Modal from "./Modal";

const BillingTable = ({ modal, setModal, pageNumber }) => {
  // const [editModal, setEditModal] = useState(false);
  const [updateData, setUpdateData] = useState({});
  const { data, isLoading, refetch } = useQuery(
    ["billing-list", pageNumber],
    () =>
      fetch(`http://localhost:5000/billing-list?pageNumber=${pageNumber}`).then(
        (res) => res.json()
      )
  );
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/delete-billing/${id}`, {
      method: "get",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          refetch();
        }
      });
  };
  if (isLoading) {
    return;
  }

  return (
    <>
      {modal && (
        <Modal
          setUpdateData={setUpdateData}
          updateData={updateData}
          refetch={refetch}
          setModal={setModal}
        />
      )}
      {/* {editModal && (
        <EditModal
          updateData={updateData}
          refetch={refetch}
          setEditModal={setEditModal}
        />
      )} */}
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
              <td>{list._id}</td>
              <td>{list.name}</td>
              <td>{list.email}</td>
              <td>{list.phone}</td>
              <td>{list.bill}</td>
              <td>
                <span
                  onClick={() => {
                    setUpdateData(list);
                    setModal(true);
                  }}
                  className=" cursor-pointer"
                >
                  Edit
                </span>{" "}
                <span>|</span>{" "}
                <span
                  onClick={() => handleDelete(list._id)}
                  className=" cursor-pointer"
                >
                  Delete
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default BillingTable;
