import React from "react";
import "./profile.style.scss";
import Jumbo from "./Jumbo";
import { FaConnectdevelop, FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

export const profiles = [
  {
    id: 1,
    website: "",
    skills: ["React", "HTML", "CSS", "Python", "Javascript"],
    twitter: "",
    linkedin: "",
    imgUrl:
      "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200",
    name: "John Doe",
    designation: "Developer at Microsoft",
    address: "Seattle WA"
  },
  {
    id: 2,
    website: "",
    skills: ["React", "HTML", "CSS", "Python", "Javascript"],
    twitter: "",
    linkedin: "",
    imgUrl:
      "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200",
    name: "Chiran",
    designation: "Founder of ConSmart",
    address: "Lingsey"
  },
  {
    id: 3,
    website: "",
    skills: ["React", "HTML", "CSS", "Python", "Javascript"],
    twitter: "",
    linkedin: "",
    imgUrl:
      "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200",
    name: "Biswadeep",
    designation: "Investor at ConSmart",
    address: "Lingsey"
  }
];

export default function Profiles({ location }) {
  return (
    <section className="container">
      <Jumbo
        heading="Developers"
        description="Browse and connect with developers"
        Icon={FaConnectdevelop}
      />
      <div className="profiles">
        {profiles.map(profile => (
          <div key={profile.id} className="profile bg-light">
            <img className="round-img" src={profile.imgUrl} alt="profile" />
            <div>
              <h2>{profile.name}</h2>
              <p>{profile.designation}</p>
              <p>{profile.address}</p>
              <Link
                to={`${location.pathname}/${profile.id}`}
                className="btn btn-primary"
              >
                View Profile
              </Link>
            </div>
            <ul>
              <li className="text-primary">
                <FaCheck /> HTML
              </li>
              <li className="text-primary">
                <FaCheck /> CSS
              </li>
              <li className="text-primary">
                <FaCheck /> Javascript
              </li>
              <li className="text-primary">
                <FaCheck /> Python
              </li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
