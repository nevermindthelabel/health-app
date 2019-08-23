import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NewUserPage from "./pages/NewUserPage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/user/new-user" component={NewUserPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;