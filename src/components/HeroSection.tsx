import React, { useEffect, useRef, useState } from 'react';
import { MoveRight, Sparkles, Code, Palette } from 'lucide-react';
import { motion } from 'framer-motion';
import { MagneticButton, ShineButton } from '@/components/animations/AnimatedComponents';

const HeroSection = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const textVariants = [
    'Transform Your Digital Presence',
    'Create Amazing Online Experiences',
    'Build Brands That Stand Out',
    'Drive Results Through Innovation',
    'Elevate Your Online Success'
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  
  // Typewriter Effect Logic
  useEffect(() => {
    const currentText = textVariants[currentTextIndex];
    const typingSpeed = isDeleting ? 50 : 100; // Faster when deleting
    const pauseTime = 2000; // Pause at end of text

    const typeWriter = () => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          // Finished typing, start deleting after pause
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(currentText.slice(0, displayText.length - 1));
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % textVariants.length);
        }
      }
    };

    const timer = setTimeout(typeWriter, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, currentTextIndex, isDeleting, textVariants]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!backgroundRef.current) return;

      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      backgroundRef.current.style.transform = `translate(${x * -15}px, ${y * -15}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Elements */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 z-0 transition-transform duration-500 ease-out"
        style={{ willChange: 'transform' }}
      >
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-psyco-green-DEFAULT/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-psyco-green-light/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Decorative Elements */}
      <motion.div className="absolute top-1/4 left-20 hidden lg:block" style={{ animationDelay: '0s' }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <Code className="h-12 w-12 text-psyco-green-DEFAULT/30" />
      </motion.div>
      <motion.div className="absolute bottom-1/4 right-20 hidden lg:block" style={{ animationDelay: '1s' }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Palette className="h-16 w-16 text-psyco-green-DEFAULT/30" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center">
          <div className="max-w-2xl">
            <motion.div 
              className="flex items-center mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-psyco-green-DEFAULT/20 text-psyco-green-light rounded-full px-4 py-1 text-sm font-medium inline-flex items-center shimmer border-glow">
                <Sparkles className="h-3.5 w-3.5 mr-1 animate-pulse" />
                Award-Winning Digital Agency
              </div>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-glow mb-6 min-h-[120px] md:min-h-[144px] lg:min-h-[168px] flex items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {displayText}
              <span
                className={`inline-block w-1 h-16 md:h-20 lg:h-24 ml-1 ${
                  showCursor ? 'bg-psyco-green-DEFAULT' : 'bg-transparent'
                } transition-colors duration-100`}
                style={{ animation: 'none' }}
              ></span>
            </motion.h1>

            <motion.p 
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We create stunning websites, powerful brands, and effective marketing strategies that drive results.
              Let's turn your vision into reality and grow your business online.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <MagneticButton
                onClick={() => scrollToSection('contact')}
                className="bg-psyco-green-DEFAULT hover:bg-psyco-green-dark text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center btn-glow cursor-pointer group"
              >
                Get Started Today
                <MoveRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </MagneticButton>
              <ShineButton
                onClick={() => scrollToSection('services')}
                className="bg-transparent border border-psyco-green-DEFAULT text-psyco-green-DEFAULT hover:bg-psyco-green-DEFAULT/10 font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center cursor-pointer border-glow"
              >
                Our Services
              </ShineButton>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
