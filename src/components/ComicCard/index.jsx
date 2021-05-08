import React from 'react';
import useMarvelApi from '../../hooks/useMarvelApi';
import ApiImage from '../ApiImage';

import './styles.css';

export default ({ id }) => {
  const { data, loading, error } = useMarvelApi(`comics/${id}`);

  if (error) { return <h4>Error</h4>; }
  if (loading || !data?.length) { return <h4>Loading...</h4>; }

  const [comic] = data;

  const [, title, issue] = comic.title.match(/(.+) (#\d+)$/);
  const [date] = comic.dates.find((d) => d.type === 'onsaleDate').date.split('T');

  return (
    <div className="ComicCard">
      <ApiImage image={comic.thumbnail} size="portrait_medium" alt={comic.title} />
      <div className="content">
        <h3>{title}</h3>
        <h4>{issue}</h4>
        <h4>{date}</h4>
      </div>
    </div>
  );
};
