import React from 'react';
import styles from './ContactInfo.module.css';

const ContactInfo = () => {
  return (
    <div className={styles.contactInfo}>
      <div className={styles.iconsContainer}>
        <span className={styles.iconInquiry}></span>
        <span className={styles.iconPhone}></span>
        <span className={styles.iconEmail}></span>
        <span className={styles.iconLocation}></span>
      </div>
      <div className={styles.textContainer}>
        <h2>Contact us</h2>
        <p className={styles.inquiryText}>Have an inquiry? We’ll be happy to assist you</p>
        <p className={styles.phoneText}>
          <strong>Phone:</strong> +92 333 6527366
        </p>
        <p className={styles.emailText}>
          <strong>Email:</strong> abuzer@greelogix.com
        </p>
        <p className={styles.addressText}>
          <strong>Address:</strong> Plot 252, Block L Phase 2 Johar Town, Lahore, PK
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;