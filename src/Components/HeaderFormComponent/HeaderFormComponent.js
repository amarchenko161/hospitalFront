import React from "react";
import logo from "../../source/Vector.png";
import "./HeaderFormComponent.scss";

const HeaderFormComponent = (props) => {
  const { title } = props;
  return (
    <div className="header">
      <div className="header-content">
        <img src={logo} alt="" />
        <p>{title}</p>
      </div>
      <div className="header-button">{props.children}</div>
    </div>
  );
};

export default HeaderFormComponent;
