import './App.css';
import React, { createContext, useContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

const countContext = createContext(null);

function App() {

  const [count, setCount] = useState(0);

  function decrease() {
    setCount(count => (count - 1));
  }
  function increase() {
    setCount(count => (count + 1));
  }

  return (
  <countContext.Provider value={{ count, decrease, increase }}>
    <Router>
      <div className="center">
        <nav>
          <Link to="/" className='nodecorations'><Button color="info" className="buttonWithMargin">Increase button</Button></Link>
          <Link to="/decrease" className='nodecorations'><Button color="info" className="buttonWithMargin">Decrease button</Button></Link>
          <Link to="/labelAndInput" className='nodecorations'><Button color="info" className="buttonWithMargin">Label + input</Button></Link>
        </nav>
        <hr />

        <Routes>
          <Route path="/" element={<Increase />} />
          <Route path="/decrease" element={<Decrease />} />
          <Route path="/labelAndInput" element={<LabelAndInput />} />
        </Routes>
      </div>
    </Router>
  </countContext.Provider>
  );
}

function Increase() {

  const { count, increase } = useContext(countContext);

  return(
    <div className="center">
      <h1>{count}</h1>
      <Button onClick={increase} color="success">Increase</Button>
    </div>
  );
}

function Decrease() {

  const { count, decrease } = useContext(countContext);

  return(
    <div className="center">
      <h1>{count}</h1>
      <Button onClick={decrease} color="danger">Decrease</Button>
    </div>
  );
}

class LabelAndInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleReset(event) {
    this.setState({value: ""});
    event.preventDefault();
  }

  render() { 
  return(
    <div className="center">
      <input type="text" value={this.state.value} onChange={this.handleChange} className="inputField"></input><br />
      <Button onClick={this.handleReset} color="warning" className='buttonWithMargin'>Reset</Button>
      <h1>{this.state.value}</h1>
    </div>
    );
  }
}

export default App;
