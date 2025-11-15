import React, { useEffect } from "react";
import ContactForm from "@/components/ContactForm";
import { FadeUp } from "@/components/animations/AnimatedComponents";

const Contact = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
              <p className="text-xl text-gray-300 mb-8">
                Ready to bring your vision to life? Get in touch with our team and let's discuss your project. We're here to help you succeed.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <ContactForm />
          </FadeUp>
        </div>
      </section>
    </div>
  );
};

export default Contact;
