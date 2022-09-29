import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";

import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="heading"> 
        <h1 className="heading-name"><span className="icon"><FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon></span> Feel-Better-Fitness</h1>
      <h2>Select Burn and Blast</h2>
    </div>
  );
};

export default Header;
