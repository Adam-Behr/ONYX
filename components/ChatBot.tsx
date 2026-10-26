'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { PaperPlaneRight, X } from '@phosphor-icons/react';

export default function ChatBot({ variant = 'dark' }: { variant?: 'dark' | 'light' }) {
  const isDark = variant === 'dark';
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Hi! How can we help you with your tinting needs today?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInput('');

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: 'Thanks for your message! Our team will respond shortly.',
          sender: 'bot',
          timestamp: new Date(),
        },
      ]);
    }, 800);
  };

  return (
    <>
      {/* Chat Widget Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-8 right-8 w-16 h-16 rounded-full glass border flex items-center justify-center z-40 transition-colors ${
          isDark
            ? 'border-cyan-400/50 hover:border-cyan-300 hover:bg-cyan-500/10'
            : 'border-gray-400/70 hover:border-gray-500 hover:bg-gray-100/10'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        <motion.div
          animate={{ scale: isOpen ? 0 : 1, opacity: isOpen ? 0 : 1 }}
          transition={{ duration: 0.2 }}
        >
          <svg
            className={`w-6 h-6 ${isDark ? 'text-cyan-400' : 'text-gray-700'}`}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
          </svg>
        </motion.div>
        <motion.div
          animate={{ scale: isOpen ? 1 : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <X size={24} weight="bold" className={isDark ? 'text-cyan-400' : 'text-gray-700'} />
        </motion.div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className={`fixed bottom-28 right-8 w-96 h-96 rounded-2xl flex flex-col shadow-xl z-40 ${
              isDark
                ? 'glass border border-cyan-400/30'
                : 'bg-white/95 border-2 border-gray-600 backdrop-blur-sm'
            }`}
          >
            {/* Header */}
            <div className={`border-b p-4 ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
              <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                ONYX Support
              </h3>
              <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                We typically reply in minutes
              </p>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
              {messages.map((msg, index) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs rounded-lg px-4 py-2 ${
                      msg.sender === 'user'
                        ? isDark
                          ? 'bg-cyan-500/20 text-white border border-cyan-400/30'
                          : 'bg-gray-100 text-gray-900 border border-gray-300/50'
                        : isDark
                        ? 'bg-white/5 text-gray-300 border border-white/10'
                        : 'bg-gray-50 text-gray-700 border border-gray-200/50'
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className={`border-t p-4 ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type a message..."
                  className={`flex-1 glass rounded-lg px-3 py-2 text-sm border focus:outline-none ${
                    isDark
                      ? 'text-white placeholder-gray-500 border-white/10 focus:border-cyan-400'
                      : 'text-gray-900 placeholder-gray-400 border-gray-300 focus:border-gray-500'
                  }`}
                />
                <motion.button
                  onClick={handleSend}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`glass rounded-lg p-2 border transition-colors ${
                    isDark
                      ? 'border-cyan-400/50 hover:border-cyan-300 hover:bg-cyan-500/10 text-cyan-400'
                      : 'border-gray-400/50 hover:border-gray-500 hover:bg-gray-100/10 text-gray-700'
                  }`}
                >
                  <PaperPlaneRight size={18} weight="fill" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
