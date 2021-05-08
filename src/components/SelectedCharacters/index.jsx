import React from 'react';
import { useSelectedCharacters } from '../../jotai';
import CharacterCard from '../CharacterCard';

import './styles.css';

export default () => {
  const [selected, updateSelected] = useSelectedCharacters();

  return (
    <div className="SelectedCharacters" onClick={updateSelected}>
      {selected.map((id) => <CharacterCard id={id} key={id} />)}
    </div>
  );
};
