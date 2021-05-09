import React, { useEffect, useState, useContext } from 'react';
import Err from './components/Err';
import Loading from './components/Loading';
import { useMarvelApi } from './hooks/useMarvelApi';

const Context = React.createContext({});

export const useCharacters = () => useContext(Context);

export default ({ children }) => {
  const [characters, setCharacters] = useState();
  const { data, loading, error } = useMarvelApi('events/29/characters');

  useEffect(() => {
    if (!data) { return; }

    const formatted = data.reduce((acc, { id, name, thumbnail }) => {
      const obj = { id, name, thumbnail };

      acc.array.push(obj);
      acc.byId[id] = obj;

      return acc;
    }, { array: [], byId: {} });

    setCharacters(formatted);
  }, [data]);

  const content = (error && <Err />)
  || (loading && <Loading />)
  || (characters?.array.length && children)
  || null;

  return <Context.Provider value={characters}>{content}</Context.Provider>;
};
