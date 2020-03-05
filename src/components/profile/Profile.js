import React from "react";
import { Link } from "react-router-dom";
import { FaGlobe, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Profile({ profile }) {
  return (
    <div className="profile-top bg-primary p-2">
      <img className="round-img my-1" src={profile.imgUrl} alt="profile" />
      <h1 className="large">{profile.name}</h1>

      <p className="lead">{profile.designation}</p>
      <p>{profile.address}</p>
      <div className="icons my-1 ">
        <Link className to={profile.website}>
          <FaGlobe />
        </Link>
        <Link to={profile.twitter}>
          <FaTwitter />
        </Link>
        <Link to={profile.linkedin}>
          <FaLinkedin />
        </Link>
      </div>
    </div>
  );
}
