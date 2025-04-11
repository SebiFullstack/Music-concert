import React, { useState } from 'react';
import styles from './ScheduleSection.module.css';
import ScheduleDays from './ScheduleDays';
import ScheduleTable from './ScheduleTable';

const ScheduleSection = () => {
  const [activeDay, setActiveDay] = useState(1);

  const days = [
    { day: 'Day 01', date: '16 August' },
    { day: 'Day 02', date: '17 August' },
    { day: 'Day 03', date: '18 August' },
  ];

  return (
    <section className={styles.scheduleSection}>
      <ScheduleDays days={days} activeDay={activeDay} setActiveDay={setActiveDay} />
      <ScheduleTable activeDay={activeDay} />
    </section>
  );
};

export default ScheduleSection;