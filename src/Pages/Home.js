import React from "react";

import Search from "../components/Search";
import UsersList from "../components/users/UsersList";

const Home = () => {
  return (
    <>
      <Search />
      <UsersList />
    </>
  );
};

export default Home;
