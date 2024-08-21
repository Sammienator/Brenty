import React from 'react';
import pic2 from '../assets/pic2.png'; // Replace this with your image path

const AboutUs = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-r from-[#FAD02E] via-[#FFB6B9] to-[#FF84A3] dark:bg-[#BF9B30]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center" data-aos="fade-up" data-aos-duration="1000">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-black hover:text-[#A65858] transition duration-300 ease-in-out">
            من نحن (About Us)
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div data-aos="fade-right" data-aos-duration="1000">
            <img src={pic2} alt="About Us" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
          <div data-aos="fade-left" data-aos-duration="1000">
            <p className="text-right text-black font-semibold text-2xl dark:text-black hover:text-gray-900 dark:hover:text-[#A65858] transition duration-300 ease-in-out group relative">
              <span className="block transition-opacity duration-300 ease-in-out group-hover:opacity-0">
                مرحبًا بكم في Brenty، حيث نقدم لكم أفضل تشكيلة من الشاي من جميع أنحاء العالم. بدأت رحلتنا بشغف بالجودة والتزام بالتميز. نحن نؤمن بتقديم ليس فقط الشاي ولكن تجربة مميزة، بدءًا من لحظة فتح الكيس حتى أول رشفة. انضم إلينا في استكشاف النكهات والتقاليد.
              </span>
              <span className="block absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                Welcome to Brenty, where we bring you the finest selection of teas from around the world. Our journey began with a passion for quality and a commitment to excellence. We believe in providing not just tea but an experience, from the moment you open a bag to the first sip. Join us in our exploration of flavors and traditions.
              </span>
            </p>
          </div>
        </div>

        <div className="mt-8" data-aos="fade-up" data-aos-duration="1000">
          <p className="text-right text-black font-semibold text-2xl dark:text-black hover:text-gray-900 dark:hover:text-[#A65858] transition duration-300 ease-in-out group relative">
            <span className="block transition-opacity duration-300 ease-in-out group-hover:opacity-0">
              في Brenty، نحرص على أن يتم الحصول على كل نوع من الشاي بشكل أخلاقي ويتم تحضيره بحب وعناية. فريقنا مكرس لاختيار أنواع الشاي التي لا تتميز فقط بالطعم الرائع، بل تغذي الجسد والعقل أيضًا. مع مجموعة واسعة من النكهات والمزائج، يوجد كوب شاي مثالي ينتظرك.
            </span>
            <span className="block absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              At Brenty, we ensure that every tea is ethically sourced and crafted with love and care. Our team is dedicated to curating teas that not only taste wonderful but also nourish the body and mind. With a wide range of flavors and blends, there's a perfect cup of tea waiting for you.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
