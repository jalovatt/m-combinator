import React, { useEffect, useState, useContext } from 'react';
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

  return (
    <Context.Provider value={characters}>
      {
        (error && <h4>Error</h4>)
        || ((loading || !characters?.array.length) && <h4>Loading...</h4>)
        || children
      }
    </Context.Provider>
  );
};
