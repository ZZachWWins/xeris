import React from 'react';

function Contact() {
  return (
    <section className="contact-section">
      <h2 className="contact-title">Contact Us</h2>
      <div className="contact-form">
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" required></textarea>
        <button type="button" className="submit-btn">Send</button>
      </div>
    </section>
  );
}

export default Contact;