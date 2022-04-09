import React ,{useEffect ,useRef } from "react";
import "./home.scss";
import Patch from "../../assets/port_patch.png";
import Myimg from "../../assets/portfolio02.png"
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { GoHome, GoStar, GoInfo, GoGlobe, GoMail , GoMortarBoard } from "react-icons/go";
import { init } from "ityped";
import myCV from "../../assets/myCV.pdf"

const Home = () => {
  const textRef = useRef()

  useEffect(()=>{
    init(textRef.current, { showCursor: false, strings: [' Developer', 'Mobile app ' , "Designer" ] })


  },[])
  return (
    <div className="homeContainer" id="home">
      <div className="homeUpper">
        <div className="upperLeft">
          <p>Hello I'am</p>
          <h3>LALIT KALYAN </h3>
          <h4>FullStack <span ref={textRef} ></span> </h4>
          
          
          <div className="upperLeftButton">
            <a className="btnCv" href={myCV} download >Download CV</a>
            <button className="btnTalk" href="#contect" >Let's Talk</button>
          </div>
        </div>
        <div className="upperRight">
          <div className="upperRightPatch">
            <img src={Patch} alt=""  className="patchImg"/>
            <img src={Myimg} alt="" className="profileImg"  />
          </div>
        </div>
      </div>

      <div className="homeSocialMedia">
        <ul className="homeSocialList">
          <li className="homeSocialListitem">
            <i>
              <FaFacebookSquare />
            </i>
          </li>
          <li className="homeSocialListitem">
            <i>
              <FaTwitterSquare />
            </i>
          </li>
          <li className="homeSocialListitem">
            <i>
              <FaYoutube />
            </i>
          </li>
          <li className="homeSocialListitem">
            <i>
              <FaLinkedin />
            </i>
          </li>
          
        </ul>
      </div>
      <div className="homeNavbar">
        <ul className="navbarList">
          <li className="navbarListitems">
            <a href="#home">
              <i>
                <GoHome />
              </i>
            </a>
          </li>

          <li className="navbarListitems">
            <a href="#portfolio">
              <i>
                <GoStar />
              </i>
            </a>
          </li>

          <li className="navbarListitems">
            <a href="#about">
              <i>
                <GoInfo />
              </i>
            </a>
          </li>
          <li className="navbarListitems">
            <a href="#testimonial">
              <i>
                <GoGlobe />
              </i>
            </a>
          </li>
          <li className="navbarListitems">
            <a href="#contact">
              <i>
                <GoMail />
              </i>
            </a>
          </li>
          <li className="navbarListitems">
            <a href="#experience">
              <i>
                <GoMortarBoard />
              </i>
            </a>
          </li>
        </ul>
      </div>
      <div className="homeScroll"  > 
      <a href="#footer">Scroll down</a>
       </div>
    </div>
  );
};

export default Home;
