import React, { Component } from "react";
import "./App.css";
import { Dropdown } from "./components/Dropdown";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dropdown />
      </div>
    );
  }
}

export default App;
