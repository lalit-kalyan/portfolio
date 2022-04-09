import React from "react";
import FooterBack from "../../assets/footer01.svg";
import "./footer.scss";
import { AiOutlineFacebook ,AiOutlineInstagram, AiOutlineYoutube  } from "react-icons/ai";

const Footer = () => {
  return (
    <div id="footer" className="footer">
      <img src={FooterBack} alt="footerImg" className="footerBack" />

      <div className="footerContainer">
        <h2>LALIT KALYAN </h2>
        <ul className="footerList">
          <li className="footerListItems"> <a href="#home">HOME</a></li>
          <li className="footerListItems"> <a href="#about">ABOUT</a> </li>
          <li className="footerListItems"> <a href="#contact">CONTACT</a> </li>
          <li className="footerListItems"> <a href="#experience">EXPERIENCE</a> </li>
          <li className="footerListItems"> <a href="#portfolio">PORTFOLIO</a> </li>
          <li className="footerListItems"> <a href="#testimonial">TESTIMONIALS</a> </li>
        </ul>
            
            <div className="footerSocial">
              <ul className="socialList" >
              <li className="socialListItems">
                  <i > <AiOutlineFacebook/> </i>
                </li>
                <li className="socialListItems">
                  <i > <AiOutlineInstagram/> </i>
                </li>
                <li className="socialListItems">
                  <i > <AiOutlineYoutube/> </i>
                </li>
              </ul>
            </div>

       <p className="lastLetters" > @lalit_kalyan All rights reserved. </p>
      </div>
    </div>
  );
};

export default Footer;
