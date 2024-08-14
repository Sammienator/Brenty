import React from 'react';
import pic2 from '../assets/pic2.png'; // Replace this with your image path

const AboutUs = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-r from-pink-100 via-pink-200 to-pink-300 dark:bg-pink-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center" data-aos="fade-up" data-aos-duration="1000">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-black hover:text-[#987070] transition duration-300 ease-in-out">
            About Us
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div data-aos="fade-right" data-aos-duration="1000">
            <img src={pic2} alt="About Us" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
          <div data-aos="fade-left" data-aos-duration="1000">
            <p className="text-black font-semibold text-2xl dark:text-black hover:text-gray-900 dark:hover:text-[#987070] transition duration-300 ease-in-out">
              Welcome to Brenty, where we bring you the finest selection of teas from around the world. Our journey began with a passion for quality and a commitment to excellence. We believe in providing not just tea but an experience, from the moment you open a bag to the first sip. Join us in our exploration of flavors and traditions.
            </p>
          </div>
        </div>

        <div className="mt-8" data-aos="fade-up" data-aos-duration="1000">
          <p className=" text-black font-semibold text-2xl  dark:text-black hover:text-gray-900 dark:hover:text-[#987070] transition duration-300 ease-in-out align-text-center text-center">
            At Brenty, we ensure that every tea is ethically sourced and crafted with love and care. Our team is dedicated to curating teas that not only taste wonderful but also nourish the body and mind. With a wide range of flavors and blends, there's a perfect cup of tea waiting for you.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
