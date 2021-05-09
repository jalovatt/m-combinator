import React from 'react';
import { useCharacterEvents } from '../../hooks/useMarvelApi';
import { useSelectedCharacters } from '../../jotai';
import EventCard from '../EventCard';
import './styles.css';

export default () => {
  const [selected] = useSelectedCharacters();

  const { data, loading, error } = useCharacterEvents(selected);

  if (error) { return <h4>Error</h4>; }
  if (loading || !data?.length) { return <h4>Loading...</h4>; }

  return (
    <div className="EventGrid">
      <h4>These characters appear together in {data.length} event(s)</h4>
      <div className="content scrollbar">
        {data.map((event) => <EventCard event={event} key={event.id} />)}
      </div>
    </div>
  );
};
