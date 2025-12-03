'use client';

import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CEO',
      content: 'Pine Creatives transformed our digital presence completely. Their attention to detail and innovative approach exceeded our expectations. The team delivered exceptional results that drove our business growth by 300% within the first quarter.',
      rating: 5,
      avatar: 'SJ',
      project: 'Enterprise Platform Development'
    },
    {
      name: 'Michael Chen',
      company: 'StartupLab',
      role: 'Founder',
      content: 'Working with Pine Creatives was a game-changer for our startup. They understood our vision perfectly and created a brand identity that represents exactly who we are. The mobile app they built has been a huge success with our users.',
      rating: 5,
      avatar: 'MC',
      project: 'Mobile App & Branding'
    },
    {
      name: 'Emily Davis',
      company: 'RetailPlus',
      role: 'Marketing Director',
      content: 'The team at Pine Creatives is incredibly talented and professional. They delivered our e-commerce platform on time and within budget. The results speak for themselves - we saw a 300% increase in online sales within three months.',
      rating: 5,
      avatar: 'ED',
      project: 'E-commerce Platform'
    },
    {
      name: 'David Rodriguez',
      company: 'HealthTech Solutions',
      role: 'CTO',
      content: 'Pine Creatives delivered a complex healthcare dashboard that exceeded all our requirements. Their technical expertise and user-centric design approach resulted in a product that our clients absolutely love.',
      rating: 5,
      avatar: 'DR',
      project: 'Healthcare Dashboard'
    },
    {
      name: 'Lisa Wang',
      company: 'Creative Studio',
      role: 'Art Director',
      content: 'The portfolio website Pine Creatives built for us is simply stunning. It perfectly showcases our work and has helped us attract high-profile clients. Their attention to detail is unmatched.',
      rating: 5,
      avatar: 'LW',
      project: 'Portfolio Website'
    },
    {
      name: 'James Thompson',
      company: 'GreenTech Innovations',
      role: 'Founder & CEO',
      content: 'From brand identity to digital marketing, Pine Creatives handled everything with professionalism and creativity. They helped us establish a strong market presence in the renewable energy sector.',
      rating: 5,
      avatar: 'JT',
      project: 'Complete Brand Identity'
    }
  ];

  const stats = [
    { number: '150+', label: 'Happy Clients' },
    { number: '200+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Industry Awards' }
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
                Testimonials
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-black mt-6 mb-6">
                What Our Clients Say
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Don't just take our word for it. Here's what our clients have to say about 
                working with Pine Creatives and the results we've achieved together.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-black mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (index % 2) * 0.2 }}
                  className="bg-gray-50 rounded-2xl p-8 relative group hover:shadow-lg transition-all duration-300"
                >
                  <Quote className="w-8 h-8 text-orange-400 mb-6" />
                  
                  <blockquote className="text-lg text-gray-800 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>

                  <div className="flex justify-between items-start">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center text-black font-bold text-lg">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-black">{testimonial.name}</div>
                        <div className="text-gray-600 text-sm">
                          {testimonial.role} at {testimonial.company}
                        </div>
                        <div className="text-orange-600 text-sm font-medium">
                          {testimonial.project}
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-orange-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Testimonial Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                See What Our Clients Really Think
              </h2>
              <p className="text-lg text-gray-600">
                Watch real testimonials from clients who have experienced the Pine Creatives difference.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-20 h-20 bg-orange-400 rounded-full flex items-center justify-center group-hover:bg-orange-600 transition-colors duration-200"
                >
                  <div className="w-0 h-0 border-l-[12px] border-l-black border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                </motion.div>
              </div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold mb-2">Client Success Stories</h3>
                <p className="text-gray-300">Hear directly from our satisfied clients</p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}