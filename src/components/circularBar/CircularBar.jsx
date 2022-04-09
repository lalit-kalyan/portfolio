import React, { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./circular.scss";

const CircularBar = ({ bSkills, bPercentage }) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    setPercent(bPercentage);
  }, [bPercentage]);
  return (
    <>
      <div className="circularContainer">
        <div className="circularTag">{bSkills}</div>
        <CircularProgressbar
          className="circularbar"
          value={percent}
          text={`${percent}%`}
          circleRatio={1}
          styles={{
            trail: {
              strokeLinecap: "butt",
              transform: "rotate(90deg)",
              transformOrigin: "center center",

              stroke: "#0b3838bb",
            },
            path: {
              strokeLinecap: "rounde",
              transform: "rotate(90deg)",
              transformOrigin: "center center",
              stroke: "#44eaea",
              transition: "stroke-dashoffset 10s ease 0s ",
            },
            text: {
              fill: "rgb(1, 255, 255)",
            },
          }}
          strokeWidth={5}
        />
      </div>
    </>
  );
};

export default CircularBar;
