'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [openFAQ, setOpenFAQ] = useState(-1); // none open initially

  const faqs = [
    {
      question: 'What does Pine specialize in?',
      answer:
        'Pine is an audio-visual content agency specializing in storytelling through film, photography, and sound. We create commercials, documentaries, event highlights, real-time social content, and branded visuals that help businesses and creators connect meaningfully with their audiences.',
    },
    {
      question: 'Do you offer real-time content creation?',
      answer:
        'Yes! Real-time production is one of our core strengths. Our on-site team captures, edits, and delivers videos and photos during live events — ensuring your audience experiences the excitement as it unfolds.',
    },
    {
      question: 'Can Pine handle large-scale productions?',
      answer:
        'Absolutely. We scale our team and resources to match the size and complexity of each project — from intimate interviews and brand stories to multi-camera live productions and corporate campaigns.',
    },
    {
      question: 'What’s your typical workflow?',
      answer: `Our process is simple and collaborative:
1. Discovery & Concept – We understand your brand, audience, and goals.
2. Pre-Production – We plan the visuals, script, and logistics.
3. Production – Our team captures your story on camera and sound.
4. Post-Production – Editing, color grading, sound design, and final delivery.
We keep you involved every step of the way.`,
    },
    {
      question: '. How fast can Pine deliver a project?',
      answer:
        'Turnaround depends on scope — but for real-time events, we deliver select edits within hours. For full productions, timelines range from a few days to several weeks, depending on complexity. Quality and speed always go hand in hand.',
    },
      {
      question: 'Do you work with agencies or directly with brands?',
      answer:
        ' Pine is based in Kenya, with the flexibility to work across Africa and beyond. Our mobile production model allows us to adapt quickly to any environment — whether it’s a city shoot, a conference, or a remote location.',
    },
     {
      question: 'How do I get started with Pine?',
      answer:
        'Simply reach out to us via hello@pinecreatives.com or fill out our contact form. Tell us about your project, and we’ll schedule a quick creative briefing to explore how we can bring your story to life.',
    },
    {
      question: 'Where is Pine based?',
      answer:
        'Pine is based in Kenya, with the flexibility to work across Africa and beyond. Our mobile production model allows us to adapt quickly to any environment — whether it’s a city shoot, a conference, or a remote location.',
    },
    
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-orange-600 text-gray-100 px-4 py-2 rounded-full text-sm font-semibold">
              FAQs
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-black mt-6"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? -1 : index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-black pr-4">
                  {String(index + 1).padStart(2, '0')}. {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openFAQ === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </motion.div>
              </button>

              {/* Answer */}
              <motion.div
                initial={false}
                animate={{ height: openFAQ === index ? 'auto' : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 text-gray-600 leading-relaxed whitespace-pre-line">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
