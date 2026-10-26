'use client';

import { motion } from 'framer-motion';
import { Sun, Lock, Lightning, Wind } from '@phosphor-icons/react';

const services = [
  {
    id: 1,
    title: 'Automotive Tinting',
    description: 'Professional window tinting for cars, trucks, and SUVs',
    icon: Sun,
    color: 'from-cyan-500 to-blue-500',
  },
  {
    id: 2,
    title: 'Privacy Protection',
    description: 'Enhanced privacy for residential and commercial spaces',
    icon: Lock,
    color: 'from-magenta-500 to-purple-500',
  },
  {
    id: 3,
    title: 'Heat Rejection',
    description: 'Reduce heat and UV radiation by up to 65%',
    icon: Lightning,
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 4,
    title: 'Glare Reduction',
    description: 'Eliminate glare for better visibility and comfort',
    icon: Wind,
    color: 'from-teal-500 to-cyan-500',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Services() {
  return (
    <section className="relative w-full py-24 px-6 bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent pointer-events-none" />

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Premium Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We offer a comprehensive range of tinting solutions tailored to your needs
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { type: 'spring', stiffness: 100, damping: 20 } }}
                className="group relative"
              >
                <div className="glass rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-colors h-full flex flex-col">
                  <motion.div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 text-white`}
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    <Icon size={24} weight="bold" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  <motion.div
                    className="mt-6 w-1 h-0 bg-gradient-to-b from-cyan-400 to-magenta-400"
                    animate={{ height: ['0px', '24px', '0px'] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
