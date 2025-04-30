
import React from 'react';
import './TeamMember.css';

const TeamMember = ({ name, email, education, image }) => {
  return (
    <div className="team-member">
      <div className="member-image">
        <img src={image} alt={name} />
      </div>
      <div className="member-info">
        <h3 className="member-name">{name}</h3>
        <p className="member-email">{email}</p>
        <p className="member-education">{education}</p>
      </div>
    </div>
  );
};

export default TeamMember;
