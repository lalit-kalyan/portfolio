import React from "react";
import "./about.scss";
import Me from "../../assets/port04.png";
import { FaAward, FaUserFriends } from "react-icons/fa";
import { GiBookshelf } from "react-icons/gi";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="aboutLeft">
        <div className="imgBox"></div>
        <img src={Me} alt="" className="aboutleftImg" />
      </div>

      <div className="aboutRight">
        <div className="aboutTitle">
          <p>Get To Know</p>
          <h2>About Me</h2>
        </div>

        <div className="aboutBoxContainer">
          <div className="aboutBox">
            <i>
              <FaAward />
            </i>
            <h3>Experience</h3>
            <p>2+ years working</p>
          </div>

          <div className="aboutBox">
            <i>
              <FaUserFriends />
            </i>
            <h3>Clients</h3>
            <p>100+ Worldwide </p>
          </div>

          <div className="aboutBox">
            <i>
              <GiBookshelf />
            </i>
            <h3>Projects</h3>
            <p>30+ Projects </p>
          </div>
        </div>

        <div className="aboutBoxDesc">
          <p>I am a MERN stack developer , Innovative  and task-driven with 2+ years experiancs in web design and development across diverse industies.I am comfortable with Object oriented Programming .
          . I designed and deploy number of projects with satisfied customer  
          </p>
        </div>
        <div className="divButton">
          <button>Let's Talk</button>
        </div>
      </div>
    </div>
  );
};

export default About;
