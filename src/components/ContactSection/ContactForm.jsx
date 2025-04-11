import React, { useState, useEffect } from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [message, setMessage] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const msg = urlParams.get('message');
    const error = urlParams.get('error');
    if (msg) {
      setMessage(msg);
      setIsError(error === 'true');
    }
  }, []);

  return (
    <form className={styles.contactForm} action="/" method="POST">
      <h2>Fill in your details</h2>
      {message && (
        <div className={isError ? styles.errorMessage : styles.successMessage}>
          {message}
        </div>
      )}
      <div className={styles.formGroup}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="John Doe"
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="johndoe234@email.com"
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae, fringilla id magna. Vestibulum ornare eget urna nec pulvinar. Praesent porttitor convallis blandit. Fusce vel egestas dolor. Donec eu augue enim. Donec rutrum non lacus ac rhoncus. Morbi luctus leo, nec cursus ex"
          required
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;