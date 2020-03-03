import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import "./register.style.scss";
import { Link } from "react-router-dom";

export default function Register() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    console.log("from submitted");
    return;
  };
  return (
    <section className="container">
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <FaUser /> Create your account
      </p>
      <form action="" className="form">
        <div className="form-group">
          <input
            type="text"
            placeholder="username"
            name="username"
            value={username}
            onChange={e => setUserName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="example@gmail.com"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <small className="form-text">
            This site uses Gravatar, so if you want a profile image use a
            Gravatar email.
          </small>
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
        <div className="form-group">
          <input
            type="password"
            placeholder="type your password again"
            name="confirmPassword"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            minLength="6"
          />
        </div>
        <button
          className="btn btn-primary"
          onClick={handleSubmit}
          type="submit"
        >
          Sign Up
        </button>
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">login here</Link>
      </p>
    </section>
  );
}
