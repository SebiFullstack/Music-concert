import React from 'react';
import './ScheduleTable.module.css';

const ScheduleTable = () => {
  return (
    <div className="schedule-table">
      <h2>Event Schedule</h2>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Event</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>10:00 AM</td>
            <td>Opening Ceremony</td>
            <td>Main Stage</td>
          </tr>
          <tr>
            <td>12:00 PM</td>
            <td>Live Performance</td>
            <td>Stage 2</td>
          </tr>
          <tr>
            <td>02:00 PM</td>
            <td>Panel Discussion</td>
            <td>Conference Room</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ScheduleTable;
