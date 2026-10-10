import React from 'react'
import backImg from '../assets/images/backImg.png'
import first from '../assets/images/first.png'
import second from '../assets/images/second.png'
import third from '../assets/images/Settings.png'
import Goals from '../assets/images/Goals.png'

/**
 * Reusable FeatureCards component
 * @param {string} backImg - URL for the background image
 * @param {string[]} images - Array of 4 foreground image URLs
 */
const FeatureCards = ({ backImg, images }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-4 max-w-7xl mx-auto">
      {images.map((img, index) => (
        <div 
          key={index} 
          className="relative aspect-[3/4.5] sm:aspect-[3/4]  rounded-3xl group transition-all duration-500 "
        >
          {/* Background Image Layer */}
          
          <div 
            className="absolute inset-0 bg-contain bg-no-repeat bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${backImg})` }}
          />
          
          {/* Foreground Image Container */}
          <div className="relative z-10 h-full w-full flex items-center justify-center p-6 sm:p-8">
            <img 
              src={img} 
              alt={`Feature screenshot ${index + 1}`} 
              className="max-h-[90%] max-w-[90%] object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.2)] transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      ))}
    </div>
  )
}

const Experience = () => {
  const foregroundImages = [first, second, third, Goals]

  return (
    <section className="py-16 md:py-28 bg-white overflow-hidden" id="experience">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-20 px-6">
          <h2 className="text-3xl md:text-5xl font-semibold text-[#111827] mb-5 tracking-tight">
            Experience Neighborz in Action
          </h2>
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Experience how simple it is to use Neighborz in your daily life.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <FeatureCards 
          backImg={backImg} 
          images={foregroundImages} 
        />
      </div>
    </section>
  )
}

export default Experience