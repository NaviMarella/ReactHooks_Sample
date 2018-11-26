import React from "react";
import ReactDOM from "react-dom";
import UserProfile from "./components/user-profile/user-profile.jsx";
import "./styles.css";
import {
  BrowserRouter
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserProfile />
      </BrowserRouter>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
