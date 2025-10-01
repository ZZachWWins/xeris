// Updated Contact.js
import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const body = `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`;
    const encodedBody = encodeURIComponent(body);
    window.location.href = `mailto:zachary@xerisweb.com?subject=${encodeURIComponent(subject)}&body=${encodedBody}`;
    setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
  };

  return (
    <section className="contact-section">
      <h2 className="contact-title">Connect with Xeris Web Co.</h2>
      <div className="contact-content">
        <p className="about-text">
          Reach out to discuss our AI and blockchain innovations, inquire about XerisCoin ($XERIS), or collaborate on revolutionary projects.
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              required
              className="form-input"
            ></textarea>
          </div>
          <button type="submit" className="submit-btn cta-button">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;