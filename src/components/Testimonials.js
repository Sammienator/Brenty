import React from 'react';
import 'aos/dist/aos.css';
import testimonial from '../assets/testimonial.jpg';



const testimonials = [
  {
    id: 1,
    image: testimonial,
    name: 'John Doe',
    message: '“The tea here is simply the best. I’ve never felt more relaxed!”',
  },
  {
    id: 2,
    image: testimonial,
    name: 'Jane Smith',
    message: '“A wonderful experience every time. The flavors are rich and authentic.”',
  },
  {
    id: 3,
    image: testimonial,
    name: 'David Johnson',
    message: '“I love the variety and quality. The staff is also very friendly.”',
  },
  {
    id: 4,
    image: testimonial,
    name: 'Emily Davis',
    message: '“Their green tea has become a part of my daily routine. Highly recommend!”',
  },
  
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white" data-aos="fade-up">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-300 ease-in-out"
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
              data-aos-duration="1000"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 object-cover rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{testimonial.name}</h3>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic">“{testimonial.message}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
