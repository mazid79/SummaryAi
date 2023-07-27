import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = async () => {
    // Assuming you have a backend API endpoint '/subscribe' to handle subscriptions
    try {
      const response = await fetch('/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        // Subscription successful, show a success message or take further action
        console.log('Subscription successful!');
      } else {
        // Handle subscription error, show an error message, etc.
        console.error('Subscription failed.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <footer className="py-20 font-bold text-center text-black text-sm relative">
      <div className="flex flex-col items-center space-y-4">
        <h3 className="text-lg font-bold text-purple-600">Contact</h3>
        <div className="flex space-x-4">
          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={handleChange}
            className="px-4 py-2 w-48 border border-transparent bg-transparent rounded text-black placeholder-black"
          />
          <button
            type="button"
            className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded transition-colors"
            onClick={handleSubscribe}
          >
            Subscribe
          </button>
        </div>
      </div>
      <div className="mt-8">
        Created by <span className="text-lg text-purple-600 font-semibold">Mazid</span> | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
