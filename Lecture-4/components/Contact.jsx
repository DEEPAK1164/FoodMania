import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', contact: '' });
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label><br />
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>
        <br />
        <div>
          <label htmlFor="email">Email:</label><br />
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>
        <br />
        <div>
          <label htmlFor="contact">Contact Number:</label><br />
          <input
            type="tel"
            name="contact"
            id="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Enter your contact number"
          />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
