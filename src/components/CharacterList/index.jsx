import React from 'react';
import { useCharacters } from '../../CharacterContext';
import CharacterListItem from '../CharacterListItem';
import './styles.css';

// Event 29 - Infinity War

export default () => {
  const characters = useCharacters();

  return (
    <div className="CharacterList">
      {characters.array.map(({ id }) => <CharacterListItem key={id} id={id} />)}
    </div>
  );
};
