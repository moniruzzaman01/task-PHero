import React from "react";

const Pagination = () => {
  return (
    <div className=" flex justify-center mt-3">
      {[...Array(5).keys()].map((number) => (
        <p className=" bg-gray-400 mr-2 h-6 w-6 rounded cursor-pointer">
          {number}
        </p>
      ))}
    </div>
  );
};

export default Pagination;
