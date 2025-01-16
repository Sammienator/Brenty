import React from 'react';
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const locations = [
  
  {
    country: 'Saudi Arabia',

    address: '123 Tea Road, Riyadh, Saudi Arabia',
    openingHours: '8:00 AM - 6:00 PM',
    iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.1739930213594!2d46.62726967464181!3d24.686544878043225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f1c55b6f82c85%3A0x15bdb9ea56e37c7f!2sEmbassy%20of%20Kenya!5e0!3m2!1sen!2ske!4v1736970212636!5m2!1sen!2ske" // Replace with actual URL
  },
  {
    country: 'Dubai',
    address: '45 Tea Lane, Dubai, UAE',
    openingHours: '9:00 AM - 7:00 PM',
    iframeSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.9969723995537!2d55.24402381744385!3d25.203324600000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f421367d0e139%3A0x590b890edda0eded!2sConsulate%20of%20Kenya!5e0!3m2!1sen!2ske!4v1736971181503!5m2!1sen!2ske"  // Replace with actual URL
  },
  {
    country: 'Kuwait',
    address: '67 Tea Street, Kuwait City, Kuwait',
    openingHours: '10:00 AM - 8:00 PM',
    iframeSrc:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55658.867399883304!2d47.58107370552516!3d29.321084095033594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcff6b679e9db8d%3A0x986a6aef2e2f3ea8!2sAl%20Jahra%20Industrial%20Area%20Block%201%2C%20Al%20Jahra%2C%20Kuwait!5e0!3m2!1sen!2ske!4v1736971590794!5m2!1sen!2ske"  // Replace with actual URL
  },
];

const Location = () => {
  return (
    <section id="location" className="py-16 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12" data-aos="fade-up" data-aos-duration="1000">
          Pick-Up Locations
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={`${index * 200}`}
            >
              {/* Text Section */}
              <div className="p-6 space-y-4 text-center">
                <h3 className="text-3xl font-semibold text-gray-900 dark:text-white">{location.country}</h3>
                <p className="flex items-center justify-center text-gray-600 dark:text-gray-300">
                  <FaMapMarkerAlt className="text-2xl text-[#FFC300] mr-2" />
                  {location.address}
                </p>
                <p className="flex items-center justify-center text-gray-600 dark:text-gray-300">
                  <FaClock className="text-2xl text-[#FFC300] mr-2" />
                  {location.openingHours}
                </p>
              </div>

              {/* Map Section */}
              <div className="w-full h-64">
                <iframe
                  title='locs'
                  src={location.iframeSrc}
                  className="w-full h-full rounded-lg"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-delay={`${index * 300}`}
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Location;
