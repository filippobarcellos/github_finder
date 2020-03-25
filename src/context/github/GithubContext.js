import { createContext } from "react";
import GithubState from "./GithubState";

const githubContext = createContext(GithubState);

export default githubContext;
