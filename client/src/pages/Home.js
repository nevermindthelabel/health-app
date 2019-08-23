import React, { Component } from "react";
import Navbar from "../components/Navbar";
import logo from "../logo.svg";
import Footer from "../components/Footer";
class Home extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
				<Footer />
      </div>
    );
  }
}

export default Home;
