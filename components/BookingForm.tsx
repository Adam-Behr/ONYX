'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

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

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="relative w-full py-24 px-6 bg-slate-950 overflow-hidden" id="book-now">
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/20 via-transparent to-transparent pointer-events-none" />

      <motion.div
        className="max-w-4xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Book Your Appointment
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Schedule a consultation with our experts today
          </p>
        </motion.div>

        <motion.form onSubmit={handleSubmit} variants={containerVariants} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <motion.div variants={itemVariants}>
              <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                Full Name
              </label>
              <motion.input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full glass rounded-lg px-4 py-3 text-white placeholder-gray-500 border border-white/10 focus:border-cyan-400 focus:outline-none transition-colors"
                placeholder="Your name"
                required
                whileFocus={{ scale: 1.02 }}
              />
            </motion.div>

            {/* Email */}
            <motion.div variants={itemVariants}>
              <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                Email
              </label>
              <motion.input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full glass rounded-lg px-4 py-3 text-white placeholder-gray-500 border border-white/10 focus:border-magenta-400 focus:outline-none transition-colors"
                placeholder="your@email.com"
                required
                whileFocus={{ scale: 1.02 }}
              />
            </motion.div>

            {/* Phone */}
            <motion.div variants={itemVariants}>
              <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">
                Phone Number
              </label>
              <motion.input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full glass rounded-lg px-4 py-3 text-white placeholder-gray-500 border border-white/10 focus:border-cyan-400 focus:outline-none transition-colors"
                placeholder="(555) 123-4567"
                required
                whileFocus={{ scale: 1.02 }}
              />
            </motion.div>

            {/* Service */}
            <motion.div variants={itemVariants}>
              <label htmlFor="service" className="block text-sm font-semibold text-white mb-2">
                Service Type
              </label>
              <motion.select
                name="service"
                id="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full glass rounded-lg px-4 py-3 text-white border border-white/10 focus:border-magenta-400 focus:outline-none transition-colors"
                required
                whileFocus={{ scale: 1.02 }}
              >
                <option value="">Select a service</option>
                <option value="automotive">Automotive Tinting</option>
                <option value="residential">Residential Privacy</option>
                <option value="commercial">Commercial</option>
                <option value="solar">Solar Control</option>
              </motion.select>
            </motion.div>
          </div>

          {/* Date */}
          <motion.div variants={itemVariants}>
            <label htmlFor="date" className="block text-sm font-semibold text-white mb-2">
              Preferred Date
            </label>
            <motion.input
              type="date"
              name="date"
              id="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full glass rounded-lg px-4 py-3 text-white border border-white/10 focus:border-cyan-400 focus:outline-none transition-colors"
              required
              whileFocus={{ scale: 1.02 }}
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div variants={itemVariants} className="flex gap-4">
            <motion.button
              type="submit"
              className="flex-1 glass px-8 py-3 rounded-lg font-semibold text-white border border-cyan-400/50 hover:border-cyan-300 hover:bg-cyan-500/10"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(34, 211, 238, 0.3)' }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            >
              {submitted ? 'Booked!' : 'Reserve Now'}
            </motion.button>
          </motion.div>

          {/* Success Message */}
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="glass rounded-lg p-4 border border-green-400/50 bg-green-500/10 text-green-300"
            >
              Thank you! We'll contact you soon to confirm your appointment.
            </motion.div>
          )}
        </motion.form>
      </motion.div>
    </section>
  );
}
