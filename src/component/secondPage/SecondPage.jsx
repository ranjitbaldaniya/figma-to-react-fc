import React from "react";
import "./secondPage.css";

const SecondPage = () => {
  const Data = [
    { id: 1, image: "/images/first1.svg" },
    { id: 2, image: "/images/first2.svg" },
    { id: 3, image: "/images/first3.svg" },
    { id: 4, image: "/images/first4.svg" },
    { id: 5, image: "/images/first5.svg" },
    { id: 6, image: "/images/first6.svg" },
  ];
  return (
    <div className="secondpage-div">
      <div className="trusted-div">
        <h2>Trusted by the world’s leading brands</h2>
        <div className="icons-div">
          {Data.map((item) => (
            <>
              <div className="icon-card">
                <img src={item.image} height={64} width={120} />
              </div>
            </>
          ))}
        </div>
        <h3>Effortlessly Hire The World’s Top Remote Developers</h3>
        <div className="remote-card">
          <div className="remote-left">
            <div className="remote-first">
              <div className="remote-icon">
                <img
                  src="./images/user-single.svg"
                  height={32}
                  width={32}
                  alt="user icon"
                />
              </div>
              <div className="remote-heading">
                <h4>Single Developer</h4>
              </div>
            </div>
            <h5>
              Hire 4x faster with vetted <br />
              candidates
            </h5>
            <div className="remote-sub">
              <div className="remote-mark">
                <img
                  src="./images/check.svg"
                  height={11}
                  width={17}
                  alt="check icon"
                />
              </div>
              <div className="remote-pera">
                <span>Fast responses from interview-ready candidates</span>
              </div>
            </div>
            <div className="remote-sub">
              <div className="remote-mark">
                <img
                  src="./images/check.svg"
                  height={11}
                  width={17}
                  alt="check icon"
                />
              </div>
              <div className="remote-pera">
                <span> Top 2% pass technical and communication vetting</span>
              </div>
            </div>
            <div className="remote-sub">
              <div className="remote-mark">
                <img
                  src="./images/check.svg"
                  height={11}
                  width={17}
                  alt="check icon"
                />
              </div>
              <div className="remote-pera">
                <span>Custom fee per hire</span>
              </div>
            </div>
            <div className="remote-btn">
              <button>Hire Developer</button>
            </div>
          </div>
          <div className="remote-right">
            <div className="remote-first-div">
              <div className="remote-icon-team">
                <img
                  src="./images/team.svg"
                  height={32}
                  width={32}
                  alt="user icon"
                />
              </div>
              <div className="remote-heading-right">
                <h4>Scrum Team</h4>
              </div>
            </div>
            <h5>
              Hire 4x faster with vetted <br />
              candidates
            </h5>
            <div className="remote-sub">
              <div className="remote-mark">
                <img
                  src="./images/check.svg"
                  height={11}
                  width={17}
                  alt="check icon"
                />
              </div>
              <div className="remote-pera">
                <span>Fast responses from interview-ready candidates</span>
              </div>
            </div>
            <div className="remote-sub">
              <div className="remote-mark">
                <img
                  src="./images/check.svg"
                  height={11}
                  width={17}
                  alt="check icon"
                />
              </div>
              <div className="remote-pera">
                <span> Top 2% pass technical and communication vetting</span>
              </div>
            </div>
            <div className="remote-sub">
              <div className="remote-mark">
                <img
                  src="./images/check.svg"
                  height={11}
                  width={17}
                  alt="check icon"
                />
              </div>
              <div className="remote-pera">
                <span>Custom fee per hire</span>
              </div>
            </div>
            <div className="remote-btn-right">
              <button>Hire Developer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
