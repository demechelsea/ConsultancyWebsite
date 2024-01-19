import React from "react";
import "./packages.css";
import Canada from "./Canada";
import Italy from "./Italy";
import ItalyUSA from "./ItalyUSA";
import Austria from "./Austria";

const Packages = () => {
  return (
    <section className="packages section" id="packages">
      <h2 className="section__title">Packages</h2>
      <span className="section__subtitle">Our packages</span>

      <div className="packages__container container grid">
        <Italy />
        <ItalyUSA />
        <Canada />
        <Austria />
      </div>
    </section>
  );
};

export default Packages;
