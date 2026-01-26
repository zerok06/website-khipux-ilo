import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  {
    src: "/venue/5-glorieta.jpg",
    title: { es: "Glorieta José Gálvez", en: "José Gálvez Gazebo" },
    desc: { es: "Símbolo icónico de Ilo con vista al océano.", en: "Iconic symbol of Ilo overlooking the ocean." }
  },
  {
    src: "/venue/4-malecon.jpg",
    title: { es: "Malecón Costero", en: "Coastal Boardwalk" },
    desc: { es: "El paseo marítimo perfecto para disfrutar del atardecer.", en: "The perfect boardwalk to enjoy the sunset." }
  },
  {
    src: "/venue/2-museo.jpg",
    title: { es: "Museo Chiribaya", en: "Chiribaya Museum" },
    desc: { es: "Historia milenaria de nuestros ancestros.", en: "Millennial history of our ancestors." }
  },
  {
    src: "/venue/7-algarrobal.jpg",
    title: { es: "Valle de El Algarrobal", en: "El Algarrobal Valley" },
    desc: { es: "Tierra de olivos centenarios y tradición.", en: "Land of century-old olive trees and tradition." }
  },
  {
    src: "/venue/3-ciudad.jpg",
    title: { es: "Ciudad Puerto", en: "Port City" },
    desc: { es: "Modernidad y tradición frente al mar.", en: "Modernity and tradition facing the sea." }
  },
  {
    src: "/venue/1-punta-coles.jpg",
    title: { es: "Reserva Punta Coles", en: "Punta Coles Reserve" },
    desc: { es: "Santuario natural de vida marina y aves guaneras.", en: "Natural sanctuary for marine life and guano birds." }
  }
];

export default function VenueGallery({ locale }: { locale: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isEs = locale === "es";

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden group shadow-2xl border border-gray-800 bg-surface">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <img
            src={images[currentIndex].src}
            alt={isEs ? images[currentIndex].title.es : images[currentIndex].title.en}
            className="w-full h-full object-cover"
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-20">
        <motion.div
            key={`text-${currentIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
        >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 font-heading">
            {isEs ? images[currentIndex].title.es : images[currentIndex].title.en}
            </h3>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl">
            {isEs ? images[currentIndex].desc.es : images[currentIndex].desc.en}
            </p>
        </motion.div>
      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-primary-500 transition-colors backdrop-blur-sm opacity-0 group-hover:opacity-100"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-primary-500 transition-colors backdrop-blur-sm opacity-0 group-hover:opacity-100"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 right-8 flex gap-2 z-30">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "w-8 bg-primary-500" : "bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
