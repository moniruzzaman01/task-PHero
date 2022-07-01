import React from "react";
import { useQuery } from "react-query";
import Billing from "./Billing";
import Header from "./Header";

const Layout = () => {
  //
  const { data, isLoading, refetch } = useQuery(["billing-list"], () =>
    fetch(`http://localhost:5000/paid-total`, {
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return;
  }
  return (
    <div>
      <Header data={data?.total} />
      <Billing refetch={refetch} />
    </div>
  );
};

export default Layout;
