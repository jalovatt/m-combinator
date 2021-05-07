import React from 'react';
import useMarvelApi from '../../hooks/useMarvelApi';
import ApiImage from '../ApiImage';

// 1010354 - Adam Warlock

export default ({ id }) => {
  const { data, loading, error } = useMarvelApi(`characters/${id}`);

  if (error) { return <h4>Error</h4>; }
  if (loading || !data?.length) { return <h4>Loading...</h4>; }

  const [character] = data;
  return (
    <div className="CharacterCard">
      <ApiImage image={character.thumbnail} alt={character.name} />
      <span>{character.name}</span>
    </div>
  );
};
