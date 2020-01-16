import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { __ } from "@wordpress/i18n";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{__("Hello, WordPress tools!")}</p>
      </header>
    </div>
  );
}

export default App;
