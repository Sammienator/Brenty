import React from 'react';
import pic2 from '../assets/pic2.png'; // Replace this with your image path

const AboutUs = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-r from-white via-[#FAD02E] to-[#FFC300] dark:bg-[#FFC300]">
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
                مرحبًا بكم في Brenty، بدأت رحلتنا بشغف للجودة والتزام بالتميز. نحن نؤمن بتقديم ليس فقط الشاي بل تجربة فريدة، من اللحظة التي تفتح فيها الكيس إلى أول رشفة.
              </span>
              <span className="block absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                Welcome to Brenty, Our journey began with a passion for quality and a commitment to excellence. We believe in providing not just tea but an experience, from the moment you open a bag to the first sip.
              </span>
            </p>
          </div>
        </div>

        <div className="mt-8" data-aos="fade-up" data-aos-duration="1000">
          <p className="text-right text-black font-semibold text-2xl dark:text-black hover:text-gray-900 dark:hover:text-[#A65858] transition duration-300 ease-in-out group relative">
            <span className="block transition-opacity duration-300 ease-in-out group-hover:opacity-0">
              في Brenty، في برينتي، نضمن أن كل شاي يتم الحصول عليه بطريقة أخلاقية ويُعد بحب واهتمام. مع مجموعة واسعة منالنكهات والمزائج، هناك كوب شاي مثالي في انتظارك
            </span>
            <span className="block absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              At Brenty, we ensure that every tea is ethically sourced and crafted with love and care. With a wide range of flavors and blends, there's a perfect cup of tea waiting for you.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
