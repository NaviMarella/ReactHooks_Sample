import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./pages/home/HomePage";
import "./styles.css";
import {
  BrowserRouter
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
