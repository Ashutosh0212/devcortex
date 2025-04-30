
import React from 'react';
import './About.css';

const About = () => {
  const values = [
    {
      title: "Innovation",
      description: "We constantly explore new technologies and methodologies to deliver cutting-edge solutions."
    },
    {
      title: "Excellence",
      description: "We strive for the highest quality in everything we do, from code to client communication."
    },
    {
      title: "Customer-Centricity",
      description: "Our clients' success is our success. We build lasting partnerships through trust and transparency."
    }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About DevCortex</h2>
          <p className="section-subtitle">Driving digital innovation through intelligence and expertise</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <h3>Our Mission</h3>
            <p>
              At DevCortex, our mission is to empower businesses through innovative technology solutions that drive growth, efficiency, and competitive advantage in an increasingly digital world.
            </p>
            
            <h3>Our Vision</h3>
            <p>
              We envision a future where every organization, regardless of size or industry, can harness the full potential of cutting-edge technologies to achieve their business objectives and create meaningful impact.
            </p>
            
            <h3>Core Values</h3>
            <div className="values-grid">
              {values.map((value, index) => (
                <div className="value-card" key={index}>
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="about-image">
            <div className="about-image-container">
              <div className="image-shape shape-1"></div>
              <div className="image-shape shape-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
