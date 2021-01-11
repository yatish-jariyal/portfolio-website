import React from "react";
import css from "../assets/icons/css.svg";
import html from "../assets/icons/html.svg";
import javascript from "../assets/icons/javascript.svg";
import python from "../assets/icons/python.svg";
import react from "../assets/icons/react.svg";
import mongodb from "../assets/icons/mongodb.svg";
import nodejs from "../assets/icons/nodejs.svg";
import github from "../assets/icons/github.svg";
import Fade from "react-reveal/Fade"; 

const Skills = () => {
  return (
    <>
      <Fade big>
        <div>
          <h1
            style={{
              textAlign: "center",
              paddingBottom: "50px",
              paddingTop: "50px",
              fontWeight: 800,
            }}
          >
            Technologies
          </h1>
        </div>

        <div className="skills-box row align-items-center">
          <div className="col" style={{}}>
            <img
              className="img-fluid"
              src={html}
              alt=""
              style={{ height: 90 }}
            />
          </div>
          <div className="col" style={{}}>
            <img
              className="img-fluid"
              src={css}
              alt=""
              style={{ height: 90 }}
            />
          </div>
          <div className="col" style={{}}>
            <img
              className="img-fluid"
              src={javascript}
              alt=""
              style={{ height: 90 }}
            />
          </div>
          <div className="col" style={{}}>
            <img
              className="img-fluid"
              src={nodejs}
              alt=""
              style={{ height: 90 }}
            />
          </div>
          <div className="col" style={{}}>
            <img
              className="img-fluid"
              src={react}
              alt=""
              style={{ height: 90 }}
            />
          </div>
          <div className="col" style={{}}>
            <img
              className="img-fluid"
              src={python}
              alt=""
              style={{ height: 90 }}
            />
          </div>
          <div className="col" style={{}}>
            <img
              className="img-fluid"
              src={mongodb}
              alt=""
              style={{ height: 90 }}
            />
          </div>
          <div className="col" style={{}}>
            <img
              className="img-fluid"
              src={github}
              alt=""
              style={{ height: 90 }}
            />
          </div>
        </div>
      </Fade>
    </>
  );
};

export default Skills;
