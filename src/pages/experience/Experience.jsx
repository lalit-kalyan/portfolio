import React from "react";
import Slider from "../../components/slider/Slider";
import CircularBar from "../../components/circularBar/CircularBar";
import "./exp.scss";
import { frontEnd, backEnd } from "../../data";

const Experience = () => {
  const skills = [frontEnd][0];
  const backEndSkills = [backEnd][0];

  return (
    <div id="experience" className="experience">
      <div className="expUpper">
        <p>What Skills I have</p>
        <h3>My Experience</h3>
      </div>

      <div className="expCenter">
        <div className="expCenterLeft">
          {/* slider Item ...................... */}
          {skills.map((s) => (
            <Slider title={s.title} percentage={s.percentage} key={s.id} />
          ))}
          {/* slider Item END...................... */}
        </div>

        <div className="expCenterRight">
          <div className="centerRightItems">
            {backEndSkills.map((b) => (
              <CircularBar  key={b.id}
                bSkills={b.title}  
                  bPercentage={b.percentage}
                 />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
