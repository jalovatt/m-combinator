import React from 'react';
import { useCharacters } from '../../CharacterContext';
import ApiImage from '../ApiImage';

// 1010354 - Adam Warlock
import './styles.css';

export default ({ id }) => {
  const character = useCharacters().byId[id];

  return (
    <div className="CharacterCard" data-id={id}>
      <ApiImage image={character.thumbnail} size="standard_medium" alt={character.name} />
      <span>{character.name}</span>
    </div>
  );
};
