import React from 'react';

const Adoption = ({ apps }) => {
  return (
    <ul>
      {apps.map(a => (
        <li key={a.name}>{a.name}</li>
      ))}
    </ul>
  );
};

export default Adoption;