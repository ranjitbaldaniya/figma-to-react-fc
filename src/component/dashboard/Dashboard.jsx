import React from "react";
import "./dashboard.css";

const Dashboard = () => {
  const Data = [
    { id: 1, image: "/images/Group1.svg", heading: "50,000+", desc: "Talents" },
    { id: 2, image: "/images/Group2.svg", heading: "Top 3.5%", desc: "Vetted" },
    { id: 2, image: "/images/Group3.svg", heading: "5+", desc: "Time Zones" },
    { id: 2, image: "/images/Group4.svg", heading: "40%", desc: "Save Cost" },
    { id: 2, image: "/images/Group5.svg", heading: "5 days", desc: "Hiring" },
  ];
  return (
    <div className="home-div">
      <div className="absolute-div">
        <h1 className="main-heading">
          Engage <span style={{ color: "#F9DE58" }}>India’s</span> Top Talent
          For
          <br /> Your Global Hiring Needs.
        </h1>

        <p className="main-pera">
          At Oben, our flexible engagement models enable us to deliver bespoke
          <br />
          outsourcing solutions that exceed the expectations of our clients
          every time.
        </p>
        <div className="main-btn">
          <button>Hire Developers</button>
        </div>
        <div className="cards-div" >
          {Data.map((item) => (
            <div className="single-card" key={item.id}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img src={item.image} alt="icon image" height={43} width={43} />
              </div>
              <h2>{item.heading}</h2>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="left-img">
        <img
          src="/images/homedecore.png"
          alt="left image"
          height="500px"
          width={150}
        />
      </div>
      <div className="right-img">
        <img
          src="/images/homedecore.png"
          alt="right image"
          height="500px"
          width={150}
        />
      </div>
    </div>
  );
};

export default Dashboard;
