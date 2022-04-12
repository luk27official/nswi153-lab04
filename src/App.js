import './App.css';
import React, { createContext, useContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

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
  </countContext.Provider>
  );
}

function Home() {

  const { count, decrease, increase } = useContext(countContext);

  return(
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>Increase</button>
    </div>
  );
}

function About() {

  const { count, decrease, increase } = useContext(countContext);

  return(
    <div>
      <h1>{count}</h1>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}

export default App;
