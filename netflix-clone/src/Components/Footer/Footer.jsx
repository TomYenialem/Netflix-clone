import React, { useState } from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  const[isSmall,setIssmall]=useState(window.innerWidth<569)
  return (
    <div className={`footer ${isSmall?'container-fluid':'container'}`}>
      <div className="footer-wrapper">
        <div className="row">
          <div className="col-md-12  mt-5">
            <ul className="social-medai-icons">
              <li>
                <FaFacebook />
              </li>
              <li>
                <FaSquareInstagram />
              </li>
              <li>
                <FaYoutube />
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm">
            <ul>
              <li>Audio Descrbition</li>
              <li>Investor Relation</li>
              <li>Legal Notice</li>
              <li>Service code</li>
              <li>&copy; 1997-2024 Netflix Inc.</li>
            </ul>
          </div>
          <div className="col-12 col-sm">
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferance</li>
            </ul>
          </div>
          <div className="col-12 col-sm">
            <ul>
              <li>Gift Cards</li>
              <li>Terms of Uses</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div className="col-12 col-sm">
            <ul>
              <li>Media Cneter</li>
              <li>Privacy</li>
              <li>Contact-us</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
