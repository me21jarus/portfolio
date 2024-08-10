'use client';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMailForward } from '@fortawesome/free-solid-svg-icons';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Failed to send message.');
    }
  };

  return (
    <div className="mt-10 p-6 bg-gray-900 rounded-xl shadow-lg mb-10">
      <h1 className="text-green-500 text-5xl font-bold mb-2 relative group flex justify-center">Contact Me<span className="absolute left-0 bottom-0 w-full h-[2px] bg-green-500 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span></h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 p-6">
        <div>
          <label htmlFor="name" className="block text-white">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 rounded-lg bg-gray-800 text-white"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-white">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 rounded-lg bg-gray-800 text-white"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-white">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-2 rounded-lg bg-gray-800 text-white h-32"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg shadow-md hover:bg-blue-600">Send Message</button>
      </form>

      {/* Social Media Links */}
      <div className="mt-8">
        <h2 className="text-slate-500 text-2xl font-bold mb-2 flex justify-center">Connect with me:</h2>
        <div className="flex space-x-4 justify-center">
          <a href="https://www.linkedin.com/in/suraj-e-m-407610307/" target="_blank" rel="noopener noreferrer" className="text-white text-2xl">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://twitter.com/@SurajEM1" target="_blank" rel="noopener noreferrer" className="text-white text-2xl">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
