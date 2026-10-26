'use client';

import { motion } from 'framer-motion';

export default function Header() {
  const navItems = ['Services', 'Gallery', 'Book Now', 'Contact'];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-cyan-500/20"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          className="flex items-center gap-3"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
          <img
            src="/xpel-logo-light.webp"
            alt="XPEL"
            className="h-[8.6rem] w-auto"
          />
          <div className="w-px h-[8.6rem] bg-cyan-500/30" />
          <img
            src="/onyx-logo-dark.webp"
            alt="ONYX Tint Co."
            className="h-[4.3rem] w-auto"
          />
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-sm font-medium text-white/80 hover:text-cyan-400 transition-colors"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              whileHover={{ x: 2 }}
            >
              {item}
            </motion.a>
          ))}
        </div>

        <motion.button
          className="glass px-6 py-2 rounded-lg text-sm font-semibold text-white border border-cyan-400/50 hover:border-cyan-300 hover:bg-cyan-500/10"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
          Get Started
        </motion.button>
      </nav>
    </motion.header>
  );
}
