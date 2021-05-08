import React from 'react';
import SelectedCharacters from './components/SelectedCharacters';
import CharacterList from './components/CharacterList';
import EventGrid from './components/EventGrid';
import Footer from './components/Footer';
import Header from './components/Header';
import CharacterContextProvider from './CharacterContext';

import './App.css';

export default () => (
  <div className="App">
    <CharacterContextProvider>
      <Header />
      <SelectedCharacters />
      <CharacterList />
      <EventGrid />
      <Footer />
    </CharacterContextProvider>
  </div>
);
