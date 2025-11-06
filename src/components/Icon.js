// src/components/Icon.js
import React from 'react';

function Icon({ name, className, onClick }) {
  // Since icon names have underscores and can't be imported directly,
  // we'll render them as img elements using the CDN or local paths
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