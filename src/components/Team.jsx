
import React from 'react';
import TeamMember from './TeamMember';
import './Team.css';

const Team = () => {
  // Using placeholder images
  const defaultImage = "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
  
  // Additional placeholder images for variation
  const placeholderImages = [
    "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
  ];
  
  const teamMembers = [
    {
      name: "Ashutosh Gupta",
      email: "ashutosh@devcortex.com",
      education: "PhD - Computer Science, IIT Jodhpur",
      image: placeholderImages[0]
    },
    {
      name: "Sachin Singh",
      email: "sachin@devcortex.com",
      education: "MTech CSE, IIT Jodhpur",
      image: placeholderImages[1]
    },
    {
      name: "Richard David",
      email: "richard@devcortex.com",
      education: "MTech CSE, IIT Jodhpur",
      image: placeholderImages[2]
    }
  ];

  return (
    <section id="team" className="team-section section">
      <div className="container">
        <h2 className="section-title text-center">Our Team</h2>
        <p className="section-subtitle text-center">
          Meet the brilliant minds behind DevCortex's innovative solutions
        </p>
        
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              email={member.email}
              education={member.education}
              image={member.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
