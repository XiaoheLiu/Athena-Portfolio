import React, { Component } from "react";
import AthenaProfilePic from "../../assets/AthenaProfilePic.jpg";
import { links } from "../../assets/about";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="ui grid">
        <div className="six wide column" id="leftColumn">
          <img className="ui small circular image" src={AthenaProfilePic} />
          <a
            className="ui teal basic button"
            target="_blank"
            href={links.linkedin}
          >
            Resumé
          </a>
          <div className="ui  text menu">
            <a className="item" target="_blank" href={links.linkedin}>
              <i className="linkedin big icon" />
            </a>
            <a className="item" target="_blank" href={links.github}>
              <i className="github big icon" />
            </a>
            <a className="item" href={links.mailto}>
              <i className="envelope outline big icon" />
            </a>
          </div>
          <div className="ui  text menu">
            <a className="item" target="_blank" href={links.instagram}>
              <i className="instagram big icon" />
            </a>
            <a className="item" target="_blank" href={links.facebook}>
              <i className="envelope facebook big icon" />
            </a>
          </div>
        </div>
        <div className="ten wide column" id="rightColumn">
          <p>
            Hi, I'm Athena Liu! I'm a <u>PhD student</u> and a{" "}
            <u>web developer</u> based in Vancouver, Canada.
          </p>
          <p>
            I am currently working towards my doctorial degree{" "}
            <span role="img" aria-label="academic-cap">
              🎓
            </span>{" "}
            in Fluid Mechanics in the{" "}
            <a target="_blank" href={links.ubcfluid}>
              University of British Columbia
            </a>
            .{" "}
          </p>
          <p>
            I have a passion for the latest web technology{" "}
            <span role="img" aria-label="coding">
              💻
            </span>{" "}
            , and am always striving to learn and improve my skills by doing fun
            projects as a hobbyist and as a freelancing developer. My current
            focus is on ReactJS, which I used to build this site!{" "}
          </p>
          <p>
            In my free time, I enjoy cuddling with my cats{" "}
            <span role="img" aria-label="cats">
              🐱🐱
            </span>
            ,{" "}
            <a target="_blank" href={links.vikkivance}>
              Vikki and Vance
            </a>
            , making{" "}
            <a target="_blank" href={links.origami}>
              origami
            </a>{" "}
            and{" "}
            <a target="_blank" href={links.stampcarving}>
              stamp carving
            </a>
            . I am also training to get my blue cord in historical rapier
            fencing{" "}
            <span role="img" aria-label="sword">
              ⚔{" "}
            </span>
            this year.
          </p>{" "}
          <p>
            Feel free to{" "}
            <a href={links.mailto}>
              <u>email me</u>
            </a>{" "}
            if you would like to collaborate on a project, or learn more about
            me.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
