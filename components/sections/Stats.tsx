'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

interface StatCounterProps {
  targetNumber: number;
  label: string;
  isInView: boolean;
  delay?: number;
}

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { number: 6, label: 'Design Awards So Far' },
    { number: 19, label: 'International Clients / Countries' },
    { number: 31, label: 'Projects for Startup & Fortune 500' }
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <StatCounter
              key={index}
              targetNumber={stat.number}
              label={stat.label}
              isInView={isInView}
              delay={index * 0.2}
            />
          ))}
        </div>

        {/* Brands Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-3xl py-12 px-8 overflow-hidden"
        >
          <InfiniteLogoSlider />
        </motion.div>
      </div>
    </section>
  );
};

const StatCounter: React.FC<StatCounterProps> = ({
  targetNumber,
  label,
  isInView,
  delay = 0,
}) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayNumber, setDisplayNumber] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, targetNumber, {
        duration: 2,
        delay: delay,
        ease: 'easeOut'
      });
      return controls.stop;
    }
  }, [isInView, targetNumber, delay, count]);

  useEffect(() => {
    const unsubscribe = rounded.on('change', (latest) => {
      setDisplayNumber(latest);
    });
    return () => unsubscribe();
  }, [rounded]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <div className="text-6xl md:text-7xl font-bold text-black mb-4">
        {displayNumber.toString().padStart(2, '0')}
      </div>
      <p className="text-lg text-gray-600 font-medium">{label}</p>
    </motion.div>
  );
};

const InfiniteLogoSlider = () => {
  const logos = [
    '/logos/1.svg',
    '/logos/2.png',
    '/logos/3.png',
    '/logos/4.png',
    '/logos/5.png',
    '/logos/6.png',
    '/logos/7.png',
    '/logos/8.png',
    '/logos/9.png',
    '/logos/10.png',
    '/logos/11.png',
    '/logos/12.jpg',
    '/logos/13.png',
    '/logos/14.jpg',
    '/logos/15.png',
    '/logos/16.png',
    '/logos/17.png'
  ];

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex gap-16 items-center" // consistent spacing
        animate={{ x: [0, -1800] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {/* First set of logos */}
        {logos.map((logo, index) => (
          <div key={`first-${index}`} className="flex-shrink-0">
            <Image
              src={logo}
              alt={`Brand ${index + 1}`}
              width={100}
              height={100}
              className="h-20 w-25 object-contain transition-opacity"
            />
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {logos.map((logo, index) => (
          <div key={`second-${index}`} className="flex-shrink-0">
            <Image
              src={logo}
              alt={`Brand ${index + 1}`}
              width={100}
              height={100}
              className="h-20 w-25 object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};


export default Stats;
