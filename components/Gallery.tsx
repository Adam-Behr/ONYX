'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const galleryItems = [
  {
    id: 1,
    title: 'Automotive Tint',
    category: 'Cars',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    id: 2,
    title: 'Residential Privacy',
    category: 'Homes',
    gradient: 'from-magenta-500 to-purple-500',
  },
  {
    id: 3,
    title: 'Commercial Building',
    category: 'Business',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    id: 4,
    title: 'Solar Control',
    category: 'Energy',
    gradient: 'from-yellow-500 to-orange-400',
  },
  {
    id: 5,
    title: 'Luxury Vehicle',
    category: 'Premium',
    gradient: 'from-cyan-400 to-magenta-400',
  },
  {
    id: 6,
    title: 'Office Complex',
    category: 'Commercial',
    gradient: 'from-purple-500 to-pink-500',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Gallery() {
  return (
    <section className="relative w-full py-24 px-6 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-magenta-500/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Portfolio
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our latest tinting projects and transformations
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -12 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
              className="group cursor-pointer relative"
            >
              <div className="glass rounded-2xl overflow-hidden border border-white/10 group-hover:border-cyan-400/50 transition-colors h-64">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}
                />

                <motion.div className="absolute inset-0 flex items-end p-6 z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    <p className="text-sm text-gray-300">{item.category}</p>
                  </motion.div>
                </motion.div>

                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10`}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
