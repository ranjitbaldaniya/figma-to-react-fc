import React from "react";
import "./fourthPage.css";

const FourthPage = () => {
  return (
    <div className="fourthPage">
      <div className="fourthPageHeading">
        <h2>
          Every talent in <span className="highlight">our network</span> is
          pre-vetted <br /> and qualified on below parameters.
        </h2>
      </div>

      <div className="fourthPenal">
        <div className="leftpenal">
          <div className="checkdiv">
            <img
              src="./images/checkmark.svg"
              height="20px"
              width="20px"
              alt="check svg"
            />
          </div>
          <div className="checkcontent">
            <div className="checkHeding">
              <h3>
                Excellent <br />
                Communication
              </h3>
            </div>
            <div className="checkPera">
              <p>
                Vetted through a world-leading AI-powered English communication
                test that assesses speaking, listening, reading, writing,
                pronunciation, fluency, clarity of expression, and speed of
                speech.
              </p>
            </div>
          </div>
          <div className="checkdiv">
            <img
              src="./images/checkmark.svg"
              height="20px"
              width="20px"
              alt="check svg"
            />
          </div>
          <div className="checkcontent">
            <div className="checkHeding">
              <h3>Culturally Fit</h3>
            </div>
            <div className="checkPera">
              <p>
                Compatible to adapt, understand, & adjust accordingly with
                company’s core values, vision, principle, identity.
              </p>
            </div>
          </div>
        </div>
        <div className="rightpenal">
          <img
            src="./images/RightOne.png"
            alt="right png image"
            width="396px"
            height="347px"
          />
        </div>
      </div>
      <div className="fourthPenal" style={{ marginTop: "20px" }}>
        <div className="rightPenal">
          <img
            src="./images/LeftOne.png"
            alt="right png image"
            width="396px"
            height="347px"
          />
        </div>
        <div className="leftpenal" style={{ marginLeft: "40px" }}>
          <div className="checkdiv">
            <img
              src="./images/checkmark.svg"
              height="20px"
              width="20px"
              alt="check svg"
            />
          </div>
          <div className="checkcontent">
            <div className="checkHeding ">
              <h3>
                Technically <br />
                Super Sound
              </h3>
            </div>
            <div className="checkPera">
              <p>
                Each candidate goes through a minimum 5-hour rigorous skill
                assessment curated uniquely as per the role.
              </p>
            </div>
          </div>
          <div className="checkdiv">
            <img
              src="./images/checkmark.svg"
              height="20px"
              width="20px"
              alt="check svg"
            />
          </div>
          <div className="checkcontent">
            <div className="checkHeding">
              <h3>Available across time zones</h3>
            </div>
            <div className="checkPera">
              <p>
                Uplers network has talents working across different time zones,
                hence, we have someone to fit your local time zone and ready to
                join you in as less as 5 days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthPage;
