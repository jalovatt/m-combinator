import React from 'react';
import ApiImage from '../ApiImage';

import './styles.css';

export default ({ event }) => (
  <div className="EventCard">
    <ApiImage image={event.thumbnail} size="portrait_medium" alt={event.title} />
    <div className="content">
      <h3>{event.title}</h3>
      <h4>
        {event.comics.available}
        &nbsp;
        issues
      </h4>
      <h4>{event.start?.split(' ')[0] || 'No start date'}</h4>
      <h4>{event.end?.split(' ')[0] || 'No end date'}</h4>
    </div>
  </div>
);
