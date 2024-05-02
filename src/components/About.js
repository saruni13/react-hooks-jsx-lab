import React from "react";
import { image } from "../data/data";


const About = () => {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>React.js is so much fun</p>
      <img src={image} alt="I made this" />
    </div>
  );
};

export default About;