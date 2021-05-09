import React from 'react';
import SelectedCharacters from './components/SelectedCharacters';
import CharacterList from './components/CharacterList';
import EventGrid from './components/EventGrid';
import Footer from './components/Footer';
import Header from './components/Header';

import CharacterContextProvider from './CharacterContext';
import useScreenSize from './hooks/useScreenSize';

import './App.css';

const backgroundUrlBase = 'https://source.unsplash.com/ihbqhutI9x4';

export default () => {
  const [width, height] = useScreenSize();

  return (
    <div
      className="App"
      style={{ '--backgroundUrl': `url('${backgroundUrlBase}/${width}x${height}')` }}
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
};
