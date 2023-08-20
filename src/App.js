import logo from "./logo.svg";
import Weather from "./Weather";
import React from "react";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Debugging</h1>
        <Weather city="New York" />
      </header>
    </div>
  );
}

export default App;
