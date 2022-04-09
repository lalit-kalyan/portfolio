import React, { useState, useEffect } from "react";
import webOne from "../../assets/vec05.jpg";
import "./port.scss";
import PortList from "../../components/portlist/PortList";
import {
  featuredProjects,
  webProjects,
  mobileProjects,
  desingProjects,
} from "../../projects";

const Portfolio = () => {
  const [selected, setSelected] = useState("featured");

  const [data, setData] = useState([]);
 

  const list = [
    {
      id: "featured",
      title: "featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile Apps",
    },
    {
      id: "design",
      title: "Desing",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredProjects);
        break;
      case "web":
        setData(webProjects);
        break;
      case "mobile":
        setData(mobileProjects);
        break;
      case "design":
        setData(desingProjects);
        break;
      default:
        setData(featuredProjects);
    }
  }, [selected]);

  return (
    <div id="portfolio" className="portfolio">
      <h1>
        {" "}
        <span>PORTFOLIO</span>{" "}
      </h1>

      <ul className="portList">
        {list.map((l) => (
          <PortList
            item={l}
            active={selected === l.id}
            setSelected={setSelected}
            id={l.id}
            key={l.title}
          />
        ))}
      </ul>

      <div className="portContainer">
        {data.map((d) => (
          <div className="portContainerItem" key={d.id} >
            <img src={d.img} alt="" className="itemImg" />
            <a className="itemTitile" href={d.url} >{d.title}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
