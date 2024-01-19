import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-dollar-circle about__icon"></i>
        <h3 className="about__title">Affordable Packages</h3>
        <span className="about__subtitle">Starting from 60k</span>
      </div>

      <div className="about__box">
        <i className="bx bx-line-chart about__icon"></i>
        <h3 className="about__title">Proven Success</h3>
        <span className="about__subtitle">95% success rate</span>
      </div>

      <div className="about__box">
        <i className="bx bx-globe about__icon"></i>
        <h3 className="about__title">Global Opportunities</h3>
        <span className="about__subtitle">Choose from 5+ countries</span>
      </div>

      <div className="about__box">
        <i className="bx bx-shield about__icon"></i>
        <h3 className="about__title">Data Protection</h3>
        <span className="about__subtitle">Your data is secure with us</span>
      </div>

      <div className="about__box">
        <i className="bx bx-chat about__icon"></i>
        <h3 className="about__title">Personalized Guidance</h3>
        <span className="about__subtitle">Friendly support</span>
      </div>

      <div className="about__box">
        <i className="bx bx-support about__icon"></i>
        <h3 className="about__title">24/7 Support</h3>
        <span className="about__subtitle">Always here for you</span>
      </div>
    </div>
  );
};

export default Info;
