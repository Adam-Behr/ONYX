'use client';

import { motion } from 'framer-motion';
import AltHeader from '@/components/AltHeader';
import AltHero from '@/components/AltHero';
import AltServices from '@/components/AltServices';
import AltGallery from '@/components/AltGallery';
import AltFooter from '@/components/AltFooter';
import ChatBot from '@/components/ChatBot';

export default function AltHome() {
  return (
    <main className="w-full overflow-hidden bg-white">
      <AltHeader />
      <AltHero />
      <AltServices />
      <AltGallery />
      <AltFooter />
      <ChatBot variant="light" />
    </main>
  );
}
