import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

function App() {
  const [val, setVal] = useState();

  return (
    <div>
      <label>Hello!</label><br />
      <input type="text" value={val} />
      <button onClick={() => setVal(() => "")}>Reset</button>
    </div>
  );
}

export default App;
