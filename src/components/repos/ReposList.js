import React from "react";

import RepoItem from "./RepoItem";

const ReposList = ({ repos }) => {
  return repos.map(repo => <RepoItem key={repo.id} repo={repo} />);
};

export default ReposList;
