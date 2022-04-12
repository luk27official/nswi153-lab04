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
          <Button color="info" className="buttonWithMargin"><Link to="/" className='nodecorations'>Increase button</Link></Button>
          <Button color="info" className="buttonWithMargin"><Link to="/decrease" className='nodecorations'>Decrease button</Link></Button>
        </nav>
        <hr />

        <Routes>
          <Route path="/" element={<Increase />} />
          <Route path="/decrease" element={<Decrease />} />
        </Routes>
      </div>
    </Router>
  </countContext.Provider>
  );
}

function Increase() {

  const { count, decrease, increase } = useContext(countContext);

  return(
    <div className="center">
      <h1>{count}</h1>
      <Button onClick={increase} color="success">Increase</Button>
    </div>
  );
}

function Decrease() {

  const { count, decrease, increase } = useContext(countContext);

  return(
    <div className="center">
      <h1>{count}</h1>
      <Button onClick={decrease} color="danger">Decrease</Button>
    </div>
  );
}

export default App;
