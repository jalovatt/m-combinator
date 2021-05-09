import React from 'react';
import { useCharacters } from '../../CharacterContext';
import ApiImage from '../ApiImage';

// 1010354 - Adam Warlock
import './styles.css';

export default ({ id, onClick }) => {
  const character = useCharacters().byId[id];

  return (
    <div className="CharacterCard" data-id={id} onClick={onClick}>
      <ApiImage image={character.thumbnail} size="standard_large" alt={character.name} />
      <span>{character.name.replace(/ \(.+\)$/, '')}</span>
    </div>
  );
};
