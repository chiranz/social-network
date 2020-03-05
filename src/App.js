import React from "react";
import "./app.style.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Login from "./components/Login";
import { FaGithub } from "react-icons/fa";
import Profiles from "./components/Profiles";
import UserProfile from "./components/profile/UserProfile";

function App() {
  return (
    <Router>
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          zIndex: 3,
          height: "50px",
          width: "50px",
          fontSize: "1.5rem",
          background: "#ffffff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderBottomLeftRadius: "70%"
        }}
      >
        <a
          href="https://github.com/chiranz/social-network"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaGithub />
        </a>
      </div>
      <Navbar />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profiles" component={Profiles} />
        <Route exact path="/profiles/:id" component={UserProfile} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
