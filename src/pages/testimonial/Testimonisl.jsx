import React from "react";
import "./testi.scss";
import TestiOne from "../../assets/testi01.jpg";
import TestiTwo from "../../assets/testi02.jpg";
import TestiThree from "../../assets/testi03.jpg";

const Testimonisl = () => {
  return (
    <div id="testimonial" className="testimonial">
      <div className="testCards">
        <div className="cardImg">
          <img src={TestiOne} alt="" />
        </div>

        <div className="csrdText">
          <h3 className="textText">Adya</h3>

          <p className="textText">BLOGER</p>

          <span className="textDesc">
            <p>
             Since Having my new Website built by Lalit Kalyan . we have seen 150% of visiters on my website. Thanks to Mr Lalit Kalyan for hard work.
            </p>
          </span>
        </div>
      </div>

      <div className="testCards">
        <div className="cardImg">
          <img src={TestiTwo} alt="" />
        </div>

        <div className="csrdText">
          <h3 className="textText">ANIRUDH</h3>
          <p className="textText">DIGITAL MARKITING CONSULTANT</p>
          <span className="textDesc">
            <p>
             He has helped me the best with redesigning our website , he not only reduce its loading time but also ensured that it is attractive
            </p>
          </span>
        </div>
      </div>

      <div className="testCards">
        <div className="cardImg">
          <img src={TestiThree} alt="" />
        </div>

        <div className="csrdText">
          <h3 className="textText">SARTHAK</h3>
          <p className="textText">SALES MANAGER</p>
          <span className="textDesc">
            <p>
            It was an absolute pleasure to work with Lalit while building the website. Their expertise, and understanding of the end goal made the process a breeze.I highly recommend him
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Testimonisl;
