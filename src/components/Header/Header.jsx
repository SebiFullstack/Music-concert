import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });


  const targetDate = new Date('2026-01-01T00:00:00');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const timeDifference = targetDate - now;

      if (timeDifference <= 0) {
        clearInterval(interval);
      } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>Music.</div>
        <ul className={styles.menu}>
          <li>
            <a href="#top">Home</a>
          </li>

          <li className={styles.dropdown}>
            <span>Speakers ▾</span>
            <ul className={styles.dropdownMenu}>
              <li>Speaker 1</li>
              <li>Speaker 2</li>
              <li>Speaker 3</li>
            </ul>
          </li>

          <li className={styles.dropdown}>
            <span>Schedule ▾</span>
            <ul className={styles.dropdownMenu}>
              <li>Day 1</li>
              <li>Day 2</li>
              <li>Day 3</li>
            </ul>
          </li>

          <li><a href="#footer">Contact Us</a></li>
        </ul>
        <a href="#price-section"><button className={styles.ticketBtn}>Get Tickets</button></a>
      </nav>

      <div className={styles.hero}>
        <h1>
          The Best Experience Of<br /> <span className={styles.highlight}>Music</span> In 2021
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae ligula 
          placerat, eleifend ex non, vehicula libero. Suspendisse eget tellus lectus.
        </p>
        <div className={styles.buttons}>
          <a href="#category"><button className={styles.getStarted}>Get Started</button></a>
          <button className={styles.watchVideo}>
          <a 
            href="https://www.youtube.com/live/IkmLXvBfVv0?si=k3GNbXN_IW80ma67" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.watchVideo}
          >
            <img src="/public/Icons/Watch-video.svg" alt="Watch" className={styles.icon} />
            Watch Video
            </a>
          </button>
        </div>
        <div className={styles.countdown}>
          <span>{timeLeft.days}d</span>
          <span>{timeLeft.hours}h</span>
          <span>{timeLeft.minutes}m</span>
          <span>{timeLeft.seconds}s</span>
        </div>
      </div>
    </header>
  );
}