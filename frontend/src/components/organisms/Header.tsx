import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

// data
import customData from "../../data.json";

// images
import logo from "../../assets/images/logo.jpg";

// components
import openMenu from "../../assets/images/menu.png";
import closeMenu from "../../assets/images/close.png";

// style
import { StyledHeader } from "../../globalStyles";

const Header = () => {
  // hooks

  // state
  const [click, setClick] = useState(false);
  // ref

  // custom functions
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <StyledHeader id="home">
      <div className={click ? "main-container" : ""} onClick={() => Close()} />

      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <a href="/" className="nav-links d-flex align-items-center">
            <img src={logo} alt="" />
          </a>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <Link to="/" className="nav-item">
              {customData.header.home}
            </Link>
            <Link to="/post-campaign" className="nav-item">
              {customData.header.post}
            </Link>
          </ul>
          <div className="nav-icon " onClick={handleClick}>
            {click ? (
              <img src={closeMenu} alt="close mobile menu" />
            ) : (
              <img src={openMenu} alt="menu hamburger" />
            )}
          </div>
        </div>
      </nav>
    </StyledHeader>
  );
};

export default Header;
