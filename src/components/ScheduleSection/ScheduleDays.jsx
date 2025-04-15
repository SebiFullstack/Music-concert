import React from 'react';
import styles from './ScheduleDays.module.css';

const ScheduleDays = ({ days, activeDay, setActiveDay }) => {
  return (
    <div className={styles.scheduleContainer}>
      <h2 className={styles.scheduleTitle}>Event Schedule</h2>
      <div className={styles.daysContainer}>
        {days.map((day, index) => (
          <div
            key={index} 
            className={`${styles.dayTab} ${activeDay === index + 1 ? styles.active : ''}`}
            onClick={() => setActiveDay(index + 1)}
          >
            <h3 className={styles.dayTitle}>{day.day}</h3>
            <p className={styles.dayDate}>{day.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleDays;