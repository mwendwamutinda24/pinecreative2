'use client';

import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import { Users, Target, Award, Lightbulb } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation',
      description: 'We constantly push boundaries and explore new possibilities in digital design and development.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We deliver nothing but the highest quality work that exceeds client expectations.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaboration',
      description: 'We believe in working closely with our clients as partners throughout the entire process.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Results',
      description: 'Every project we undertake is focused on delivering measurable results and business impact.'
    }
  ];

  const team = [
    {
      name: 'Alex Johnson',
      role: 'Creative Director',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
      bio: 'With over 10 years of experience in digital design, Alex leads our creative vision.'
    },
    {
      name: 'Sarah Chen',
      role: 'Lead Developer',
      image: 'https://images.pexels.com/photos/3184160/pexels-photo-3184160.jpeg',
      bio: 'Sarah brings technical excellence and innovative solutions to every project.'
    },
    {
      name: 'Marcus Williams',
      role: 'Strategy Director',
      image: 'https://images.pexels.com/photos/2182975/pexels-photo-2182975.jpeg',
      bio: 'Marcus ensures every project aligns with business goals and market needs.'
    }
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
                About Us
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-black mt-6 mb-6">
                We Are Pine<span className="text-orange-600">Creatives</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                A passionate team of creative professionals dedicated to transforming ideas into 
                compelling designs that captivate, inspire, and drive exceptional results for businesses worldwide.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-black mb-6">Our Story</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Founded in 2018, Pine Creatives emerged from a simple belief: that great design 
                  has the power to transform businesses and create meaningful connections between 
                  brands and their audiences.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  What started as a small studio has grown into a full-service digital agency, 
                  but our core mission remains the same - to create exceptional digital experiences 
                  that drive real business results.
                </p>
                <p className="text-lg text-gray-600">
                  Today, we work with startups, Fortune 500 companies, and everything in between, 
                  helping them navigate the digital landscape with confidence and style.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <Image
                  src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg"
                  alt="Our team working"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Our Values</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do and help us deliver exceptional results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center group hover:shadow-lg transition-all duration-300"
                >
                  <div className="bg-orange-400 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Meet Our Team</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The talented individuals who bring creativity, expertise, and passion to every project.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-2xl p-8 text-center group hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="rounded-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">{member.name}</h3>
                  <p className="text-orange-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}