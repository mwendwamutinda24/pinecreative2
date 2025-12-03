'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                className="Button Button-lens relative h-64 shadow-lg"
              >
                <Image
                  src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg"
                  alt="Team member working"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="Button Button-lens relative h-64 shadow-lg mt-8"
              >
                <Image
                  src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"
                  alt="Design process"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
            
            {/* Floating Team Avatars */}
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-6 -right-6 flex -space-x-2"
            >
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.2, zIndex: 10 }}
                  className="Button Button-testimonial w-12 h-12 rounded-full border-4 border-white bg-orange-400 flex items-center justify-center text-black font-bold"
                >
                  {i}
                </motion.div>
              ))}
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="Button Button-testimonial w-12 h-12 rounded-full border-4 border-white bg-black flex items-center justify-center text-white text-sm"
              >
                +5
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="bg-orange-600 text-gray-100 px-4 py-2 rounded-full text-sm font-semibold">
                About the Pine Creatives Agency
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-black leading-tight"
            >
              About the{' '}
              <span className="text-orange-600">Agency</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              At Pine, we craft stories that move — stories that make people stop, feel, and remember.
              We’re an audio-visual content agency built on the belief that great storytelling
              is equal parts art and intention.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              From fast-turnaround event reels to cinematic brand films, we help businesses, creators, and institutions communicate their vision through powerful visuals and sound. Our work lives where creativity meets strategy — blending emotion, precision,
              and purpose to deliver content that connects deeply with audiences.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              Rooted in collaboration, every project at Pine begins with listening. We take the time to understand your story, your audience, and your goals — then bring it all to life through striking visuals, rich audio, and thoughtful storytelling.
              Whether it’s a large-scale production or a spontaneous moment that needs to be shared in real-time, Pine is your partner in turning ideas into visual experiences that last.
              Because at Pine, we don’t just capture moments — we create meaning.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Button 
                asChild
                size="lg"
                className="Button Button-primary"
              >
                <Link href="/about" className="flex items-center space-x-2">
                  <span>Learn More About Us</span>
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
