'use client';

import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Portfolios() {
const projects = [
  {
    title: 'Corporate Film',
    category: 'Corporate',
    description: 'Professional corporate video showcasing company culture, values, and achievements.',
    image: '/pinecreative/Film3.png', 
    tags: ['Corporate', 'Film', 'Brand'],
    link: '#'
  },
  {
    title: 'Annual Conference Coverage',
    category: 'Event Coverage',
    description: 'Full coverage of a corporate annual conference with highlights and interviews.',
    image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg', // conference hall
    tags: ['Events', 'Coverage', 'Conference'],
    link: '#'
  },
  {
    title: 'Live Concert Recording',
    category: 'Concerts',
    description: 'Multi-camera recording and editing of a live concert performance.',
    image: 'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg', // concert stage lights
    tags: ['Music', 'Concert', 'Live'],
    link: '#'
  },
  {
    title: 'TV Advertisement',
    category: 'Advertisements',
    description: 'Creative advertisement produced for broadcast and digital platforms.',
    image: '/pinecreative/istockphoto-1312418309-612x612.jpg',
    tags: ['Ads', 'Marketing', 'Commercial'],
    link: '#'
  },
  {
    title: 'Documentary Film',
    category: 'Documentaries',
    description: 'In-depth documentary exploring social issues with cinematic storytelling.',
    image: 'pinecreative/Film2.png', 
    tags: ['Documentary', 'Film', 'Storytelling'],
    link: '#'
  },
  {
    title: 'Campaign Launch Video',
    category: 'Campaigns',
    description: 'Video campaign launch for a new product with social-first strategy.',
    image: 'pinecreative/Campaign.png', 
    tags: ['Campaign', 'Product', 'Launch'],
    link: '#'
  },
 {
  title: 'Wedding Highlights',
  category: 'Weddings',
  description: 'Beautifully edited wedding highlights capturing the most memorable moments.',
  image: '/pinecreative/image.png', 
  tags: ['Wedding', 'Highlights', 'Love'],
  link: '#'
}

];

  const categories = [
    'All',
    'Corporate',
    'Event Coverage',
    'Concerts',
    'Advertisements',
    'Documentaries',
    'Campaigns',
    'Weddings'
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
                Our Work
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-black mt-6 mb-6">
                Our Portfolios
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Explore our diverse showcase of creative triumphs and design mastery. 
                Each project represents our commitment to excellence and innovation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Categories */}
        <section className="py-8 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`px-6 py-2 rounded-full transition-all duration-200 ${
                    index === 0 
                      ? 'bg-black text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  {/* Thumbnail with fixed aspect ratio */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <Button
                        size="sm"
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-black hover:bg-gray-100 rounded-full"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Project
                      </Button>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-orange-600 text-sm font-semibold">{project.category}</span>
                      <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-black mb-3 group-hover:text-orange-600 transition-colors duration-200">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-white text-gray-600 text-sm rounded-full border border-gray-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
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
