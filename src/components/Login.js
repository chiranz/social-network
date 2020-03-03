import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import "./login.style.scss";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    console.log("from submitted");
    return;
  };
  return (
    <section className="container">
      {/* Alerts */}
      <div className="alert alert-danger">Invalid Credentials</div>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead">
        <FaUser /> Login to your account
      </p>
      <form className="form">
        <div className="form-group">
          <input
            type="email"
            placeholder="example@gmail.com"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="make it secure"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            minLength="6"
          />
        </div>
        <button
          className="btn btn-primary"
          onClick={handleSubmit}
          type="submit"
        >
          Log In
        </button>
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">register here</Link>
      </p>
    </section>
  );
}
