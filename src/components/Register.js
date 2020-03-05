import React from "react";
import { FaUser } from "react-icons/fa";
import "./register.style.scss";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import Jumbo from "./Jumbo";

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(1, "Must have a character")
    .max(255, "Must be shorter than 255 chars")
    .required("Must enter a username"),
  email: Yup.string()
    .email("Must be a valid email address")
    .max(255, "Must be shorter than 255 chars")
    .required("Must enter an email."),
  password: Yup.string()
    .min(8, "Must be a more than 8 characters")
    .max(16, "Must be shorter than 16 characters")
    .required("Must enter an password."),
  confirmPassword: Yup.string()
    .required("Please confirm your password")
    .test("passwords match", "passwords must match", function(value) {
      return this.parent.password === value;
    })
});

export default function Register() {
  return (
    <section className="container">
      <Jumbo
        heading="Sign Up"
        description="Create your account"
        Icon={FaUser}
      />
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          confirmPassword: ""
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
          }, 1000);
          resetForm();
          setSubmitting(false);
        }}
      >
        {({
          values: { email, username, password, confirmPassword },
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => (
          <form action="" className="form">
            <div className="form-group">
              <input
                type="text"
                placeholder="username"
                name="username"
                value={username}
                onChange={handleChange}
                onBlur={handleBlur}
                className={touched.username && errors.username ? "error" : ""}
              />
              <small className="text-danger">
                {touched.username && errors.username}
              </small>
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="example@gmail.com"
                name="email"
                value={email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={touched.email && errors.email ? "error" : ""}
              />
              <small className="text-danger">
                {touched.email && errors.email}
              </small>

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
                onChange={handleChange}
                onBlur={handleBlur}
                className={touched.password && errors.password ? "error" : ""}
              />
              <small className="text-danger">
                {touched.password && errors.password}
              </small>
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="type your password again"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  touched.confirmPassword && errors.confirmPassword
                    ? "error"
                    : ""
                }
              />
              <small className="text-danger">
                {touched.confirmPassword && errors.confirmPassword}
              </small>
            </div>
            <button
              className="btn btn-primary"
              onClick={handleSubmit}
              type="submit"
              disabled={isSubmitting}
            >
              Sign Up
            </button>
          </form>
        )}
      </Formik>
      <p className="my-1">
        Already have an account? <Link to="/login">login here</Link>
      </p>
    </section>
  );
}
