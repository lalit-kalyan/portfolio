import React, { useEffect, useState } from "react";
import "./slider.scss";

const Slider = ({ title, percentage }) => {
  const [style, setStyle] = useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: percentage+ "%",
    };
    setStyle(newStyle);
  }, 2000);
  

  return (
    <>
      <div className="exptleftItems">
        <p>{title}</p>
        <span className="barHolder">
          <span className="barSlider" style={style}></span>
        </span>
        <h4>{percentage}%</h4>
      </div>
    </>
  );
};

export default Slider;
