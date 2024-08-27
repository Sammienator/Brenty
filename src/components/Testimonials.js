import React, { useState, useEffect } from 'react';
import 'aos/dist/aos.css';
import testimonial from '../assets/testimonial.jpg';

const testimonials = [
  {
    id: 1,
    image: testimonial,
    name: 'Ahmad Al-Farsi',
    message: '“This tea transports me back to my childhood. The taste is unmatched.”',
  },
  {
    id: 2,
    image: testimonial,
    name: 'Fatima Al-Zahra',
    message: '“Every sip is a journey of flavors. I feel so connected to nature.”',
  },
  {
    id: 3,
    image: testimonial,
    name: 'David Johnson',
    message: '“The best tea experience I’ve ever had. Highly recommend to all tea lovers!”',
  },
  {
    id: 4,
    image: testimonial,
    name: 'Kwame Nkrumah',
    message: '“This tea has become a staple in my home. Truly remarkable.”',
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 9000); // Slower transition (6 seconds)
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-12" data-aos="fade-up">
          What Our Customers Say
        </h2>
        <div className="flex flex-col items-center">
          <div
            className="bg-gray-100 dark:bg-gray-800 p-10 rounded-lg shadow-xl w-full md:w-3/4 lg:w-1/2"
            data-aos="fade-in"
            data-aos-duration="6000" // Slower fade-in duration (2 seconds)
            key={testimonials[current].id}
          >
            <img
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="w-24 h-24 object-cover rounded-full mb-6 mx-auto"
            />
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
              {testimonials[current].name}
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 italic text-center">
              {testimonials[current].message}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
