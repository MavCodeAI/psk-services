import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import SkeletonLoader from '@/components/animations/SkeletonLoader';

const serviceTypes = [
  'Website Development',
  'E-commerce',
  'Mobile App',
  'Brand Design',
  'Logo Design',
  'SEO Services',
  'Social Media Marketing',
  'Content Marketing',
  'Other'
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (value: string) => {
    setFormData(prev => ({ ...prev, service: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.service) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      
      // Here you would normally send the data to your backend
      console.log('Contact form submitted:', formData);

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="grid gap-8 md:grid-cols-2">
      {/* Contact Information */}
      <div className="glassmorphism p-6 md:p-8">
        <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
        <p className="text-gray-300 mb-8">
          Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>

        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="bg-psyco-green-DEFAULT/20 p-3 rounded-lg">
              <Mail className="h-6 w-6 text-psyco-green-DEFAULT" />
            </div>
            <div>
              <h4 className="text-white font-medium mb-1">Email</h4>
              <p className="text-gray-300">contact@clikxo.com</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-psyco-green-DEFAULT/20 p-3 rounded-lg">
              <Phone className="h-6 w-6 text-psyco-green-DEFAULT" />
            </div>
            <div>
              <h4 className="text-white font-medium mb-1">Phone</h4>
              <p className="text-gray-300">+44 123 456 7890</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-psyco-green-DEFAULT/20 p-3 rounded-lg">
              <MapPin className="h-6 w-6 text-psyco-green-DEFAULT" />
            </div>
            <div>
              <h4 className="text-white font-medium mb-1">Office Hours</h4>
              <p className="text-gray-300">Mon-Fri: 9am-6pm</p>
              <p className="text-gray-300">Sat: 10am-4pm</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-psyco-green-muted/30">
          <h4 className="text-white font-medium mb-4">Why Choose Us?</h4>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="text-psyco-green-DEFAULT mt-1 mr-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.66675 10.1148L12.7947 3.98608L13.7381 4.92875L6.66675 12.0001L2.42675 7.76008L3.36941 6.81741L6.66675 10.1148Z" fill="currentColor" />
                </svg>
              </div>
              <span className="text-gray-300">Response within 24 hours</span>
            </li>
            <li className="flex items-start">
              <div className="text-psyco-green-DEFAULT mt-1 mr-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.66675 10.1148L12.7947 3.98608L13.7381 4.92875L6.66675 12.0001L2.42675 7.76008L3.36941 6.81741L6.66675 10.1148Z" fill="currentColor" />
                </svg>
              </div>
              <span className="text-gray-300">Free initial consultation</span>
            </li>
            <li className="flex items-start">
              <div className="text-psyco-green-DEFAULT mt-1 mr-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.66675 10.1148L12.7947 3.98608L13.7381 4.92875L6.66675 12.0001L2.42675 7.76008L3.36941 6.81741L6.66675 10.1148Z" fill="currentColor" />
                </svg>
              </div>
              <span className="text-gray-300">Transparent pricing</span>
            </li>
            <li className="flex items-start">
              <div className="text-psyco-green-DEFAULT mt-1 mr-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.66675 10.1148L12.7947 3.98608L13.7381 4.92875L6.66675 12.0001L2.42675 7.76008L3.36941 6.81741L6.66675 10.1148Z" fill="currentColor" />
                </svg>
              </div>
              <span className="text-gray-300">Dedicated project manager</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Contact Form */}
      <div className="glassmorphism p-6 md:p-8">
        <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
        
        {loading ? (
          <div className="space-y-4">
            <SkeletonLoader height="40px" />
            <SkeletonLoader height="40px" />
            <SkeletonLoader height="40px" />
            <SkeletonLoader height="40px" />
            <SkeletonLoader height="120px" />
            <SkeletonLoader height="40px" />
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2">Name *</label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Your name"
                className="bg-psyco-black-light border-psyco-green-muted/50"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2">Email *</label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="your.email@example.com"
                className="bg-psyco-black-light border-psyco-green-muted/50"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-gray-300 mb-2">Phone</label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+44 123 456 7890"
                className="bg-psyco-black-light border-psyco-green-muted/50"
              />
            </div>
            
            <div>
              <label htmlFor="company" className="block text-gray-300 mb-2">Company / Organization</label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Your company name"
                className="bg-psyco-black-light border-psyco-green-muted/50"
              />
            </div>
            
            <div>
              <label htmlFor="service" className="block text-gray-300 mb-2">Service Interested In *</label>
              <Select value={formData.service} onValueChange={handleServiceChange}>
                <SelectTrigger className="bg-psyco-black-light border-psyco-green-muted/50">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent className="bg-psyco-black-light border-psyco-green-muted/50">
                  {serviceTypes.map(service => (
                    <SelectItem key={service} value={service}>{service}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className="bg-psyco-black-light border-psyco-green-muted/50"
                placeholder="Tell us about your project..."
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-psyco-green-DEFAULT hover:bg-psyco-green-dark transition-colors flex items-center justify-center gap-2"
            >
              <Send className="h-4 w-4" />
              Send Message
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;