import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "../../assets/Images/logo2.png";
import { CiSearch } from "react-icons/ci";
import { FaUserAlt } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";

export default function Header() {
  const [showNav, setShowNav] = useState(true); // Desktop navigation visibility
  const [showMenu, setShowMenu] = useState(false); // Mobile menu visibility

  const handleNavToggle = () => {
  
    setShowMenu((prev) => !prev);
   
  };

  // Function to handle window resize
  const handleResize = () => {
    if (window.innerWidth > 850) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="header-outer-container">
      <div className="header-container">
        <div className="right-header">
          <ul>
            <li>
              <img src={logo} alt="Logo" width="100px" />
            </li>
            {showNav && (
              <div className="navabr">
                <li>Netflix</li>
                <li>Home</li>
                <li>TvShows</li>
                <li>Movies</li>
                <li>Latest</li>
                <li>MyList</li>
                <li>Browse By Language</li>
              </div>
            )}
          </ul>
        </div>
        <div className="left-header">
          <ul>
            <li>
              <CiSearch />
            </li>
            <li>
              <IoMdNotifications />
            </li>
            <li>
              <FaUserAlt />
            </li>
            <li>
              <IoMdArrowDropdown />
            </li>

            <li className="menu" tabIndex="-1" onClick={handleNavToggle}>
              <CiMenuFries />
            </li>
          </ul>
        </div>
      </div>
      {showMenu && (
        <div className="mobile-menu">
          <ul>
            <li onClick={handleNavToggle}>Home</li>
            <li onClick={handleNavToggle}>TvShows</li>
            <li onClick={handleNavToggle}>Movies</li>
            <li onClick={handleNavToggle}>Latest</li>
            <li onClick={handleNavToggle}>MyList</li>
            <li onClick={handleNavToggle}>Browse By Language</li>
          </ul>
        </div>
      )}
    </div>
  );
}
