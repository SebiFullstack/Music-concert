import React from 'react';
import './ContactInfo.module.css';

const ContactInfo = () => {
  return (
    <div className="contactInfo">
      <h2>Contact Information</h2>
      <p><strong>Phone:</strong> +123 456 7890</p>
      <p><strong>Email:</strong> contact@yourcompany.com</p>
      <p><strong>Address:</strong> 123 Your Street, City, Country</p>
    </div>
  );
};

export default ContactInfo;
