import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import lemon from '../assets/lemon.png';
import teajar from '../assets/teajar.png';
import pic4 from '../assets/pic4.png';
import { FaLeaf, FaHeart, FaBolt } from 'react-icons/fa';

const teas = [
  { 
    images: [lemon, teajar, pic4], // Array of images for the carousel
    name: 'Herbal Range', 
    benefits: [
      { icon: FaLeaf, description: 'Rich in antioxidants' },
      { icon: FaHeart, description: 'Supports heart health' },
      { icon: FaBolt, description: 'Boosts energy levels' }
    ]
  },
  { 
    images: [teajar, pic4, lemon], // Array of images for the carousel
    name: 'Essential Range', 
    benefits: [
      { icon: FaHeart, description: 'Improves heart health' },
      { icon: FaBolt, description: 'Increases alertness' },
      { icon: FaLeaf, description: 'Contains powerful antioxidants' }
    ]
  },
  { 
    images: [pic4, lemon, teajar], // Array of images for the carousel
    name: 'Nova Range', 
    benefits: [
      { icon: FaLeaf, description: 'Boosts metabolism' },
      { icon: FaHeart, description: 'Promotes heart health' },
      { icon: FaBolt, description: 'Enhances energy levels' }
    ]
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white" data-aos="fade-up" data-aos-duration="1000">
          Tea Gallery
        </h2>
        <div className="space-y-16 mt-8">
          {teas.map((tea, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-center rounded-lg overflow-hidden hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out" data-aos="fade-up" data-aos-duration="1000">
              <div className="p-4 lg:w-1/2 flex flex-col items-center text-center space-y-6">
                {/* Row 1: Name */}
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{tea.name}</h3>
                
                {/* Row 2: Icons */}
                <div className="flex justify-center space-x-4">
                  {tea.benefits.map((benefit, idx) => (
                    <benefit.icon key={idx} className="text-4xl text-[#FFC300] dark:text-[#FFC300]" />
                  ))}
                </div>

                {/* Row 3: Descriptions */}
                <div className="space-y-4">
                  {tea.benefits.map((benefit, idx) => (
                    <p key={idx} className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                  ))}
                </div>
              </div>

              {/* Carousel Section */}
              <div className="lg:w-1/2">
                <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
                  {tea.images.map((image, imgIndex) => (
                    <div key={imgIndex}>
                      <img src={image} alt='picss' className="w-full max-w-xs object-cover mx-auto" />
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
