import React from "react";

const Pagination = ({ totalPage, setPageNumber }) => {
  return (
    <div className=" flex justify-center mt-3">
      {[...Array(totalPage).keys()].map((number, index) => (
        <p
          onClick={() => setPageNumber(number)}
          key={index}
          className=" bg-gray-400 mr-2 h-6 w-6 rounded cursor-pointer"
        >
          {number + 1}
        </p>
      ))}
    </div>
  );
};

export default Pagination;
