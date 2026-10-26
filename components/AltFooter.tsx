'use client';

import { motion } from 'framer-motion';

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

export default function AltFooter() {
  return (
    <footer className="w-full bg-white border-t border-gray-200 py-16 px-6">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold text-gray-900 mb-4">ONYX</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Premium window tinting for a refined lifestyle.
            </p>
          </motion.div>

          {[
            { title: 'Services', links: ['Automotive', 'Residential', 'Commercial'] },
            { title: 'Company', links: ['About', 'Contact', 'Careers'] },
            { title: 'Legal', links: ['Privacy', 'Terms', 'Cookies'] },
          ].map((section) => (
            <motion.div key={section.title} variants={itemVariants}>
              <h4 className="font-semibold text-gray-900 mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600"
        >
          <p>&copy; 2024 ONYX Tint Co. All rights reserved.</p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
