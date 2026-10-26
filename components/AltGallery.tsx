'use client';

import { motion } from 'framer-motion';

const items = [
  { id: 1, title: 'Luxury Vehicle' },
  { id: 2, title: 'Residential' },
  { id: 3, title: 'Commercial' },
  { id: 4, title: 'Premium Home' },
  { id: 5, title: 'Office Complex' },
  { id: 6, title: 'Estate' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export default function AltGallery() {
  return (
    <section className="w-full py-32 px-6 bg-gray-50">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-light text-gray-900 mb-20 text-center"
        >
          Portfolio
        </motion.h2>

        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={containerVariants}>
          {items.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="h-64 bg-white border border-gray-200 rounded-lg overflow-hidden group cursor-pointer"
            >
              <div className="w-full h-full flex items-end p-8 bg-gradient-to-br from-gray-100 to-white">
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="text-lg font-semibold text-gray-900"
                >
                  {item.title}
                </motion.h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
