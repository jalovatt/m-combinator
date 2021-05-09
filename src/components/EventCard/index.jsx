import React from 'react';
import ApiImage from '../ApiImage';

import './styles.css';

export default ({ event }) => (
  <div className="EventCard">
    <ApiImage image={event.thumbnail} size="standard_fantastic" alt={event.title} />
    <div className="content">
      <h3>{event.title}</h3>
      <h4>
        {event.comics.available}
        &nbsp;issues, from&nbsp;
        {event.start?.split(' ')[0] || 'No start date'}
        &nbsp;to&nbsp;
        {event.end?.split(' ')[0] || 'No end date'}
      </h4>
      <p>{event.description}</p>
    </div>
  </div>
);
