import React from 'react';
import CharacterCard from './components/CharacterCard';
import ComicCard from './components/ComicCard';

export default () => (
  <div className="App">
    <h1>This is my project</h1>
    <CharacterCard id="1010354" />
    <ComicCard id="14077" />
  </div>
);
