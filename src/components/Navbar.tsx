import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for active section tracking
  useEffect(() => {
    if (!isHomePage) return;

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -50% 0px', // Trigger when section is 50% visible
      threshold: [0, 0.25, 0.5, 0.75, 1]
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        // Only update if the section is intersecting and visible enough
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          const sectionId = entry.target.id;
          if (sectionId) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    const sections = ['home', 'services', 'portfolio', 'about', 'contact'];
    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [isHomePage]);

  const handleNavClick = (path: string, section?: string) => {
    setIsOpen(false);

    if (section && isHomePage) {
      // Smooth scroll to section on home page
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else if (section && !isHomePage) {
      // Navigate to home page with section hash
      navigate(`/#${section}`);
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // Navigate to other pages
      navigate(path);
    }
  };

  const navLinks = [
    { name: 'Home', section: 'home' },
    { name: 'Services', section: 'services' },
    { name: 'Portfolio', section: 'portfolio' },
    { name: 'About', section: 'about' },
    { name: 'Contact', section: 'contact' },
  ];

  const externalLinks: { name: string; path: string }[] = [];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12',
        scrolled ? 'glassmorphism bg-opacity-80' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <button 
          onClick={() => handleNavClick('/', 'home')}
          className="flex items-center cursor-pointer"
        >
          <motion.h1 
            className="text-2xl md:text-3xl font-bold text-white hover:text-psyco-green-DEFAULT transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ClikXo
          </motion.h1>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.section}
              onClick={() => handleNavClick('/', link.section)}
              className={cn(
                'text-white hover:text-psyco-green-DEFAULT transition-all duration-300 text-sm font-medium tracking-wide cursor-pointer relative scale-hover',
                isHomePage && activeSection === link.section && 'text-psyco-green-DEFAULT'
              )}
            >
              {link.name}
              {isHomePage && activeSection === link.section && (
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-psyco-green-DEFAULT"
                  layoutId="navIndicator"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Mobile Navigation Toggle */}
        <motion.button
          className="md:hidden text-white hover:text-psyco-green-DEFAULT transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div
        className={cn(
          'fixed inset-0 z-40 glassmorphism pt-24 px-8 transition-all duration-300 ease-in-out transform md:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        initial={false}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="flex flex-col space-y-4">
          {navLinks.map((link) => (
            <motion.button
              key={link.section}
              onClick={() => handleNavClick('/', link.section)}
              className={cn(
                'text-white hover:text-psyco-green-DEFAULT py-2 text-xl transition-all duration-300 text-left cursor-pointer relative',
                isHomePage && activeSection === link.section && 'text-psyco-green-DEFAULT font-semibold'
              )}
              whileHover={{ x: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              {isHomePage && activeSection === link.section && (
                <motion.span 
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-psyco-green-DEFAULT rounded-r"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
              <span className={isHomePage && activeSection === link.section ? 'ml-3' : ''}>
                {link.name}
              </span>
            </motion.button>
          ))}
          {externalLinks.map((link) => (
            <motion.button
              key={link.path}
              onClick={() => handleNavClick(link.path)}
              className={cn(
                'text-white hover:text-psyco-green-DEFAULT py-2 text-xl transition-all duration-300 text-left cursor-pointer',
                location.pathname === link.path && 'text-psyco-green-DEFAULT font-semibold'
              )}
              whileHover={{ x: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.name}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
