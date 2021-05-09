import React from 'react';
import { useCharacters } from '../../CharacterContext';
import ApiImage from '../ApiImage';
import './styles.css';

export default ({ id }) => {
  const character = useCharacters().byId[id];

  return (
    <div className="CharacterListItem" data-id={id}>
      <ApiImage image={character.thumbnail} size="standard_medium" alt={character.name} />
      <span>{character.name.replace(/ \(.+\)$/, '')}</span>
    </div>
  );
};
