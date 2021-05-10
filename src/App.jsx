import React from 'react';
import SelectedCharacters from './components/SelectedCharacters';
import CharacterList from './components/CharacterList';
import EventGrid from './components/EventGrid';
import Footer from './components/Footer';
import Header from './components/Header';

import CharacterContextProvider from './CharacterContext';

import './App.css';

export default () => (
  <div
    className="App"
    style={{
      '--backgroundUrl': `url('https://source.unsplash.com/ihbqhutI9x4/${window.innerWidth}x${window.innerHeight}')`,
    }}
  >
    <CharacterContextProvider>
      <Header />
      <SelectedCharacters />
      <CharacterList />
      <EventGrid />
      <Footer />
    </CharacterContextProvider>
  </div>
);
