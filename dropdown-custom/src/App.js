import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Dropdown from "./components/Dropdown";

const options = ["one", "two", "three"];

class App extends Component {
  constructor() {
    super();
    this.state = {
      selected: options[0]
    };
    this._onSelect = this._onSelect.bind(this);
  }
  _onSelect(option) {
    console.log("You selected ", option.label);
    this.setState({ selected: option });
  }
  render() {

    return (
      <div style={{width: 400}}>
        <Dropdown/>
      </div>
    )
  }
}

export default App;
