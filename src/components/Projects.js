import React from "react";
import weatherapp from "../assets/weatherapp.png";
import chess from "../assets/chess.PNG";
import googlekeep from "../assets/googlekeep.PNG";
import jobapp  from "../assets/jobapp.png";
import ecomm from "../assets/ecomm.PNG";
import picsome from "../assets/picsome.PNG";

const data = [
  {
    id: 1,
    title: "Job Application Tracker",
    desc: "A MERN stack application to store interview details at one place.",
    link: "https://github.com/yatish-jariyal-au8/JobApplicationTracker",
    image: jobapp,
    demo: "https://job-app-tracker-frontend.herokuapp.com/",
  },
  {
    id: 2,
    title: "Online Chess",
    desc:
      "A MERN stack application, which can be played online between 2 people.",
    link: "https://github.com/yatish-jariyal-au8/Online-Chess",
    image: chess,
    demo: "https://onlinechess-app.herokuapp.com/",
  },
  {
    id: 3,
    title: "E-commerce Website",
    desc: "A full fledged MERN stack app, with admin panel and payment option.",
    link: "https://github.com/yatish-jariyal-au8/Ecommerce-Website",
    image: ecomm,
    demo: "https://digitalcube.herokuapp.com/",
  },
  {
    id: 4,
    title: "Google Keep",
    desc: "Google Keep clone using ReactJs",
    link: "https://github.com/yatish-jariyal-au8/GoogleKeepClone",
    image: googlekeep,
  },
  {
    id: 5,
    title: "Weather App",
    desc: "ReactJs application to check the weather of any city",
    link: "https://github.com/attainu/yatish-jariyal-au8/tree/dev/monthly-tests/November-Test/WeatherApp/weather-app",
    image: weatherapp,
    demo: "https://agile-forest-53257.herokuapp.com/",
  },
  {
    id: 6,
    title: "PicSome",
    desc: "A small e-commerce app built using ReactJs",
    link: "https://github.com/yatish-jariyal-au8/PicSome",
    image: picsome,
  },
];

const Projects = () => {
  return (
    <>
      <div>
        <h1
          style={{
            paddingBottom: "40px",
            paddingTop: "40px",
            fontWeight: 800,
          }}
        >
          Projects
        </h1>
      </div>
      <div className="container m-auto">
        <div className="row d-flex justify-content-around p-0">
          {data.map((project) => (
            <div className="card col-4 p-0">
              <div className="face face1">
                <div className="content">
                  <img src={project.image} alt="" />
                </div>
              </div>
              <div className="face face2">
                <div className="content">
                  <p>{project.desc}</p>
                  <a className="mx-1" href={project.link}>
                    Source Code
                  </a>
                  {project.demo && <a href={project.demo}>Live Demo</a>}
                </div>
              </div>
              <div className="card-heading w-100">
                <h3 style={{ fontWeight: 700, marginRight: '15px'}}>
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
