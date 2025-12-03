'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const portfolioSections = [
  { title: 'Corporate', description: 'Professional brand films and corporate storytelling.' },
  { title: 'Event Coverage', description: 'Live and real-time coverage of conferences and events.' },
  { title: 'Concerts', description: 'Dynamic visuals capturing energy and atmosphere.' },
  { title: 'Advertisements', description: 'Creative campaigns and commercial spots.' },
  { title: 'Documentaries', description: 'In-depth storytelling with cinematic quality.' },
  { title: 'Campaigns', description: 'Multi-platform branded content strategies.' },
  { title: 'Weddings', description: 'Emotional, timeless wedding films and photography.' },
];

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-black mt-6 mb-4"
          >
            Our Portfolios
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Explore our diverse showcase of creative triumphs and design mastery.
          </motion.p>
        </div>

        {/* Portfolio Sections */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-8 shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-orange-600 mb-3">
                {section.title}
              </h3>
              <p className="text-gray-700">{section.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
