import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Amsterdam" />
        <footer>
          Coded by Andreea Furtuna and is open-sourced on {""}
          <a
            href="https://github.com/Andreea-Furtuna/react-zen-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {""}GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
