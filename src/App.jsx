import React from 'react';
import SelectedCharacters from './components/SelectedCharacters';
import CharacterList from './components/CharacterList';
import ComicGrid from './components/ComicGrid';
import Footer from './components/Footer';
import Header from './components/Header';

import './App.css';

export default () => (
  <div className="App">
    <Header />
    <SelectedCharacters />
    <CharacterList />
    <ComicGrid />
    <Footer />
  </div>
);
