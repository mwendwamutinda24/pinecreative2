'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const quickLinks = [
    { name: 'About', href: '/about' },
    { name: 'Portfolios', href: '/portfolios' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
  {
    title: '⚡ Live & Real-Time Content',
    description: 'On-site editing, instant social media reels, and event coverage that keeps audiences engaged as it happens.'
  },
  {
    title: '💡 Creative Direction',
    description: 'Concept development, scripting, and end-to-end content strategy.'
  },
  {
    title: '🎬 Video Production',
    description: 'Commercials, documentaries, branded films, and event highlights.'
  },
  {
    title: '📸 Photography',
    description: 'Compelling visuals that capture emotion, energy, and identity.'
  },
  {
    title: '🎧 Audio Production',
    description: 'Voiceovers, podcasts, sound design, and music scoring.'
  },
];


  return (
    <footer className="bg-black text-white">
      {/* CTA Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Next
              <span className="block text-orange-600">Digital Project?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s work together to create something amazing that will elevate your business to the next level.
            </p>
            <Button 
              asChild 
              size="lg"
              className="bg-orange-600 text-black hover:bg-orange-400 rounded-full px-8 py-4 text-lg font-semibold"
            >
              <Link href="/contact" className="flex items-center space-x-2">
                <span>Get Started Today</span>
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold">
              Pine<span className="text-orange-600">Creatives</span>
            </Link>
            <p className="text-gray-300">
              We create & market digital products that elevate your business and engage your audience.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Mail className="w-4 h-4" />
                <span>hello@pinecreatives.co.ke</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-orange-600 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.title} className="text-gray-300">
                <p className="font-semibold">{service.title}</p>
                <p className="text-sm text-gray-400">{service.description}</p>
              </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="w-4 h-4" />
                <span>+254 710 225132</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="w-4 h-4" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Pine Creatives. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;