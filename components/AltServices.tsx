'use client';

import { motion } from 'framer-motion';

const services = [
  { id: 1, title: 'Automotive', desc: 'Premium car window tinting' },
  { id: 2, title: 'Residential', desc: 'Home privacy and comfort' },
  { id: 3, title: 'Commercial', desc: 'Building efficiency solutions' },
  { id: 4, title: 'Specialty', desc: 'Custom applications' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AltServices() {
  return (
    <section className="w-full py-32 px-6 bg-white">
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
          Our Services
        </motion.h2>

        <motion.div className="grid grid-cols-1 md:grid-cols-4 gap-12" variants={containerVariants}>
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="border-t-2 border-gray-300 pt-8 group cursor-pointer"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 font-light">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
