'use client';

import { motion } from 'framer-motion';

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

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] w-full pt-24 px-6 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-cyan-950/20 to-slate-950 pointer-events-none" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-magenta-500/10 rounded-full blur-3xl animate-pulse-slow" />

      <motion.div
        className="relative max-w-4xl mx-auto text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-6 bg-gradient-to-r from-cyan-400 via-magenta-400 to-purple-400 bg-clip-text text-transparent"
        >
          Premium Window Tinting Solutions
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Enhance your vehicles and spaces with our professional tinting expertise. Protect, privacy, and style combined.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            className="glass px-8 py-3 rounded-lg font-semibold text-white border border-cyan-400/50 hover:border-cyan-300 hover:bg-cyan-500/10"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(34, 211, 238, 0.3)' }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          >
            Explore Services
          </motion.button>
          <motion.button
            className="glass px-8 py-3 rounded-lg font-semibold text-white border border-magenta-400/50 hover:border-magenta-300 hover:bg-magenta-500/10"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(217, 70, 239, 0.3)' }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          >
            Book Consultation
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}
