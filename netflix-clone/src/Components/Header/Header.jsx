import React from 'react'
import './Header.css'
import logo from '../../assets/Images/logo2.png'
import { CiSearch } from "react-icons/ci";
import { FaUserAlt } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Header() {
  return (
    <div className='header-outer-container'>
        
      <div className="header-container">
        <div className="right-header">
            <ul>
                <li><img src={logo} alt="Logo"  width='100px'/></li>
                <li>Netflix</li>
                <li>Home</li>
                <li>TvShows</li>
                <li>Movies</li>
                <li>Latest</li>
                <li>MyList</li>
                <li>Browse By Language</li>
            </ul>
        </div>
        <div className="left-header">
<ul>
    <li><CiSearch/></li>
    <li><IoMdNotifications/></li>
    <li><FaUserAlt/></li>
    <li><IoMdArrowDropdown/></li>
</ul>
        </div>
      </div>
    </div>
  );
}
