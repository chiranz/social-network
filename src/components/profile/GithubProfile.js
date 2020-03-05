import React from "react";
import { FaGithub } from "react-icons/fa";

export default function GithubProfile() {
  return (
    <div className="profile-github">
      <h2 className="text-primary my-1">
        <FaGithub /> Github Repos
      </h2>
      <div className="repo bg-white my-1 p-1">
        <div>
          <h4>
            <a href="/">Repo 1</a>
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            iusto. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Praesentium, dolore!
          </p>
        </div>
        <div>
          <ul>
            <li className="badge badge-primary">Stars: 44</li>
            <li className="badge badge-dark">Watchers: 30</li>
            <li className="badge badge-success">Forks: 100</li>
          </ul>
        </div>
      </div>
      <div className="repo bg-white my-1 p-1">
        <div>
          <h4>
            <a href="/">Repo 2</a>
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            iusto. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Praesentium, dolore!
          </p>
        </div>
        <div>
          <ul>
            <li className="badge badge-primary">Stars: 44</li>
            <li className="badge badge-dark">Watchers: 30</li>
            <li className="badge badge-success">Forks: 100</li>
          </ul>
        </div>
      </div>
      <div className="repo bg-white my-1 p-1">
        <div>
          <h4>
            <a href="/">Repo 3</a>
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            iusto. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Praesentium, dolore!
          </p>
        </div>
        <div>
          <ul>
            <li className="badge badge-primary">Stars: 44</li>
            <li className="badge badge-dark">Watchers: 30</li>
            <li className="badge badge-success">Forks: 100</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
