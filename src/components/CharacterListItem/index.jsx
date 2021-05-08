import React from 'react';
import useMarvelApi from '../../hooks/useMarvelApi';
import ApiImage from '../ApiImage';
import './styles.css';

export default ({ id }) => {
  const { data, loading, error } = useMarvelApi(`characters/${id}`);

  if (error) { return <h4>Error</h4>; }
  if (loading || !data?.length) { return <h4>Loading...</h4>; }

  const [character] = data;
  return (
    <div className="CharacterListItem">
      <ApiImage image={character.thumbnail} size="portrait_small" alt={character.name} />
      <span>{character.name}</span>
    </div>
  );
};
