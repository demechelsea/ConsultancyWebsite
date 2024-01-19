import React from "react";
import "./about.css";
import ConsultancyImg from "../../assets/sheba.jpeg";
import Info from "./Info";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About us</h2>
      <span className="section__subtitle">
        Your Trusted Educational and Visa Consultancy Partner
      </span>
      <div className="about__container container grid">
        <img src={ConsultancyImg} alt="" className="about__img" />

        <div className="about__data">
          <Info />

          <p className="about__description">
            We specialize in guiding Ethiopian students to pursue educational
            opportunities abroad. Our services are fast, reliable, and
            customizable to your needs. With expertise in university
            applications, embassy interview preparation, and travel
            arrangements, we offer 24/7 online support. Your educational journey
            starts with us.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
