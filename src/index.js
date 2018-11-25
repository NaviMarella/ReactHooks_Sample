import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import UserProfile from "./components/user-profile/user-profile.jsx";
import "./styles.css";
import "font-awesome/css/font-awesome.min.css";

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
