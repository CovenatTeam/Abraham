import React from 'react';
import { motion } from 'motion/react';
import { siteConfig } from '../config';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
              <img
                src={siteConfig.about.image}
                alt="About us"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary opacity-20 rounded-full z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary opacity-20 rounded-full z-0"></div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-6 leading-tight">
              {siteConfig.about.title}
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {siteConfig.about.description}
            </p>
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-accent flex items-center justify-center rounded-full text-primary">
                  <span className="font-bold text-xl">20+</span>
                </div>
                <span className="text-sm font-medium text-gray-700">Years of Experience</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-accent flex items-center justify-center rounded-full text-primary">
                  <span className="font-bold text-xl">500+</span>
                </div>
                <span className="text-sm font-medium text-gray-700">Projects Completed</span>
              </div>
            </div>
            <a
              href="#contact"
              className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-8 rounded-md transition-all duration-300"
            >
              LEARN MORE
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
