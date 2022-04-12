import './App.css';
import React, { useState } from "react";
import { BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate } from "react-router-dom";

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
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>

          <hr />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

function Home() {
  return(
    <div>
      <button>XDDDD</button>
    </div>
  );
}

function About() {
  return(
    <div>
      <button>sdaf</button>
    </div>
  );
}

export default App;
