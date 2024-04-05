import React from 'react';

const TeamMember = ({ name, profilePic }) => {
  const profilePictureStyle = {
    width: '120px', // Adjust the width to your preference
    height: '120px', // Adjust the height to your preference
    borderRadius: '50%', // Creates a circular frame
    overflow: 'hidden', // Ensures the image stays within the circular frame
    margin: '0 auto', // Centers the circular frame horizontally
    justifyContent: 'center', // Centers content horizontally
    alignItems: 'center', // Centers content vertically
  };

  const pictureStyle = {
    width: '100%', // Ensures the image fills the circular frame
    height: '100%', // Ensures the image fills the circular frame
    objectFit: 'cover', // Maintains aspect ratio and covers the entire circular frame
  };

  return (
    <div className="team-member">
      <div style={profilePictureStyle}>
        <img src={profilePic} alt={name} style={pictureStyle} />
      </div>
      <h3>{name}</h3>
    </div>
  );
};

export default TeamMember;
