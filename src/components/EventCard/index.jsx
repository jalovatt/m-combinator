import React from 'react';
import ApiImage from '../ApiImage';

import './styles.css';

const formatEventDate = (date) => new Date(date).toLocaleString('default', { month: 'long', year: 'numeric' });

export default ({ event }) => (
  <div className="EventCard">
    <ApiImage image={event.thumbnail} size="standard_fantastic" alt={event.title} />
    <div className="content">
      <h3>{event.title}</h3>
      <div className="subheading">
        {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
        <h4>{event.comics.available}&nbsp;issues</h4>
        {
          (event.start && event.end)
            ? (
              <h4>
                {`${formatEventDate(event.start)} - ${formatEventDate(event.end)}`}
              </h4>
            )
            : null
        }
      </div>
      <p>{event.description}</p>
    </div>
  </div>
);
