
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Industries from '../components/Industries';
import Team from '../components/Team';
import About from '../components/About';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <Hero />
      <Services />
      <Industries />
      <Team />
      <About />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
