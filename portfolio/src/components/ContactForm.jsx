'use client';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
    setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSuccess('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const result = await response.json();
        setError(result.error || 'Failed to send the message.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-10 p-6 bg-gray-900 rounded-xl shadow-lg mb-10">
      <h1 className="text-green-500 text-5xl font-bold mb-2 relative group flex justify-center">
        Contact Me
        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-green-500 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
      </h1>

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

        <button
          type="submit"
          className={`p-2 rounded-lg shadow-md text-white ${
            loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
          }`}
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {/* Success/Error Messages */}
      {success && <p className="mt-4 text-green-500">{success}</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

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
