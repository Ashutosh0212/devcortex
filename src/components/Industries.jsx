
import React from 'react';
import IndustryCard from './IndustryCard';
import './Industries.css';

const Industries = () => {
  const industries = [
    {
      title: "Healthcare",
      description: "Transforming patient care with intelligent solutions for diagnosis, treatment planning, and healthcare management.",
      icon: "🏥"
    },
    {
      title: "Finance",
      description: "Secure, scalable systems for financial institutions focusing on fraud detection, risk management, and customer experience.",
      icon: "💰"
    },
    {
      title: "Education",
      description: "Innovative platforms that enhance learning experiences and streamline educational administration processes.",
      icon: "🎓"
    },
    {
      title: "Retail",
      description: "Data-driven solutions for inventory management, customer analytics, and personalized shopping experiences.",
      icon: "🛍️"
    },
    {
      title: "Manufacturing",
      description: "Intelligent systems for predictive maintenance, quality control, and optimized production workflows.",
      icon: "🏭"
    }
  ];

  return (
    <section id="industries" className="section industries-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Industries We Serve</h2>
          <p className="section-subtitle">Tailored solutions for diverse business sectors</p>
        </div>
        
        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div className="industry-item" key={index}>
              <IndustryCard
                title={industry.title}
                description={industry.description}
                icon={industry.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
