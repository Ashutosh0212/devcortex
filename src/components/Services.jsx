
import React from 'react';
import ServiceCard from './ServiceCard';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: "Custom Software Development",
      description: "Tailored software solutions designed to address your unique business challenges and optimize your operations.",
      icon: "💻"
    },
    {
      title: "AI-Based Software Development",
      description: "Harness the power of artificial intelligence to build intelligent applications that learn and adapt to your business needs.",
      icon: "🤖"
    },
    {
      title: "AI Solutions for Healthcare",
      description: "Specialized AI applications for medical diagnosis, patient care optimization, and healthcare management systems.",
      icon: "🏥"
    },
    {
      title: "Cloud Computing & Serverless",
      description: "Build scalable, resilient cloud infrastructure that optimizes performance while reducing operational costs.",
      icon: "☁️"
    },
    {
      title: "IT Consulting & Digital Transformation",
      description: "Strategic guidance to help your organization navigate digital transformation and technological evolution.",
      icon: "📊"
    },
    {
      title: "Machine Learning & Data Science",
      description: "Extract valuable insights from your data and build predictive models to drive informed business decisions.",
      icon: "📈"
    }
  ];

  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Cutting-edge solutions powered by innovation and expertise</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-item" key={index}>
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
