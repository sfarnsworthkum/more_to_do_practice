import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./Todo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <section class="container vert-offset-top-2">
          <div id="todoBox" class="todoBox col-xs-6 col-xs-offset-3" />
        </section>
      </div>
    );
  }
}

export default App;
