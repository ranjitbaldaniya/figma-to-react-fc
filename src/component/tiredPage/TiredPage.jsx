import React from "react";
import "./tiredPage.css";

const TiredPage = () => {
  return (
    <div className="maindiv">
      <div className="main-heading1">
        <h4>
          Hire Our <span>Dedicated</span> Expert Developers
        </h4>
      </div>

      <div className="icons-div">
        <div className="btn-div">
          <ul>
            <li>Mobile</li>
            <li>Front-End</li>
            <li>Datbase</li>
            <li>Backend</li>
            <li>CMS</li>
            <li>DevOps</li>
          </ul>
        </div>
      </div>

      <div className="cards-div1">
        <div className="first-row">
          <div className="card">
            <img src="./images/item1.svg" alt="svg images" />
          </div>
          <div className="card">
            <img src="./images/item2.svg" alt="svg images" />
          </div>
          <div className="card">
            <img src="./images/item3.svg" alt="svg images" />
          </div>
          <div className="card">
            <img src="./images/item4.svg" alt="svg images" />
          </div>
          <div className="card">
            <img src="./images/item5.svg" alt="svg images" />
          </div>
          <div className="card">
            <img src="./images/item6.svg" alt="svg images" />
          </div>
        </div>
      </div>

      <div className="cards-div2">
        <div className="first-row" style={{ marginBottom: "20px" }}>
          <div className="card">
            <img src="./images/item7.svg" alt="svg images" />
          </div>
          <div className="card">
            <img src="./images/item8.svg" alt="svg images" />
          </div>
          <div className="card">
            <img src="./images/item9.svg" alt="svg images" />
          </div>
          <div className="card">
            <img src="./images/item10.svg" alt="svg images" />
          </div>
        </div>
      </div>

      <div className="banner-row">
        <img
          src="./images/CTA.svg"
          alt="svg images"
          width="100%"
          height="auto"
        />
      </div>
    </div>
  );
};

export default TiredPage;
