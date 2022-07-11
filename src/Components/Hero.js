import React from "react";
import { Navigate } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero-component">
        <div className="hero-content">
          <h2 className="hero-heading">Cash-backed confidence</h2>
          <p className="hero-text">
            Make an offer that looks and acts like a cash offer, even when
            you're getting financing.
          </p>
          <div className="hero-button">
            <button type="button" className="hero-btn" onClick={()=>{Navigate('/register')}}>Register</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
