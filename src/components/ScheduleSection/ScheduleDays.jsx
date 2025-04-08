import React from 'react';
import './ScheduleDays.module.css';

const ScheduleDays = () => {
  const days = [
    { day: 'Monday', time: '10:00 AM - 5:00 PM' },
    { day: 'Tuesday', time: '10:00 AM - 5:00 PM' },
    { day: 'Wednesday', time: '10:00 AM - 5:00 PM' },
    { day: 'Thursday', time: '10:00 AM - 5:00 PM' },
    { day: 'Friday', time: '10:00 AM - 5:00 PM' },
    { day: 'Saturday', time: 'Closed' },
    { day: 'Sunday', time: 'Closed' }
  ];

  return (
    <div className="scheduleDays">
      <h2>Our Schedule</h2>
      <ul className="scheduleList">
        {days.map((schedule, index) => (
          <li key={index} className="scheduleItem">
            <span className="day">{schedule.day}</span>
            <span className="time">{schedule.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScheduleDays;
