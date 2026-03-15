'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTranslation } from '@/lib/LanguageContext';
import { fadeInUp, fadeIn } from '@/lib/animations';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="/sisesthetics-scraped/viber_image_2025-03-19_14-00-54-053.jpg"
      >
        <source src="https://sisesthetics.com/wp-content/uploads/2025/04/Pavlinka-1.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.5 } },
          }}
          className="max-w-2xl"
        >
          <motion.div variants={fadeIn} className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-accent-gold" />
            <p className="text-accent-gold text-[11px] tracking-[0.4em] uppercase font-medium">
              {t.hero.label}
            </p>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="font-serif text-[clamp(2.5rem,6vw,5rem)] text-white font-light leading-[1.1] tracking-tight"
          >
            {t.hero.heading}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-7 text-white/60 text-[15px] md:text-base max-w-md leading-[1.8] font-light"
          >
            {t.hero.subheading}
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-12 flex flex-wrap gap-5">
            <Link href="/booking" className="btn-gold">
              {t.hero.bookAppointment}
            </Link>
            <Link href="/services" className="btn-outline">
              {t.hero.ourServices}
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-[1px] h-8 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
