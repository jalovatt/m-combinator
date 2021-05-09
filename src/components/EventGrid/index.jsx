import React from 'react';
import { useCharacterEvents } from '../../hooks/useMarvelApi';
import { useSelectedCharacters } from '../../jotai';
import Err from '../Err';
import EventCard from '../EventCard';
import Loading from '../Loading';
import './styles.css';

export default () => {
  const [selected] = useSelectedCharacters();

  const { data, loading, error } = useCharacterEvents(selected);

  const content = (error && <Err />)
    || (loading && <Loading />)
    || (data?.length && (
      <>
        {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
        <h4>These characters appear together in {data.length} event(s)</h4>
        <div className="content scrollbar">
          {data.map((event) => <EventCard event={event} key={event.id} />)}
        </div>
      </>
    ))
    || null;

  return <div className="EventGrid">{content}</div>;
};
