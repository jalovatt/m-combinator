import React, { useCallback } from 'react';
import { useSelectedCharacters } from '../../jotai';
import CharacterCard from '../CharacterCard';

import './styles.css';

export default () => {
  const [selected, updateSelected] = useSelectedCharacters();

  const onClick = useCallback(
    (e) => updateSelected(e),
    [],
  );

  return (
    <div className="SelectedCharacters" onClick={onClick}>
      {selected.map((id) => <CharacterCard id={id} key={id} />)}
    </div>
  );
};
