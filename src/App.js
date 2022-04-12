import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.setState({value: ""});
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <label>
          {this.state.value}<br />
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <button onClick={this.handleSubmit}>Reset</button>
      </div>
    );
  }
}

export default App;
