import React from 'react';

const Heading = ({ name, title }) => {
  return (
    <div className="heading">
      <h2>{name}</h2>
      <p>{title}</p>
    </div>
  );
};

export default Heading;