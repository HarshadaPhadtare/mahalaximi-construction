"use client"; // Make sure this is at the top if you're using Next.js

import { color } from 'framer-motion';
import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      // Simulate successful form submission
      setStatusMessage('Thank you for reaching out! We will get back to you shortly.');
      setFormData({ name: '', email: '', message: '' }); // Clear the form fields
      setIsSubmitting(false);
    }, 1500);
  };

  // Handle form data change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="contact-page" style={styles.page}>
      <h1 style={styles.heading}>Contact Us</h1>
      <p style={styles.subheading}>We'd love to hear from you! Fill out the form below, and we’ll get in touch.</p>

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="name" style={styles.label}>Your Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>Your Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="message" style={styles.label}>Your Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            style={styles.textarea}
          />
        </div>

        <button type="submit" disabled={isSubmitting} style={styles.button}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>

      {statusMessage && (
        <div style={styles.statusMessage}>
          <p>{statusMessage}</p>
        </div>
      )}

      <div style={styles.contactInfo}>
        <h2 style={styles.contactHeading}>Our Contact Information:</h2>
        <p style={styles.contactText}>📧 Email: <a href="mahalaximi00096@gmail.com">imahalaximi00096@gmail.com</a></p>
        <p style={styles.contactText}>📞 Phone: <a href="tel:+1234567890">+91 7757998804</a></p>
      </div>
    </div>
  );
};

const styles = {
  page: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    color:'black'
  },
  subheading: {
    textAlign: 'center',
    color: '#555',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    fontSize: '1rem',
    fontWeight: 'bold',
    marginBottom: '5px',
    color:'black'
  },
  input: {
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '100%',
    color:'black'
  },
  textarea: {
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '100%',
    color:'black'
  },
  button: {
    padding: '10px',
    fontSize: '1rem',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  statusMessage: {
    marginTop: '20px',
    textAlign: 'center',
    fontSize: '1rem',
    color: '#28a745',
  },
  contactInfo: {
    marginTop: '40px',
    textAlign: 'center',
  },
  contactHeading: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    color:'black'
  },
  contactText: {
    fontSize: '1rem',
    color: 'black',
  },
};

export default ContactPage;
