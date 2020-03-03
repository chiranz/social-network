import React from "react";
import { FaCode } from "react-icons/fa";
import "./navbar.style.scss";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar bg-dark">
      <h1>
        <FaCode /> Code
      </h1>
      <ul>
        <li>
          <Link to="/developers">Developers</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </div>
  );
}
