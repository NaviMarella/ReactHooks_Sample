import React from "react";
import ReactDOM from "react-dom";
import UserProfile from "./components/user-profile/user-profile.jsx";
import "./styles.css";
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
      <UserProfile />
    </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
