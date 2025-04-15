import React from 'react';
import styles from './ScheduleTable.module.css';
import ScheduleEvent from './ScheduleEvent';

const ScheduleTable = ({ activeDay }) => {
  const events = {
    1: [
      {
        time: '11:00 AM to 12:00 PM',
        content: 'Vestibulum vel eros vel metus lacinia feugiat a\n' +
        'nec metus.',
        speaker: {
          name: 'Yui Ronald',
          booth: 'Booth: 2F12',
          avatar: '/img/Avatar.svg', 
        },
        status: 'preview',
      },
      {
        time: '12:00 PM to 03:00 PM',
        content:
        'Duis nec sodales nibh. Proin lectus tortor,\n' +
        'rutrum vel vulputate vitae, fringilla id magna.\n' +
        'Vestibulum ornare eget urna nec pulvinar.\n' +
        'Praesent porttitor convallis blandit. Fusce vel\n' +
        'egestas dolor. Donec eu augue enim. Donec\n' +
        'rutrum non lacus ac rhoncus. Morbi quis luctus\n' +
        'leo, nec cursus ex.',
speaker: [
          { name: 'Bob John', booth: 'Booth: 3G12', avatar: '/img/Avatar-2.svg' }, 
          { name: 'Yui Ronald', booth: 'Booth: 2F12', avatar: '/img/Avatar-3.svg' }, 
          { name: 'Emma Satoshi', booth: 'Booth: 2A35', avatar: '/img/Avatar-4.svg' },
        ],
        status: 'live',
      },
      {
        time: '03:00 PM to 04:00 PM',
        content: 'Vestibulum vel eros vel metus lacinia feugiat a\n' +
        'nec metus.',
        speaker: [
          { name: 'Sasha Jackson', booth: 'Booth: 2F18', avatar: '/img/Avatar-5.svg' }, 
          { name: 'Diana Brock', booth: 'Booth: 2F24', avatar: '/img/Avatar-6.svg' }, 
        ],
        status: 'upcoming',
      },
    ],
    2: [
      {
        time: '11:00 AM to 12:00 PM',
        content: 'Vestibulum vel eros vel metus lacinia feugiat a\n' +
        'nec metus.',
        speaker: {
        name: 'Yui Ronald',
        booth: 'Booth: 2F12',
        avatar: '/img/Avatar.svg',
        },
        status: 'preview',
      },
      {
        time: '12:00 PM to 03:00 PM',
        content:
        'Duis nec sodales nibh. Proin lectus tortor,\n' +
        'rutrum vel vulputate vitae, fringilla id magna.',
        speaker: [
          { name: 'Bob John', booth: 'Booth: 3G12', avatar: '/img/Avatar-2.svg' },
          { name: 'Emma Satoshi', booth: 'Booth: 2A35', avatar: '/img/Avatar-4.svg' },
        ],
        status: 'live',
      },
      {
        time: '03:00 PM to 04:00 PM',
        content: 'Vestibulum vel eros vel metus lacinia feugiat a\n' +
        'nec metus.',
        speaker: [
          { name: 'Sasha Jackson', booth: 'Booth: 2F18', avatar: '/img/Avatar-5.svg' },
          { name: 'Diana Brock', booth: 'Booth: 2F24', avatar: '/img/Avatar-6.svg' },
        ],
        status: 'upcoming',
      },
    ],
    3: [
      {
        time: '11:00 AM to 12:00 PM',
        content: 'Vestibulum vel eros vel metus lacinia feugiat a\n' +
        'nec metus.',
        speaker: {
          name: 'Sasha Jackson',
          booth: 'Booth: 2F18',
          avatar: '/img/Avatar-5.svg',
        },
        status: 'preview',
      },
      {
        time: '12:00 PM to 03:00 PM',
        content:
            'Duis nec sodales nibh. Proin lectus tortor,\n' +
            'rutrum vel vulputate vitae, fringilla id magna.',
        speaker: [
          { name: 'Bob John', booth: 'Booth: 3G12', avatar: '/img/Avatar-2.svg' },
          { name: 'Yui Ronald', booth: 'Booth: 2F12', avatar: '/img/Avatar-3.svg' },
        ],
        status: 'live',
      },
      {
        time: '03:00 PM to 04:00 PM',
        content: 'Vestibulum vel eros vel metus lacinia feugiat a\n' +
        'nec metus.',
        speaker: [
          { name: 'Emma Satoshi', booth: 'Booth: 2A35', avatar: '/img/Avatar-4.svg' },
          { name: 'Diana Brock', booth: 'Booth: 2F24', avatar: '/img/Avatar-6.svg' },
        ],
        status: 'upcoming',
      },
    ],
  };

return (
  <div className={styles.tableContainer}>
    <div className={styles.headerRow}>
      <div className={styles.headerCell}>Time</div>
      <div className={styles.headerCell}>Content</div>
      <div className={`${styles.headerCell} ${styles.speakersHeader}`}>Speakers</div>
    </div>
    {events[activeDay].map((event, index) => (
      <div key={index} className={styles.tableRow}>
        <div className={styles.timeCell}>{event.time}</div>
        <ScheduleEvent event={event} />
      </div>
    ))}
  </div>
);

};

export default ScheduleTable;