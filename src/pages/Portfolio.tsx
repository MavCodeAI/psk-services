import React, { useEffect } from "react";
import { ExternalLink } from "lucide-react";
import TiltCard from "@/components/animations/TiltCard";
import GlowingBorder from "@/components/animations/GlowingBorder";

const Portfolio = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const portfolioProjects = [
    {
      id: 1,
      title: "E-commerce Fashion Platform",
      category: "E-commerce",
      description: "Complete e-commerce solution with custom CMS, resulting in 300% increase in online sales within 6 months of launch.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      tags: ["React", "Node.js", "Stripe", "CMS"],
      link: "#"
    },
    {
      id: 2,
      title: "TechCorp Digital Transformation",
      category: "Corporate Website",
      description: "Modern corporate website with advanced integrations, improving user engagement by 250% and generating 40% more qualified leads.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      link: "#"
    },
    {
      id: 3,
      title: "Startup Brand Identity",
      category: "Branding & Design",
      description: "Complete brand identity design and strategy for a tech startup, including logo, style guide, and marketing collateral.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80",
      tags: ["Brand Design", "UI/UX", "Style Guide"],
      link: "#"
    },
    {
      id: 4,
      title: "Restaurant Booking Platform",
      category: "Web Application",
      description: "Full-featured restaurant booking system with real-time availability, payment processing, and customer management.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80",
      tags: ["React", "Firebase", "Payment Gateway"],
      link: "#"
    },
    {
      id: 5,
      title: "Fitness App Mobile Design",
      category: "Mobile App",
      description: "Modern fitness tracking mobile app with workout plans, nutrition tracking, and social features.",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80",
      tags: ["React Native", "UI Design", "Mobile"],
      link: "#"
    },
    {
      id: 6,
      title: "Real Estate Portal",
      category: "Web Platform",
      description: "Comprehensive property listing platform with advanced search, virtual tours, and agent management system.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80",
      tags: ["Vue.js", "Laravel", "Maps API"],
      link: "#"
    }
  ];

  const categories = ["All", "E-commerce", "Corporate Website", "Branding & Design", "Web Application", "Mobile App"];
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredProjects = portfolioProjects.filter(
    project => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-psyco-black-light py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">Our Portfolio</h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in animation-delay-100">
              Explore our latest projects and see how we've helped businesses transform their digital presence
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-6 md:px-12 bg-psyco-black-DEFAULT">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar flex-wrap">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                  activeCategory === category
                    ? "bg-psyco-green-DEFAULT text-white"
                    : "bg-psyco-black-light text-gray-300 hover:bg-psyco-black-card"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <TiltCard key={project.id} className="h-full" tiltAmount={5}>
                <GlowingBorder borderRadius="rounded-xl">
                  <div className="glassmorphism p-1 h-full group">
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
                        
                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-psyco-green-DEFAULT transition-colors">
                          {project.title}
                        </h3>
                        
                        <p className="text-gray-300 mb-4 text-sm">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-psyco-black-DEFAULT text-gray-400 px-2 py-1 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <a
                          href={project.link}
                          className="inline-flex items-center text-psyco-green-DEFAULT hover:text-psyco-green-light transition-colors text-sm font-medium"
                        >
                          View Project
                          <ExternalLink className="ml-1 h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </GlowingBorder>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-12 bg-psyco-black-light">
        <div className="max-w-7xl mx-auto">
          <div className="glassmorphism p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Ready to start your project? Get in touch with us and let's discuss how we can help transform your digital presence.
            </p>
            <a
              href="/booking"
              className="inline-flex items-center bg-psyco-green-DEFAULT hover:bg-psyco-green-dark text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 btn-glow"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;