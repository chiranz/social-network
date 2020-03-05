import React from "react";
import { FaCheck } from "react-icons/fa";

export default function About({ profile }) {
  return (
    <div className="profile-about bg-light p-2">
      <h2 className="text-primary">{profile.name}'s Bio</h2>
      <p>
        {profile.about
          ? profile.about
          : `Lorem ipsum dolor sit
             amet consectetur adipisicing elit. 
             In quisquam repudiandae, minus eum 
             eius accusantium hic laudantium 
             libero incidunt fuga! `}
      </p>
      <div className="line"></div>
      <h2 className="text-primary">Skills</h2>
      <div className="skills">
        {profile.skills.map(skill => (
          <div className="p-1">
            <FaCheck /> {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
