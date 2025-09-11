import React from 'react';

function Contact() {
  return (
    <section className="contact-section">
      <h2 className="contact-title">Connect with Xeris Web Co.</h2>
      <div className="contact-form">
        <p className="about-text">
          Reach out to us directly to discuss our AI and blockchain innovations or inquire about XerisCoin ($XERIS).
        </p>
        <a
          href="mailto:zacharywinkle7@gmail.com?subject=Inquiry%20from%20Xeris%20Web%20Co.%20Website"
          className="submit-btn"
        >
          Send Email
        </a>
      </div>
    </section>
  );
}

export default Contact;