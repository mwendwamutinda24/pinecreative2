'use client';

import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Mail, Phone, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber:'',
    company: '',
    project: '',
    budget: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      details: 'hello@pinecreatives.co.ke',
      description: 'Send us an email anytime!'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      details: '+254 710 225132',
      description: 'Mon-Fri from 8am to 5pm.'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Visit Us',
      details: '123 Creative Street, Nairobi, Kenya 10001',
      description: 'Come say hello at our office HQ.'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Working Hours',
      details: 'Mon - Fri: 8:00 AM - 6:00 PM',
      description: 'Weekend support available.'
    }
  ];

  const services = [
    'General Inquiry ',
    'General Inquiry ',
    'Creative Direction',
    '	Video Production',
    'Photography ',
    'Audio Production'
    
  ];

  const budgetRanges = [
    'Less than $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    'More than $100,000'
  ];

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <span className="bg-orange-600 text-gray-100 px-4 py-2 rounded-full text-sm font-semibold">
                Get In Touch
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-black mt-6 mb-6">
                Let&apos;s Start Something
                <span className="block text-orange-600">Amazing Together</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Ready to bring your vision to life? We&apos;d love to hear about your project 
                and discuss how we can help you achieve your goals.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-2xl p-6 text-center group hover:shadow-lg transition-all duration-300"
                >
                  <div className="bg-orange-400 rounded-2xl w-14 h-14 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">{info.title}</h3>
                  <p className="text-black font-semibold mb-1">{info.details}</p>
                  <p className="text-gray-600 text-sm">{info.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-black mb-6">Send us a message</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>

      <form
  action="mailto:kariuki3els@gmail.com"
  method="post"
  encType="text/plain"
  className="space-y-6"
>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label htmlFor="name" className="block text-sm font-semibold text-black mb-2">
        Full Name *
      </label>
      <input
        id="name"
        name="name"
        type="text"
        required
        className="Button Button-input w-full"
        placeholder="John Doe"
      />
    </div>
    <div>
      <label htmlFor="email" className="block text-sm font-semibold text-black mb-2">
        Email Address *
      </label>
      <input
        id="email"
        name="email"
        type="email"
        required
        className="Button Button-input w-full"
        placeholder="john@example.com"
      />
      <label htmlFor="phoneNumber" className="block text-sm font-semibold text-black mb-2 mt-4">
        Phone Number
      </label>
      <input
        id="phoneNumber"
        name="phoneNumber"
        type="tel"
        className="Button Button-input w-full"
        placeholder="07XXXXXXXX"
      />
    </div>
  </div>

  <div>
    <label htmlFor="company" className="block text-sm font-semibold text-black mb-2">
      Company Name
    </label>
    <input
      id="company"
      name="company"
      type="text"
      className="Button Button-input w-full"
      placeholder="Your Company"
    />
  </div>

  <div>
    <label htmlFor="project" className="block text-sm font-semibold text-black mb-2">
      Project Type *
    </label>
    <select
      id="project"
      name="project"
      required
      className="Button Button-input w-full bg-white"
    >
      <option value="">Select a service</option>
      <option value="Corporate">Corporate</option>
      <option value="Event Coverage">Event Coverage</option>
      <option value="Concerts">Concerts</option>
      <option value="Advertisements">Advertisements</option>
      <option value="Documentaries">Documentaries</option>
      <option value="Campaigns">Campaigns</option>
      <option value="Weddings">Weddings</option>
    </select>
  </div>

  <div>
    <label htmlFor="message" className="block text-sm font-semibold text-black mb-2">
      Project Details
    </label>
    <textarea
      id="message"
      name="message"
      rows={6}
      className="Button Button-input w-full resize-none"
      placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
    />
  </div>

  <Button
    type="submit"
    size="lg"
    className="Button Button-primary w-full flex items-center justify-center"
  >
    <span>Send Message</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 ml-2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  </Button>
</form>


              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:pl-8"
              >
                <h2 className="text-4xl font-bold text-black mb-6">Let&apos;s discuss your project</h2>
                <p className="text-lg text-gray-600 mb-8">
                  We&apos;re here to help you bring your ideas to life. Whether you have a detailed 
                  project brief or just a rough concept, we&apos;d love to hear from you.
                </p>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-black mb-4">Why choose Pine Creatives?</h3>
                    <ul className="space-y-3">
                      {[
                        'Fast, Real-Time Delivery – We specialize in instant event content that fuels engagement while the buzz is still hot.',
                        'Authentic Storytelling – We create emotional connections that last beyond the scroll.',
                        'Collaborative Process – We work closely with brands to ensure every piece feels true to their identity.',
                        'High Production Value – Every project, big or small, gets cinematic quality and polish.',
                    
                      ].map((benefit, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 bg-black rounded-full"></div>
                          </div>
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                 <div className="bg-black rounded-2xl p-8 text-white">
  <h3 className="text-xl font-bold mb-4">Ready to get started?</h3>
  <p className="text-gray-300 mb-6">
    Schedule a free consultation to discuss your project and get a detailed proposal.
  </p>
  <Button
    asChild
    size="lg"
    className="Button Button-primary"
  >
    <a href="tel:+15551234567" className="flex items-center space-x-2">
      <Phone className="w-4 h-4" />
      <span>Call Now</span>
    </a>
  </Button>
</div>

                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-black mb-4">Visit Our Office</h2>
              <p className="text-lg text-gray-600">
                Located in the heart of New York City, we&apos;d love to meet you in person.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center"
            >
              <div className="text-center">
                <MapPin className="w-16 h-16 text-orange-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-black mb-2">Pine Creatives HQ</h3>
                <p className="text-gray-600">123 Creative Street, Nairobi, Kenya 10001</p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}