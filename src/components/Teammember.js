import React from 'react';

const TeamMember = ({ name, profilePic }) => {
  return (
    <div className="team-member">
      <img src={profilePic} alt={name} className="profile-picture" />
      <h3>{name}</h3>
    </div>
  );
};

export default TeamMember;
