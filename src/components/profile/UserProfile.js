import React from "react";
import "./userProfile.style.scss";
import { profiles } from "../Profiles";
import { Link } from "react-router-dom";
import About from "./About";
import Profile from "./Profile";
import Experience from "./Experience";
import Education from "./Education";
import GithubProfile from "./GithubProfile";

export default function UserProfile(props) {
  const { id } = props.match.params;
  const profile = profiles.find(profile => profile.id === +id);
  return (
    <section className="container">
      <Link to="/profiles" className="btn">
        Back to Profiles
      </Link>
      <div className="profile-grid my-1">
        {/* Top */}
        <Profile profile={profile} />
        {/* ABOUt */}
        <About profile={profile} />
        {/* Experience */}
        <Experience />
        {/* Education */}
        <Education />
        {/* Github Repos */}
        <GithubProfile />
      </div>
    </section>
  );
}
