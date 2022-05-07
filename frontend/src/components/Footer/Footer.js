import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <span>JavaScript</span>
      <span>React</span>
      <span>Express</span>
      <span>HTML</span>
      <span>CSS</span>
      <span>Redux</span>
      <span>JSX</span>

      <div className="socialIcons">
        <a href="https://github.com/midknightsurfer">
          <i class="fa-brands fa-github-square fa-beat"></i>
        </a>
        <a href="http://www.hirethedeveloper.com">hirethedeveloper.com</a>
        <a href="https://www.linkedin.com/in/beau-ferguson-387a40112/">
          <i class="fa-brands fa-linkedin fa-beat"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
