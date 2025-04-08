import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import styles from './ContactSection.module.css';

function ContactSection() {
  return (
    <section className={styles.contactSection}>
      <ContactForm />
      <ContactInfo />
    </section>
  );
}

export default ContactSection;
