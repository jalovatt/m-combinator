import React from 'react';
import useMarvelApi from '../../hooks/useMarvelApi';
import ApiImage from '../ApiImage';

export default ({ id }) => {
  const { data, loading, error } = useMarvelApi(`comics/${id}`);

  if (error) { return <h4>Error</h4>; }
  if (loading || !data?.length) { return <h4>Loading...</h4>; }

  const [comic] = data;

  return (
    <div className="ComicCard">
      <ApiImage image={comic.thumbnail} size="portrait_medium" alt={comic.title} />
      <span>{comic.title}</span>
    </div>
  );
};
