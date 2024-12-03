import React from "react";
import videoBg from "../assets/videoBg.mp4";
import "../scss/homePage.scss";

const HomePage = () => {
  return (
    <div className="main home">
      <div className="overlay"></div>
      <video className="coverVideo" src={videoBg} autoPlay loop muted></video>
      <div className="content">
        <h1>Welcome</h1>
        <p>To my website!</p>
      </div>
    </div>
  );
};

export default HomePage;
