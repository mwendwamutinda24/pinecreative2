'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CaseStudies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const caseStudies = [
    {
      company: 'Google',
      category: 'MOBILE UI & BRANDING',
      title: 'How Youtube found freedom, Flexibility, and Success.',
      color: 'bg-orange-400',
      textColor: 'text-black'
    },
    {
      company: 'Amazon',
      category: 'MOBILE UI & BRANDING',
      title: 'How Amazon found freedom, Flexibility, and Success.',
      color: 'bg-black',
      textColor: 'text-white'
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-orange-600 text-gray-100 px-4 py-2 rounded-full text-sm font-semibold">
              Recent Case Study
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-black mt-6"
          >
            Our Case Studies
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.company}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`${study.color} ${study.textColor} rounded-3xl p-8 md:p-12 group cursor-pointer relative overflow-hidden`}
            >
              <div className="relative z-10 h-full flex flex-col justify-between min-h-[400px]">
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <h3 className="text-2xl font-bold">{study.company}</h3>
                    <span className="text-sm opacity-80">{study.category}</span>
                  </div>
                  
                  <h4 className="text-2xl md:text-3xl font-bold leading-tight mb-8">
                    {study.title}
                  </h4>
                </div>

                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button 
                    variant={study.company === 'Google' ? 'outline' : 'secondary'}
                    className={`${
                      study.company === 'Google' 
                        ? 'border-black text-black hover:bg-black hover:text-white' 
                        : 'bg-white text-black hover:bg-gray-100'
                    } rounded-full px-6 py-2`}
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-4 h-4 ml-2" />
                  </Button>
                </motion.div>
              </div>

              {/* Background Pattern */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className={`absolute -top-8 -right-8 w-32 h-32 rounded-full border-2 ${
                  study.company === 'Google' ? 'border-black/20' : 'border-white/20'
                } opacity-50`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;