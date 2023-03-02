import React from "react";
import iconSun from "../images/icon-sun.svg";
import iconMoon from "../images/icon-moon.svg"

const Header = ({ theme, handleChangeTheme }) => {
  return (
    <div className="header">
      <span>T O D O</span>
      {theme === "light" ? (
        <img src={iconMoon} alt="" onClick={handleChangeTheme} />
      ) : (
        <img src={iconSun} alt="" onClick={handleChangeTheme} />
      )}
    </div>
  );
};

export default Header;
