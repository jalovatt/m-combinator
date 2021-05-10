import React from 'react';
import { useCharacters } from '../../CharacterContext';
import ApiImage from '../ApiImage';

import './styles.css';

const variantImageSizes = {
  small: 'standard_medium',
  large: 'standard_large',
};

export default ({ id, variant, onClick }) => {
  const character = useCharacters().byId[id];

  return (
    <button type="button" className={`Character variant-${variant}`} data-id={id} onClick={onClick}>
      <ApiImage
        image={character.thumbnail}
        size={variantImageSizes[variant]}
        alt={character.name}
      />
      <span>{character.name.replace(/ \(.+\)$/, '')}</span>
    </button>
  );
};
