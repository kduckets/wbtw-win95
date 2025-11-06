import React from 'react';

function Icon({ name, onClick, className }) {
  return (
    <img 
      src={`https://raw.githubusercontent.com/React95/React95/HEAD/packages/icons/src/icons/${name}.ico`}
      alt={name}
      className={className}
      onClick={onClick}
      style={{ width: '32px', height: '32px', cursor: 'pointer' }}
    />
  );
}

export default Icon;