import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Mail, Facebook, Code, Palette, TrendingUp } from 'lucide-react';
import { MagneticButton } from '@/components/animations/AnimatedComponents';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleNavClick = (section: string) => {
    if (isHomePage) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      navigate(`/#${section}`);
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };
  const coreServices = [
    {
      name: 'Web Development',
      icon: <Code size={20} />,
      description: 'Custom websites and web applications'
    },
    {
      name: 'Graphic Design',
      icon: <Palette size={20} />,
      description: 'Brand identity, logos, and visual design'
    },
    {
      name: 'Digital Marketing',
      icon: <TrendingUp size={20} />,
      description: 'SEO, social media, and online campaigns'
    }
  ];

  return (
    <footer className="bg-black border-t border-psyco-green-DEFAULT/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-psyco-green-light to-psyco-green-DEFAULT">
              ClikXo
            </h2>
            <p className="text-gray-300 max-w-md">
              Professional digital agency specializing in web development, graphic design, and digital marketing solutions.
            </p>
          </div>

          {/* Core Services */}
          <div>
            <h3 className="text-white font-medium mb-4 pb-2 border-b border-psyco-green-DEFAULT/10">
              Our Services
            </h3>
            <ul className="space-y-3">
              {coreServices.map((service, index) => (
                <li key={index}>
                  <MagneticButton
                    className="flex items-center space-x-2 text-gray-300 hover:text-psyco-green-DEFAULT transition-all duration-300 cursor-pointer group w-full text-left"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-psyco-green-DEFAULT group-hover:scale-110 transition-transform duration-300">{service.icon}</span>
                    <span className="text-sm">{service.name}</span>
                  </MagneticButton>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium mb-4 pb-2 border-b border-psyco-green-DEFAULT/10">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <MagneticButton
                  onClick={() => handleNavClick('home')}
                  className="text-gray-300 hover:text-psyco-green-DEFAULT transition-all duration-300 text-sm cursor-pointer link-hover w-full text-left"
                  whileHover={{ x: 5 }}
                >
                  Home
                </MagneticButton>
              </li>
              <li>
                <MagneticButton
                  onClick={() => handleNavClick('services')}
                  className="text-gray-300 hover:text-psyco-green-DEFAULT transition-all duration-300 text-sm cursor-pointer link-hover w-full text-left"
                  whileHover={{ x: 5 }}
                >
                  Services
                </MagneticButton>
              </li>
              <li>
                <MagneticButton
                  onClick={() => handleNavClick('portfolio')}
                  className="text-gray-300 hover:text-psyco-green-DEFAULT transition-all duration-300 text-sm cursor-pointer link-hover w-full text-left"
                  whileHover={{ x: 5 }}
                >
                  Portfolio
                </MagneticButton>
              </li>
              <li>
                <MagneticButton
                  onClick={() => handleNavClick('contact')}
                  className="text-gray-300 hover:text-psyco-green-DEFAULT transition-all duration-300 text-sm cursor-pointer link-hover w-full text-left"
                  whileHover={{ x: 5 }}
                >
                  Contact
                </MagneticButton>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-medium mb-4 pb-2 border-b border-psyco-green-DEFAULT/10">
              Get in Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-300">
                <Mail size={16} className="text-psyco-green-DEFAULT" />
                <span className="text-sm">contact@clikxo.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-300">
                <Facebook size={16} className="text-psyco-green-DEFAULT" />
                <a
                  href="https://facebook.com/clikxo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-psyco-green-DEFAULT transition-colors"
                >
                  facebook.com/clikxo
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-psyco-green-DEFAULT/10 mt-12 pt-6 flex flex-col md:flex-row justify-center items-center text-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} ClikXo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;