import React from "react";
import { FaUser } from "react-icons/fa";
import { Formik } from "formik";
import * as Yup from "yup";
import "./login.style.scss";
import { Link } from "react-router-dom";
import Jumbo from "./Jumbo";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Must be a valid email address")
    .max(255, "Must be shorter than 255 chars")
    .required("Must enter an email."),
  password: Yup.string()
    .min(8, "Must be a more than 8 characters")
    .max(16, "Must be shorter than 16 characters")
    .required("Must enter an password.")
});

export default function Login() {
  return (
    <section className="container">
      {/* Alerts */}
      <div className="alert alert-danger">Invalid Credentials</div>
      <Jumbo
        heading="Sign In"
        description="Login to your account"
        Icon={FaUser}
      />
      <Formik
        initialValues={{
          email: "",
          password: ""
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
          values: { email, password },
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
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="keep it secure"
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

            <button
              className="btn btn-primary"
              onClick={handleSubmit}
              type="submit"
              disabled={isSubmitting}
            >
              Log In
            </button>
          </form>
        )}
      </Formik>
      <p className="my-1">
        Don't have an account? <Link to="/register">register here</Link>
      </p>
    </section>
  );
}
