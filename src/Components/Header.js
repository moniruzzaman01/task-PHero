import React from "react";

const Header = ({ data }) => {
  return (
    <nav className=" flex justify-between px-10 bg-gray-400 h-10 items-center ">
      <h2>Logo</h2>
      <h2>Paid Total: {data}</h2>
    </nav>
  );
};

export default Header;
