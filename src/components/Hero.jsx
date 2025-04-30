
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="animated-gradient"></div>
      </div>
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title fade-in">Empowering Innovation with Intelligence</h1>
          <p className="hero-subtitle fade-in">
            We build cutting-edge software solutions that transform businesses and drive growth in the digital era.
          </p>
          <div className="hero-buttons fade-in">
            <a href="#contact" className="btn btn-primary">Get a Quote</a>
            <a href="#services" className="btn btn-secondary">Explore Services</a>
          </div>
        </div>
        <div className="hero-image fade-in">
          <div className="hero-image-container">
            <div className="floating-element el-1"></div>
            <div className="floating-element el-2"></div>
            <div className="floating-element el-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
