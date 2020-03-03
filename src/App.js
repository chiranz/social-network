import React from "react";
import "./app.style.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
