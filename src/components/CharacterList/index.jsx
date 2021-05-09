import React from 'react';
import { useCharacters } from '../../CharacterContext';
import { useSelectedCharacters } from '../../jotai';
import CharacterListItem from '../CharacterListItem';
import './styles.css';

// Event 29 - Infinity War

export default () => {
  const characters = useCharacters();
  const [selected, updateSelected] = useSelectedCharacters();

  return (
    <div className="CharacterList scrollbar">
      {characters.array.reduce((acc, { id }) => {
        if (!selected.includes(id)) {
          acc.push(<CharacterListItem key={id} id={id} onClick={updateSelected} />);
        }

        return acc;
      }, [])}
    </div>
  );
};
