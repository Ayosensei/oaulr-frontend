// app/components/Carousel.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image'; // Import the optimized Image component
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?q=80&w=870&auto=format&fit=crop",
    title: "Upholding Justice",
    subtitle: "The premier repository for OAU legal precedents."
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2600&auto=format&fit=crop",
    title: "Faculty of Law, OAU",
    subtitle: "Excellence in legal education and reporting."
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1617203443952-6d2619f7ff4e?q=80&w=870&auto=format&fit=crop",
    title: "Digital Archive",
    subtitle: "Access thousands of judgments from anywhere."
  }
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[500px] w-full overflow-hidden bg-[#002147]"> 
      {/* Added bg color to prevent white flash while image loads */}
      
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div className="relative h-full w-full">
            {/* Use Next.js Image Component */}
            <Image 
              src={slides[currentIndex].url} 
              alt={slides[currentIndex].title}
              fill // Automatically fills the parent container
              priority={currentIndex === 0} // Prioritize loading the first image
              className="object-cover brightness-50"
              sizes="100vw"
            />
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 z-10">
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-5xl md:text-6xl font-bold mb-4 tracking-tight"
            >
              {slides[currentIndex].title}
            </motion.h2>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-xl md:text-2xl text-gray-200 max-w-2xl"
            >
              {slides[currentIndex].subtitle}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-[#d4af37] w-8" : "bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}