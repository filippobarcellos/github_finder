import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";

import "./App.css";

import Navbar from "./components/Navbar";
import UserItem from "./components/users/UserItem";
import Alert from "./components/Alert";

import Home from "./Pages/Home";
import About from "./Pages/About";
import NotFound from "./Pages/404";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Alert />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/user/:login" component={UserItem} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
};

export default App;
