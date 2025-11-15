import React, { useEffect, useState } from "react";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import ContactForm from "@/components/ContactForm";
import TestimonialCard from "@/components/TestimonialCard";
import { Link } from "react-router-dom";
import { Code, Palette, TrendingUp, Smartphone, Briefcase, MoveRight, ExternalLink, ArrowUp } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/animations/AnimatedComponents";
import AutoSlider from "@/components/animations/AutoSlider";

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Track scroll position for scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'portfolio', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const portfolioProjects = [
    {
      id: 1,
      title: "E-commerce Fashion Platform",
      category: "E-commerce",
      description: "Complete e-commerce solution with 300% increase in sales.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      tags: ["React", "Node.js", "Stripe"]
    },
    {
      id: 2,
      title: "TechCorp Digital Transformation",
      category: "Corporate",
      description: "Modern corporate website with 250% improved engagement.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80",
      tags: ["Next.js", "TypeScript"]
    },
    {
      id: 3,
      title: "Startup Brand Identity",
      category: "Branding",
      description: "Complete brand identity design and strategy.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80",
      tags: ["Brand Design", "UI/UX"]
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechGrowth Inc.",
      testimonial: "Working with ClikXo transformed our digital presence completely. Their attention to detail and creative approach exceeded all our expectations.",
      rating: 5,
      imageSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CEO",
      company: "InnovateStart",
      testimonial: "The website they built for us has increased our conversion rate by 150%. Their team is professional, responsive, and incredibly talented.",
      rating: 5,
      imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "E-commerce Manager",
      company: "StyleHub",
      testimonial: "Our online sales have tripled since launching the new e-commerce platform. The team understood our vision perfectly and delivered beyond it.",
      rating: 5,
      imageSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="scroll-smooth">
      {/* Home Section */}
      <section id="home" className="min-h-screen" data-section="home">
        <HeroSection />
      </section>
      
      {/* Services Section */}
      <section id="services" className="min-h-screen py-20 px-6 md:px-12 flex items-center" data-section="services">
        <div className="max-w-7xl mx-auto w-full">
          <StaggerContainer className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
            <StaggerItem>
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">Our Services</h2>
                <p className="text-gray-400 max-w-2xl">
                  Professional digital solutions to grow your business online and reach your target audience effectively
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Web Development",
                description: "Custom websites and web applications built with modern technologies and best practices.",
                icon: <Code size={24} />,
                imageSrc: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
                link: "#services"
              },
              {
                title: "Graphic Design",
                description: "Create stunning brand identities, logos, and visual designs that tell your story.",
                icon: <Palette size={24} />,
                imageSrc: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80",
                link: "#services"
              },
              {
                title: "Digital Marketing",
                description: "Grow your business online with SEO, social media marketing, and targeted campaigns.",
                icon: <TrendingUp size={24} />,
                imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
                link: "#services"
              }
            ].map((service, index) => (
              <StaggerItem key={index}>
                <div className="gradient-ring shimmer">
                  <ServiceCard
                    {...service}
                    className="h-full"
                  />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="min-h-screen py-20 px-6 md:px-12 bg-psyco-black-light flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <StaggerContainer className="text-center mb-12">
            <StaggerItem>
              <h2 className="text-3xl font-bold text-white mb-2">What Our Clients Say</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Don't just take our word for it - hear from businesses we've transformed
              </p>
            </StaggerItem>
          </StaggerContainer>

          <div className="max-w-4xl mx-auto">
            <AutoSlider interval={5000}>
              {testimonials.map(testimonial => (
                <TestimonialCard
                  key={testimonial.id}
                  {...testimonial}
                  className="h-full"
                />
              ))}
            </AutoSlider>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="min-h-screen py-20 px-6 md:px-12 flex items-center" data-section="portfolio">
        <div className="max-w-7xl mx-auto w-full">
          <StaggerContainer className="text-center mb-12">
            <StaggerItem>
              <h2 className="text-3xl font-bold text-white mb-2">Our Portfolio</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Explore our latest projects and successful client transformations
              </p>
            </StaggerItem>
          </StaggerContainer>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <StaggerItem key={project.id}>
                <div className="gradient-ring shimmer">
                  <div className="glassmorphism p-1 h-full group border-glow">
                    <div className="relative h-full w-full overflow-hidden rounded-xl">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      
                      <div className="p-6 bg-psyco-black-light">
                        <div className="bg-psyco-green-DEFAULT/20 text-psyco-green-DEFAULT inline-block px-3 py-1 text-xs font-medium rounded-full mb-3">
                          {project.category}
                        </div>
                        
                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-psyco-green-DEFAULT transition-colors duration-300">
                          {project.title}
                        </h3>
                        
                        <p className="text-gray-300 mb-4 text-sm">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-psyco-black-DEFAULT text-gray-400 px-2 py-1 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <StaggerContainer className="mt-12 text-center">
            <StaggerItem>
              <Link
                to="/portfolio"
                className="inline-flex items-center text-psyco-green-DEFAULT hover:text-psyco-green-light transition-all duration-300 font-medium link-hover scale-hover"
              >
                View Full Portfolio
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>
      
      {/* About/Business Types Section */}
      <section id="about" className="min-h-screen py-20 px-6 md:px-12 flex items-center" data-section="about">
        <div className="max-w-7xl mx-auto w-full">
          <StaggerContainer className="text-center mb-12">
            <StaggerItem>
              <h2 className="text-3xl font-bold text-white mb-2">Perfect for Any Business</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                We create digital solutions that help businesses of all sizes succeed online and grow their digital presence
              </p>
            </StaggerItem>
          </StaggerContainer>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { name: "Startups", icon: <Smartphone size={32} /> },
              { name: "E-commerce", icon: <Briefcase size={32} /> },
              { name: "Small Business", icon: <Code size={32} /> },
              { name: "Agencies", icon: <TrendingUp size={32} /> }
            ].map((business, index) => (
              <StaggerItem key={index}>
                <div className="glassmorphism flex flex-col items-center justify-center py-8 px-4 text-center card-hover gradient-ring shimmer">
                  <div className="text-psyco-green-DEFAULT mb-4 float-animation" style={{ animationDelay: `${index * 0.2}s` }}>
                    {business.icon}
                  </div>
                  <h3 className="text-lg font-medium text-white">{business.name}</h3>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20 px-6 md:px-12 bg-psyco-black-light flex items-center" data-section="contact">
        <div className="max-w-7xl mx-auto w-full">
          <StaggerContainer className="text-center mb-12">
            <StaggerItem>
              <h2 className="text-3xl font-bold text-white mb-2">Get In Touch</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Ready to start your project? Fill out the form and we'll get back to you within 24 hours
              </p>
            </StaggerItem>
          </StaggerContainer>
          
          <StaggerItem>
            <ContactForm />
          </StaggerItem>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-psyco-green-DEFAULT hover:bg-psyco-green-dark text-white p-4 rounded-full shadow-lg transition-all duration-300 z-50 btn-glow pulse-glow scale-hover"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default Index;