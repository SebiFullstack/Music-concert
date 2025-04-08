import React from 'react';
import './ContactForm.module.css';

const ContactForm = () => {
  return (
    <form className="contactForm">
      <h2>Contact Us</h2>
      <div className="formGroup">
        <label>Name</label>
        <input type="text" required />
      </div>
      <div className="formGroup">
        <label>Email</label>
        <input type="email" required />
      </div>
      <div className="formGroup">
        <label>Message</label>
        <textarea required></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
