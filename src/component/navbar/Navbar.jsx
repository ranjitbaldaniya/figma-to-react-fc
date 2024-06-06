import React from "react";
import "./Nav.css";
const Navbar = () => {
  return (
    <div className="header">
      <div className="logo-div">
        <h2>Logo</h2>
      </div>
      <div className="menu-div">
        <ul>
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>HIRE DEVELOPER</li>
          <li>HOW WE WORK</li>
          <li>WHY IDIA</li>
        </ul>
      </div>
      <div className="btn-div">
        <button className="conatct-btn">Contact us</button>
        <button className="talk-btn">Let's Talk</button>
      </div>
    </div>
  );
};

export default Navbar;
