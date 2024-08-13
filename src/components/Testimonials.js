import React from 'react';

const testimonials = [
  { id: 1, name: 'Jane Doe', testimonial: 'Brenty has an incredible selection of teas. The quality is unmatched! The Proprietor Ms Brenda found a gap that desperately needed filling and came through for all of us! Kudos Team!' },
  { id: 2, name: 'John Smith', testimonial: 'The best tea experience I have ever had. Highly recommend! Anyone lookng for a piece of heaven will definitely find it at Brenty!' },
  // Add more testimonials here
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">What Our Customers Say</h2>
        <div className="mt-8 space-y-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
              <p className="text-gray-700 dark:text-gray-300">{testimonial.testimonial}</p>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">{testimonial.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
