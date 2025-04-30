
import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="service-card">
      <div className="service-icon">{icon}</div>
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
      <div className="service-link">
        <a href="#contact">Learn more</a>
      </div>
    </div>
  );
};

export default ServiceCard;
