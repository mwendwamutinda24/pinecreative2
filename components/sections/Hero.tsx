'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* ================= Left Content ================= */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Headline */}
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We{' '}
              <motion.span 
                className="relative inline-block"
                whileHover={{ scale: 1.05 }}
              >
                <span className="bg-orange-600 text-gray-100 px-4 py-2 rounded-2xl">
                  create
                </span>
              </motion.span>{' '}
              & market{' '}
              <span className="block">Digital Products</span>
            </motion.h1>

            {/* Supporting text */}
            <motion.p 
              className="text-xl text-gray-600 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Elevate your <span className="font-semibold">digital experience</span> with our 
              cutting-edge suite of meticulously crafted{' '}
              <span className="font-semibold">digital products</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* Primary CTA */}
              <Button 
                asChild
                size="lg"
                className="Button Button-primary"
              >
                <Link href="/contact" className="flex items-center space-x-2">
                  <span>Get Quote</span>
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </Button>

              {/* Secondary CTA */}
              <Button 
                variant="outline" 
                size="lg"
                className="Button Button-outline"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Showreel
              </Button>
            </motion.div>
          </motion.div>

          {/* ================= Right Illustration ================= */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative overflow-hidden"
            >
              <div className="text-center space-y-4">
                {/* Main Illustration */}
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 10, repeat: Infinity }}
                  className="relative w-full h-56 md:h-80 lg:h-96"
                >
                  <Image
                    src="/sapiens2.png"
                    alt="Success Illustration"
                    fill
                    className="object-contain scale-x-[-1]"
                    priority
                  />
                </motion.div>

                {/* Logos/Icons evenly sized with carousel effect */}
                <div className="Button Button-carousel justify-center gap-6">
                  <Image
                    src="/logo1.png"
                    alt="Logo 1"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                  <Image
                    src="/logo2.png"
                    alt="Logo 2"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                  <Image
                    src="/logo3.png"
                    alt="Logo 3"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-12 h-12 flex justify-center items-center bg-orange-300 rounded-full opacity-60"
            >
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="w-8 h-8 rounded-full flex items-center justify-center text-black text-sm"
              >
                ⭐
              </motion.div>
            </motion.div>

            <motion.div
              animate={{ x: [0, -15, 0], y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 w-8 h-8 bg-black rounded-full opacity-20"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
