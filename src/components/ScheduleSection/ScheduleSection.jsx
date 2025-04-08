import React from 'react';
import ScheduleDays from './ScheduleDays';
import ScheduleEvent from './ScheduleEvent';
import ScheduleTable from './ScheduleTable';
import styles from './ScheduleSection.module.css';

function ScheduleSection() {
  return (
    <section className={styles.scheduleSection}>
      <h2>Schedule</h2>
      <ScheduleDays />
      <ScheduleEvent />
      <ScheduleTable />
    </section>
  );
}

export default ScheduleSection;
