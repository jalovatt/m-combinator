import React from 'react';

const sizes = {
  standard_small: { width: '65px', height: '45px' },
  standard_medium: { width: '100px', height: '100px' },
  portrait_small: { width: '50px', height: '75px' },
  portrait_medium: { width: '100px', height: '150px' },
};

export default ({ image: { path, extension }, alt, size = 'standard_small' }) => (
  <img
    className="ApiImage"
    src={`${path}/${size}.${extension}`}
    alt={alt}
    style={sizes[size]}
  />
);
