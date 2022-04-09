import React from "react";
import "./portList.scss";

const PortList = ({ item, active, setSelected, id }) => {
  
  return (
    <li
      className={active ? "portListItems  active" : "portListItems"}
      onClick={() => setSelected(id)}
    >
      {item.title}
    </li>
  );
};

export default PortList;
