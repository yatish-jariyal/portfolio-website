import React from "react";
import weatherapp from "../assets/weatherapp.png";
import chess from "../assets/chess.PNG";
import googlekeep from "../assets/googlekeep.PNG";
import ecomm from "../assets/ecomm.PNG";

const data = [
  {
    id: 1,
    title: "Job Application Tracker",
    desc: "A MERN stack application to store interview details at one place.",
    link: "http://google.com",
    image: weatherapp,
    demo: "http://google.com",
  },
  {
    id: 2,
    title: "Online Chess",
    desc:
      "A MERN stack application, which can be played online between 2 people.",
    link: "http://google.com",
    image: chess,
    demo: "http://google.com",
  },
  {
    id: 3,
    title: "E-commerce Website",
    desc: "A full fledged MERN stack app, with admin panel and payment option.",
    link: "http://google.com",
    image: ecomm,
    demo: "http://google.com",
  },
  {
    id: 4,
    title: "Google Keep",
    desc: "A full fledged MERN stack app, with admin panel and payment option.",
    link: "http://google.com",
    image: googlekeep,
    demo: "http://google.com",
  },
  {
    id: 5,
    title: "Weather App",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    link: "http://google.com",
    image: weatherapp,
    demo: "http://google.com",
  },
  {
    id: 6,
    title: "Every Course",
    desc:
      "A MERN stack application which provides all the online computer courses across the internet at on place",
    link: "http://google.com",
    image: weatherapp,
    demo: "http://google.com",
  },
];

const Projects = () => {
  return (
    <>
        <div style={{ backgroundColor: "#01C0AD" }}>
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
        <div class="container">
          <div className="row d-flex justify-content-around p-0">
            {data.map((project) => (
              <div class="card col-4 p-0">
                <div class="face face1">
                  <div class="content">
                    <img src={project.image} alt="" />
                  </div>
                </div>
                <div class="face face2">
                  <div class="content">
                    <p>{project.desc}</p>
                    <a className="mx-1" href={project.link}>
                      Source Code
                    </a>
                    <a href={project.demo}>Live Demo</a>
                  </div>
                </div>
                <div className="card-heading d-flex justify-content-center w-100">
                  <h3 style={{ fontWeight: 700, textAlign: "center" }}>
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
