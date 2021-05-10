import React from 'react';
import { useSelectedCharacters } from '../../jotai';
import Character from '../Character';

import './styles.css';

export default () => {
  const [selected, updateSelected] = useSelectedCharacters();

  return !selected.length
    ? (
      <div className="SelectedCharacters">
        <h4 className="selectMessage">Select up to four characters from the list to see events in which they all appear</h4>
      </div>
    )
    : (
      <div className="SelectedCharacters">
        {selected.map((id) => <Character id={id} key={id} variant="large" onClick={updateSelected} />)}
      </div>
    );
};
