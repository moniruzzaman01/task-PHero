import React from "react";

const BillingTable = () => {
  return (
    <table className=" w-full border-[1px] mt-5 ">
      <tr className=" border-b-[1px] h-10 ">
        <th>Billing ID</th>
        <th>Full Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Paid Amount</th>
        <th>Action</th>
      </tr>
      <tr className=" border-b-[1px] h-8">
        <td>01</td>
        <td>shakib</td>
        <td>shakib@mail.com</td>
        <td>38742893</td>
        <td>23000</td>
        <td>
          <span className=" cursor-pointer">Edit</span> <span>|</span>{" "}
          <span className=" cursor-pointer">Delete</span>
        </td>
      </tr>
    </table>
  );
};

export default BillingTable;
