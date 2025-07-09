import React, { useState } from 'react';
import '../styles/ContactSection.css';

const initialState = {
  firstName: '',
  lastName: '',
  title: '',
  company: '',
  email: '',
  hq: '',
  phone: '',
  orgType: '',
};

const ContactSection = () => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form submitted:', formData);
  };

  return (
    <section className="contact-demo-section">
      {/* Wave background */}
      <div className="contact-demo-wave-svg">
        <svg viewBox="0 0 1440 200" width="100%" height="200" preserveAspectRatio="none">
          <path d="M0,80 C360,240 1080,-40 1440,120 L1440,200 L0,200 Z" fill="#0884bb"/>
        </svg>
      </div>
      <div className="contact-demo-container">
        <div className="contact-demo-image-col"></div>
        <div className="contact-demo-form-col">
          <form className="contact-demo-form" onSubmit={handleSubmit} autoComplete="off">
            <h2 className="contact-demo-title">Request a software demo</h2>
            <div className="contact-demo-row">
              <div className="contact-demo-field">
                <label>First Name<span>*</span></label>
                <input type="text" name="firstName" required value={formData.firstName} onChange={handleChange} />
              </div>
              <div className="contact-demo-field">
                <label>Last Name<span>*</span></label>
                <input type="text" name="lastName" required value={formData.lastName} onChange={handleChange} />
              </div>
            </div>
            <div className="contact-demo-row">
              <div className="contact-demo-field">
                <label>Title<span>*</span></label>
                <input type="text" name="title" required value={formData.title} onChange={handleChange} />
              </div>
              <div className="contact-demo-field">
                <label>Company Name<span>*</span></label>
                <input type="text" name="company" required value={formData.company} onChange={handleChange} />
              </div>
            </div>
            <div className="contact-demo-row">
              <div className="contact-demo-field">
                <label>Email<span>*</span></label>
                <input type="email" name="email" required value={formData.email} onChange={handleChange} />
              </div>
              <div className="contact-demo-field">
                <label>Company HQ</label>
                <select name="hq" value={formData.hq} onChange={handleChange}>
                  <option value="">Please Select</option>
                  <option value="USA">USA</option>
                  <option value="Canada">Canada</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div className="contact-demo-row">
              <div className="contact-demo-field" style={{ flex: 1 }}>
                <label>Phone Number</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
              </div>
            </div>
            <div className="contact-demo-row">
              <div className="contact-demo-field" style={{ flex: 1 }}>
                <label>Organization Type<span>*</span></label>
                <select name="orgType" required value={formData.orgType} onChange={handleChange}>
                  <option value="">Please Select</option>
                  <option value="Hospital">Hospital</option>
                  <option value="Clinic">Clinic</option>
                  <option value="Private Practice">Private Practice</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <button className="contact-demo-submit" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;