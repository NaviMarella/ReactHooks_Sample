import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserProfile from "./components/user-profile/user-profile.jsx";
import "./styles.css";


function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={UserProfile} />
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
