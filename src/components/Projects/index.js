import React, { Component } from "react";
import { projects } from "../../assets/projects/index";
import "./Projects.css";

class Projects extends Component {
  render() {
    const projectCards = projects.map((p, i) => (
      <div className="card" key={i}>
        <div className="image">
          <img src={p.image} />
        </div>
        <div className="content">
          <div className="header">{p.title}</div>
          <div className="meta">
            {p.stacks.map((s, i) => (
              <span className="stacks" key={`stacks${i}`}>
                {s}
              </span>
            ))}
          </div>
          <div className="description">{p.description}</div>
        </div>
        <div className="extra content">
          {p.demo && (
            <a target="_blank" href={p.demo}>
              <span className="right floated ui tiny basic button">Demo</span>
            </a>
          )}
          {p.github && (
            <a
              target="_blank"
              href={p.github}
              className="ui tiny basic button "
            >
              <i className="github icon" />
              Repo
            </a>
          )}
        </div>
      </div>
    ));

    return <div className="ui two cards">{projectCards}</div>;
  }
}

export default Projects;
