import React from "react";

export default function Jumbo({ heading, Icon, description }) {
  return (
    <section className="container">
      <h1 className="large text-primary">{heading}</h1>
      <p className="lead">
        <Icon />
        {description}
      </p>
    </section>
  );
}
