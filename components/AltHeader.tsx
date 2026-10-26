'use client';

import { motion } from 'framer-motion';

export default function AltHeader() {
  const navItems = ['Services', 'Gallery', 'Book', 'Contact'];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200"
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
            src="/xpel-logo-dark.webp"
            alt="XPEL"
            className="h-[5.4rem] w-auto"
          />
          <div className="w-px h-[7.75rem] bg-gray-300" />
          <img
            src="/onyx-logo-light.webp"
            alt="ONYX Tint Co."
            className="h-[7.75rem] w-auto"
          />
        </motion.div>

        <div className="hidden md:flex items-center gap-12">
          {navItems.map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              whileHover={{ y: -2 }}
            >
              {item}
            </motion.a>
          ))}
        </div>

        <motion.button
          className="px-6 py-2 rounded-full text-sm font-semibold text-white bg-gray-900 hover:bg-gray-800 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
          Reserve
        </motion.button>
      </nav>
    </motion.header>
  );
}
