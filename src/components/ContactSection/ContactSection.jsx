import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import styles from './ContactSection.module.css';

function ContactSection() {
  return (
    <section className={styles.contactSection}>
      <ContactInfo />
      <ContactForm />
    </section>
  );
}

export default ContactSection;