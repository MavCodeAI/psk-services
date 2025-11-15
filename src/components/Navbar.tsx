import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Menu, X, Search, Bell, User, ChevronDown, Sun, Moon,
  Globe, Home, Briefcase, Code, Mail, Users, Settings,
  LogOut, Heart, Bookmark, ShoppingCart, Filter
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('dark');
  const [currentLanguage, setCurrentLanguage] = useState('EN');
  const [notifications] = useState([
    { id: 1, title: 'New project inquiry', time: '2 min ago', unread: true },
    { id: 2, title: 'Portfolio updated', time: '1 hour ago', unread: true },
    { id: 3, title: 'Service request completed', time: '3 hours ago', unread: false },
  ]);

  const location = useLocation();
  const navigate = useNavigate();
  const searchRef = useRef<HTMLInputElement>(null);

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

  // Click away handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.closest('.search-container') && !searchRef.current.closest('.search-button')) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Ctrl/Cmd + K for search
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault();
        setIsSearchOpen(true);
        setTimeout(() => searchRef.current?.focus(), 100);
      }
      // Escape to close all dropdowns
      if (event.key === 'Escape') {
        setIsSearchOpen(false);
        setIsNotificationsOpen(false);
        setIsUserMenuOpen(false);
        setIsThemeMenuOpen(false);
        setIsMegaMenuOpen(false);
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
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

  // Handle search functionality
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Implement search logic here
    console.log('Searching for:', query);
  };

  // Handle theme toggle
  const toggleTheme = (theme: string) => {
    setCurrentTheme(theme);
    // Implement theme switching logic here
    console.log('Theme switched to:', theme);
  };

  // Handle language change
  const changeLanguage = (language: string) => {
    setCurrentLanguage(language);
    // Implement language switching logic here
    console.log('Language changed to:', language);
  };

  // Service mega menu data
  const serviceCategories = [
    {
      title: 'Web Development',
      icon: <Code className="w-5 h-5" />,
      services: ['React Development', 'Vue.js Development', 'Angular Development', 'Full-Stack Solutions']
    },
    {
      title: 'Digital Marketing',
      icon: <Users className="w-5 h-5" />,
      services: ['SEO Optimization', 'Social Media Marketing', 'Content Marketing', 'PPC Campaigns']
    },
    {
      title: 'Design Services',
      icon: <Briefcase className="w-5 h-5" />,
      services: ['UI/UX Design', 'Brand Identity', 'Graphic Design', 'Motion Graphics']
    }
  ];

  // Languages
  const languages = [
    { code: 'EN', name: 'English' },
    { code: 'ES', name: 'Español' },
    { code: 'FR', name: 'Français' },
    { code: 'DE', name: 'Deutsch' }
  ];

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
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            link.name === 'Services' ? (
              // Mega Menu for Services
              <div key={link.section} className="relative">
                <button
                  onMouseEnter={() => setIsMegaMenuOpen(true)}
                  onMouseLeave={() => setIsMegaMenuOpen(false)}
                  className={cn(
                    'text-white hover:text-psyco-green-DEFAULT transition-all duration-300 text-sm font-medium tracking-wide cursor-pointer relative scale-hover flex items-center gap-1',
                    isHomePage && activeSection === link.section && 'text-psyco-green-DEFAULT'
                  )}
                >
                  {link.name}
                  <ChevronDown className="w-4 h-4" />
                  {isHomePage && activeSection === link.section && (
                    <motion.span
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-psyco-green-DEFAULT"
                      layoutId="navIndicator"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>

                {/* Mega Menu */}
                <AnimatePresence>
                  {isMegaMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      onMouseEnter={() => setIsMegaMenuOpen(true)}
                      onMouseLeave={() => setIsMegaMenuOpen(false)}
                      className="absolute top-full left-0 mt-2 w-96 bg-gray-900/95 backdrop-blur-md border border-gray-700 rounded-lg shadow-xl p-6 z-50"
                    >
                      <div className="grid grid-cols-1 gap-4">
                        {serviceCategories.map((category, index) => (
                          <div key={index} className="flex items-start gap-3 p-3 hover:bg-gray-800/50 rounded-md transition-colors">
                            <div className="text-psyco-green-DEFAULT mt-1">
                              {category.icon}
                            </div>
                            <div>
                              <h3 className="text-white font-semibold mb-2">{category.title}</h3>
                              <ul className="space-y-1">
                                {category.services.map((service, idx) => (
                                  <li key={idx}>
                                    <button className="text-gray-300 hover:text-psyco-green-DEFAULT text-sm transition-colors">
                                      {service}
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
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
            )
          ))}

          {/* Separator */}
          <div className="w-px h-6 bg-gray-600"></div>

          {/* Advanced Features */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative search-container">
              <motion.button
                onClick={() => {
                  setIsSearchOpen(!isSearchOpen);
                  if (!isSearchOpen) {
                    setTimeout(() => searchRef.current?.focus(), 100);
                  }
                }}
                className="text-white hover:text-psyco-green-DEFAULT transition-colors p-2 rounded-md hover:bg-gray-800/50 search-button group relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Search (Ctrl+K)"
              >
                <Search className="w-5 h-5" />
                {/* Keyboard shortcut tooltip */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  <div className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded whitespace-nowrap">
                    ⌘K
                  </div>
                </div>
              </motion.button>

              <AnimatePresence>
                {isSearchOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute right-0 top-12 w-80 bg-gray-900/95 backdrop-blur-md border border-gray-700 rounded-lg shadow-xl p-4 z-50"
                  >
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        ref={searchRef}
                        value={searchQuery}
                        onChange={(e) => handleSearch(e.target.value)}
                        placeholder="Search services, projects..."
                        className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-psyco-green-DEFAULT"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Notifications */}
            <div className="relative">
              <motion.button
                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                className="text-white hover:text-psyco-green-DEFAULT transition-colors p-2 rounded-md hover:bg-gray-800/50 relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Bell className="w-5 h-5" />
                {notifications.filter(n => n.unread).length > 0 && (
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                )}
              </motion.button>

              <AnimatePresence>
                {isNotificationsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 top-12 w-80 bg-gray-900/95 backdrop-blur-md border border-gray-700 rounded-lg shadow-xl z-50"
                  >
                    <div className="p-4 border-b border-gray-700">
                      <h3 className="text-white font-semibold">Notifications</h3>
                    </div>
                    <div className="max-h-64 overflow-y-auto">
                      {notifications.map((notification) => (
                        <div key={notification.id} className="p-3 border-b border-gray-800 hover:bg-gray-800/50 transition-colors">
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <p className={cn("text-sm", notification.unread ? "text-white" : "text-gray-300")}>
                                {notification.title}
                              </p>
                              <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                            </div>
                            {notification.unread && (
                              <div className="w-2 h-2 bg-psyco-green-DEFAULT rounded-full ml-2"></div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Theme Toggle */}
            <div className="relative">
              <motion.button
                onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
                className="text-white hover:text-psyco-green-DEFAULT transition-colors p-2 rounded-md hover:bg-gray-800/50"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {currentTheme === 'dark' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </motion.button>

              <AnimatePresence>
                {isThemeMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 top-12 w-32 bg-gray-900/95 backdrop-blur-md border border-gray-700 rounded-lg shadow-xl z-50"
                  >
                    <div className="py-2">
                      <button
                        onClick={() => toggleTheme('light')}
                        className={cn("w-full text-left px-4 py-2 text-sm flex items-center gap-2 hover:bg-gray-800/50 transition-colors",
                          currentTheme === 'light' ? 'text-psyco-green-DEFAULT' : 'text-gray-300'
                        )}
                      >
                        <Sun className="w-4 h-4" />
                        Light
                      </button>
                      <button
                        onClick={() => toggleTheme('dark')}
                        className={cn("w-full text-left px-4 py-2 text-sm flex items-center gap-2 hover:bg-gray-800/50 transition-colors",
                          currentTheme === 'dark' ? 'text-psyco-green-DEFAULT' : 'text-gray-300'
                        )}
                      >
                        <Moon className="w-4 h-4" />
                        Dark
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Language Selector */}
            <div className="relative">
              <motion.button
                onClick={() => changeLanguage(currentLanguage === 'EN' ? 'ES' : 'EN')}
                className="text-white hover:text-psyco-green-DEFAULT transition-colors p-2 rounded-md hover:bg-gray-800/50 text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {currentLanguage}
              </motion.button>
            </div>

            {/* User Menu */}
            <div className="relative">
              <motion.button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="text-white hover:text-psyco-green-DEFAULT transition-colors p-2 rounded-md hover:bg-gray-800/50"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <User className="w-5 h-5" />
              </motion.button>

              <AnimatePresence>
                {isUserMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 top-12 w-48 bg-gray-900/95 backdrop-blur-md border border-gray-700 rounded-lg shadow-xl z-50"
                  >
                    <div className="p-3 border-b border-gray-700">
                      <p className="text-white font-medium">Guest User</p>
                      <p className="text-gray-400 text-sm">guest@example.com</p>
                    </div>
                    <div className="py-2">
                      <button className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-800/50 hover:text-white flex items-center gap-2 transition-colors">
                        <Settings className="w-4 h-4" />
                        Settings
                      </button>
                      <button className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-800/50 hover:text-white flex items-center gap-2 transition-colors">
                        <Heart className="w-4 h-4" />
                        Favorites
                      </button>
                      <button className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-800/50 hover:text-white flex items-center gap-2 transition-colors">
                        <Bookmark className="w-4 h-4" />
                        Saved Projects
                      </button>
                      <div className="border-t border-gray-700 mt-2 pt-2">
                        <button className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-gray-800/50 hover:text-red-300 flex items-center gap-2 transition-colors">
                          <LogOut className="w-4 h-4" />
                          Sign Out
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
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
