import React, { useReducer } from "react";
import axios from "axios";

import GithubContext from "./GithubContext";
import GithubReducer from "./GithubReducer";

export const SEARCH_USERS = "SEARCH_USERS";
export const GET_USER = "GET_USER";
export const CLEAR_USERS = "CLEAR_USERS";
export const GET_REPOS = "GET_REPOS";
export const SET_LOADING = "SET_LOADING";

const GithubState = props => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // search users

  const searchUsers = async text => {
    showLoading();

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}?client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items
    });
  };

  // clear users

  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  // get users

  const getUser = async username => {
    showLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}?client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    dispatch({
      type: GET_USER,
      payload: res.data
    });
  };

  // get repos

  const getUserRepos = async username => {
    showLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}?client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    dispatch({
      type: GET_REPOS,
      payload: res.data
    });
  };

  // show Loading
  const showLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
