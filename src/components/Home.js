import React from "react";
import { Image } from "react-bootstrap";
import backgroundImg from "../assets/background.jpg";

const Home = () => {
  return (
    <>
      <Image src={backgroundImg} fluid className="bg-image" />
      <div
        className="hero-title d-flex align-items-center justify-content-center"
        style={{ height: "100%" }}
      >
        <div className="bg-text col-auto pl-3">
          <h1
            style={{
              color: "white",
              fontWeight: 700,
              fontSize: "50px",
              bottom: "70px",
            }}
          >
            Hi, I'm Yatish Jariyal
          </h1>
          <h5
            style={{
              color: "#01BCAD",
              fontWeight: 500,
              fontSize: "20px",
              bottom: "70px",
            }}
          >
            I'm a <strong>Fullstack Developer.</strong> and I love what I do.
          </h5>
        </div>
      </div>
    </>
  );
};

export default Home;
