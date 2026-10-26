'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import BookingForm from '@/components/BookingForm';
import ChatBot from '@/components/ChatBot';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="w-full overflow-hidden bg-slate-950">
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <BookingForm />
      <ChatBot />
      <Footer />
    </main>
  );
}
