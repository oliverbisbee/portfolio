'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/28154283/pexels-photo-28154283/free-photo-of-sunset-on-toronto.jpeg)'
        }}
      />
      
      {/* Lighter Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/35" />
      
      <div className="relative z-10 text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-4 drop-shadow-lg">
            Oliver Bisbee
          </h1>
          <h2 className="text-2xl md:text-3xl text-white/90 mb-10 font-medium">
            Software Engineer | Data Scientist | Developer
          </h2>
          <div className="flex gap-4 justify-center">
            <a 
              href="#about" 
              className="px-10 py-4 bg-accent hover-bg-accent-dark rounded transition-all text-white font-semibold shadow-lg hover:scale-105"
            >
              Learn More
            </a>
            <a 
              href="#contact" 
              className="px-10 py-4 bg-black/40 hover-bg-black-60 rounded transition-all text-white font-semibold shadow-lg border border-white/20 hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-white text-3xl drop-shadow-lg"
        >
          ↓
        </motion.div>
      </div>
    </section>
  );
}