import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">Contact Us</h2>
        <div className="mt-8">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300">Name</label>
                <input id="name" type="text" className="mt-1 block w-full border-gray-300 dark:border-gray-600 rounded-md shadow-sm" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300">Email</label>
                <input id="email" type="email" className="mt-1 block w-full border-gray-300 dark:border-gray-600 rounded-md shadow-sm" required />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 dark:text-gray-300">Message</label>
              <textarea id="message" rows="4" className="mt-1 block w-full border-gray-300 dark:border-gray-600 rounded-md shadow-sm" required></textarea>
            </div>
            <button type="submit" className="px-6 py-3 bg-green-500 dark:bg-green-600 text-white rounded-full hover:bg-green-600 dark:hover:bg-green-700">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
