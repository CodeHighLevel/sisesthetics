'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTranslation } from '@/lib/LanguageContext';
import { fadeInUp } from '@/lib/animations';

export default function CTABanner() {
  const { t } = useTranslation();

  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      <Image
        src="/sisesthetics-scraped/stailing-2-min.jpg"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-neutral-950/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/30 to-neutral-950/30" />

      <div className="relative z-10 max-w-2xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-accent-gold/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-accent-gold/40" />
            <div className="w-12 h-px bg-accent-gold/40" />
          </div>
          <h2 className="font-serif text-[clamp(1.75rem,4vw,3rem)] text-white font-light tracking-tight text-balance">
            {t.cta.heading}
          </h2>
          <p className="mt-5 text-neutral-400 text-[13px] md:text-sm leading-relaxed max-w-md mx-auto">
            {t.cta.subheading}
          </p>
          <div className="mt-10">
            <Link href="/booking" className="btn-gold">
              {t.cta.button}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
