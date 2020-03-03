import React from "react";
import "./app.style.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
