import './App.css';
import React, { createContext, useContext, useState } from "react";
import { BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate } from "react-router-dom";

const ThemeContext = createContext(null);

function App() {

  const [style, setStyle] = useState(0);

  function decrease() {
    setStyle(style => (style - 1));
  }
  function increase() {
    setStyle(style => (style + 1));
  }

  return (
  <ThemeContext.Provider value={{ style, decrease, increase }}>
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
  </ThemeContext.Provider>
  );
}

function Home() {

  const { style, decrease, increase } = useContext(ThemeContext);

  return(
    <div>
      <h1>{style}</h1>
      <button onClick={increase}>Increase</button>
    </div>
  );
}

function About() {

  const { style, decrease, increase } = useContext(ThemeContext);

  return(
    <div>
      <h1>{style}</h1>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}

export default App;
