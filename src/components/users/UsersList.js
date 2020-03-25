import React, { useContext } from "react";

import GithubContext from "../../context/github/GithubContext";

import UserCard from "./UserCard";
import Spinner from "../Spinner";

const UsersList = () => {
  const githubContext = useContext(GithubContext);
  const { loading, users } = githubContext;

  return loading ? (
    <Spinner />
  ) : (
    <div style={userStyle}>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem"
};

export default UsersList;
