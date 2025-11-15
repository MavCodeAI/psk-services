import React, { useEffect } from "react";
import { Code, Palette, TrendingUp, Smartphone, Search, Globe, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import { StaggerContainer, StaggerItem, FadeUp } from "@/components/animations/AnimatedComponents";
import AnimatedCounter from "@/components/animations/AnimatedCounter";

const Services = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const mainServices = [
    {
      id: "webdev",
      icon: <Code size={32} />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies. From responsive landing pages to complex web platforms, we create fast, secure, and scalable solutions tailored to your business needs.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
      features: [
        "Custom website development",
        "React & modern JavaScript frameworks",
        "E-commerce solutions",
        "Content Management Systems (CMS)",
        "Progressive Web Apps (PWA)",
        "API development & integration"
      ]
    },
    {
      id: "design",
      icon: <Palette size={32} />,
      title: "Graphic Design",
      description: "Create stunning brand identities and visual designs that tell your story. From logos to complete brand guidelines, we craft memorable designs that resonate with your target audience.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80",
      features: [
        "Logo design & brand identity",
        "Marketing materials",
        "Social media graphics",
        "UI/UX design",
        "Print design",
        "Brand style guides"
      ]
    },
    {
      id: "marketing",
      icon: <TrendingUp size={32} />,
      title: "Digital Marketing",
      description: "Grow your business online with data-driven marketing strategies. We help you reach your target audience through SEO, social media marketing, content creation, and targeted advertising campaigns.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      features: [
        "Search Engine Optimization (SEO)",
        "Social media management",
        "Content marketing strategy",
        "Google Ads & PPC campaigns",
        "Email marketing automation",
        "Analytics & performance tracking"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: <Smartphone size={24} />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android."
    },
    {
      icon: <Search size={24} />,
      title: "SEO Optimization",
      description: "Improve your search rankings and drive organic traffic to your site."
    },
    {
      icon: <Globe size={24} />,
      title: "Website Maintenance",
      description: "Ongoing support, updates, and security monitoring for your website."
    },
    {
      icon: <Code size={24} />,
      title: "Custom Software",
      description: "Tailored software solutions to solve your unique business challenges."
    },
    {
      icon: <Palette size={24} />,
      title: "Brand Strategy",
      description: "Develop a comprehensive brand strategy that connects with your audience."
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Conversion Optimization",
      description: "Increase conversions with data-driven UX improvements and A/B testing."
    }
  ];

  const stats = [
    { value: 250, label: "Projects Completed" },
    { value: 98, label: "Client Satisfaction", suffix: "%" },
    { value: 150, label: "Happy Clients" },
    { value: 5, label: "Years Experience" }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-psyco-black-light py-20 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-psyco-green-DEFAULT/10 rounded-full blur-3xl top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <FadeUp>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
              <p className="text-xl text-gray-300 mb-8">
                Professional digital solutions to grow your business online. From stunning websites to powerful marketing campaigns, we have the expertise to transform your digital presence.
              </p>
              <Link
                to="/booking"
                className="inline-flex items-center bg-psyco-green-DEFAULT hover:bg-psyco-green-dark text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 btn-glow"
              >
                Book a Service
                <MoveRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 md:px-12 bg-psyco-black-DEFAULT">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StaggerItem key={index}>
                <div className="text-center p-6 glassmorphism rounded-xl">
                  <div className="text-3xl md:text-4xl font-bold text-psyco-green-DEFAULT mb-2">
                    <AnimatedCounter 
                      end={stat.value} 
                      duration={3} 
                      suffix={stat.suffix || ""} 
                    />
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer className="text-center mb-16">
            <StaggerItem>
              <h2 className="text-3xl font-bold text-white mb-2">What We Offer</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Comprehensive digital solutions to elevate your business
              </p>
            </StaggerItem>
          </StaggerContainer>
          
          {mainServices.map((service, index) => (
            <StaggerItem 
              key={service.id}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 mb-20 last:mb-0`}
            >
              <div className="w-full lg:w-1/2">
                <div className="glassmorphism p-1 rounded-2xl h-full">
                  <div className="relative w-full h-full overflow-hidden rounded-xl">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="object-cover w-full h-full aspect-video lg:aspect-auto transition-transform duration-10000 hover:scale-110"
                    />
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="text-psyco-green-DEFAULT mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="bg-psyco-black-light rounded-xl p-6">
                  <h4 className="text-lg font-medium text-white mb-4">What's Included:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="text-psyco-green-DEFAULT mt-1 mr-2">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.66675 10.1148L12.7947 3.98608L13.7381 4.92875L6.66675 12.0001L2.42675 7.76008L3.36941 6.81741L6.66675 10.1148Z" fill="currentColor" />
                          </svg>
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </StaggerItem>
          ))}
        </div>
      </section>
      
      {/* Additional Services */}
      <section className="py-20 px-6 md:px-12 bg-psyco-black-light">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer className="text-center mb-16">
            <StaggerItem>
              <h2 className="text-3xl font-bold text-white mb-2">Additional Services</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Specialized services to enhance your digital presence
              </p>
            </StaggerItem>
          </StaggerContainer>
          
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <StaggerItem key={index}>
                <div className="glassmorphism p-6 card-hover h-full">
                  <div className="text-psyco-green-DEFAULT mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-psyco-green-DEFAULT/10 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <FadeUp>
            <div className="glassmorphism p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Digital Presence?</h2>
              <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                Our team of experts is ready to help you build a powerful online presence that drives results and grows your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/booking"
                  className="bg-psyco-green-DEFAULT hover:bg-psyco-green-dark text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center btn-glow"
                >
                  Start Your Project
                  <MoveRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/portfolio"
                  className="bg-transparent border border-psyco-green-DEFAULT text-psyco-green-DEFAULT hover:bg-psyco-green-DEFAULT/10 font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
                >
                  View Our Portfolio
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
};

export default Services;