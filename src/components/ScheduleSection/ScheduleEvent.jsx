import React from 'react';
import './ScheduleEvent.module.css';

const ScheduleEvent = ({ event }) => {
  if (!event || !event.title || !event.description || !event.date || !event.time) {
    return <div className="scheduleEvent">Event data is missing</div>;
  }

  return (
    <div className="scheduleEvent">
      <h3 className="eventTitle">{event.title}</h3>
      <p className="eventDescription">{event.description}</p>
      <div className="eventTime">
        <span>{event.date}</span>
        <span>{event.time}</span>
      </div>
    </div>
  );
};

export default ScheduleEvent;
