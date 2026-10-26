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

export default function Footer() {
  const footerLinks = [
    {
      title: 'Company',
      links: ['About', 'Services', 'Gallery', 'Contact'],
    },
    {
      title: 'Support',
      links: ['FAQ', 'Help Center', 'Booking', 'Warranty'],
    },
    {
      title: 'Legal',
      links: ['Privacy', 'Terms', 'Cookies', 'Sitemap'],
    },
  ];

  return (
    <footer className="relative w-full bg-slate-950 border-t border-white/5 overflow-hidden" id="contact">
      <motion.div
        className="max-w-7xl mx-auto px-6 py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold text-white mb-4">ONYX Tint Co.</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium window tinting solutions for automotive, residential, and commercial spaces.
            </p>
            <div className="flex gap-4 mt-6">
              {['twitter', 'instagram', 'facebook'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="w-10 h-10 glass rounded-full flex items-center justify-center border border-white/10 hover:border-cyan-400 text-gray-400 hover:text-cyan-400 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-xs font-bold">{social[0].toUpperCase()}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          {footerLinks.map((section) => (
            <motion.div key={section.title} variants={itemVariants}>
              <h4 className="font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                      whileHover={{ x: 4 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom */}
        <motion.div
          variants={itemVariants}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400"
        >
          <p>&copy; 2024 ONYX Tint Co. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <motion.a href="#" whileHover={{ x: 2 }}>
              Privacy Policy
            </motion.a>
            <motion.a href="#" whileHover={{ x: 2 }}>
              Terms of Service
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
