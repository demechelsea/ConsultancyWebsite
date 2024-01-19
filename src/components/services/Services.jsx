import React, { useState } from "react";
import servicesData from "./servicesData";
import "./services.css";

// ... (previous code)

const Services = () => {
  const [toggleState, setToggleState] = useState(-1); // Set initial state to -1

  const toggleTab = (index) =>
    setToggleState((prevToggleState) =>
      prevToggleState === index ? -1 : index
    );

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What We Offer</span>
      <div className="services__container container grid">
        {servicesData.map((service, index) => (
          <div className="services__content" key={index}>
            <div>
              <i className={`uil ${service.icon} services__icon`}></i>
              <h3 className="services__title">{service.title}</h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(index)}>
              {service.buttonText}
              <i
                className={`uil ${service.buttonIcon} services__button-icon`}
              ></i>
            </span>

            <div
              className={
                toggleState === index
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <i
                  onClick={() => toggleTab(-1)}
                  className="uil uil-times services__modal-close"
                ></i>

                <h3 className="services__modal-title">{service.modalTitle}</h3>
                <p className="services__modal-description">
                  {service.modalDescription}
                </p>

                <ul className="services__modal-services grid">
                  {service.modalServices.map((item, itemIndex) => (
                    <li className="services__modal-service" key={itemIndex}>
                      <i
                        className={`uil ${item.icon} services__modal-icon`}
                      ></i>
                      <p className="services__modal-info">{item.info}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
