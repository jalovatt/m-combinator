import React from 'react';
import './styles.css';

export default ({ image: { path, extension }, alt, size }) => (
  <img
    className={`ApiImage ${size || 'full'}`}
    src={`${path}${size ? `/${size}` : ''}.${extension}`}
    alt={alt}
  />
);
