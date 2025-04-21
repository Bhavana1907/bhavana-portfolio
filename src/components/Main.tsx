import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import bhavpic from '../assets/images/bhavpic.jpg';


function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={bhavpic} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Bhavana1907" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/bhavanaponnam" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Bhavana Ponnam</h1>
          <p>Aspiring Computer Engineer with a passion for technology</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Bhavana1907" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/bhavanaponnam" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;