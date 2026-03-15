'use client';

import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';
import { useTranslation } from '@/lib/LanguageContext';
import { slideInLeft, slideInRight } from '@/lib/animations';

export default function GiftCards() {
  const { t } = useTranslation();

  return (
    <section className="py-24 md:py-36 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-accent/[0.04] via-accent-gold/[0.06] to-accent/[0.02] border border-accent/10 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-6 border border-accent/[0.06] group-hover:border-accent/15 transition-colors duration-700" />
              <div className="absolute inset-12 border border-accent/[0.04]" />
              <div className="text-center relative z-10">
                <Gift className="w-10 h-10 text-accent/40 mx-auto mb-5" strokeWidth={1} />
                <p className="font-serif text-2xl text-accent/80 tracking-wide">Sis Esthetics</p>
                <div className="w-8 h-px bg-accent/20 mx-auto my-3" />
                <p className="text-[10px] tracking-[0.4em] uppercase text-neutral-400">Gift Card</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-accent/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-accent/30" />
            </div>
            <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] font-light tracking-tight text-balance">
              {t.giftCards.heading}
            </h2>
            <p className="text-accent text-[11px] tracking-[0.2em] uppercase mt-3">
              {t.giftCards.subheading}
            </p>
            <p className="text-neutral-400 text-[13px] mt-5 leading-[1.9] max-w-md">
              {t.giftCards.description}
            </p>
            <div className="mt-10">
              <button className="btn-primary">{t.giftCards.button}</button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
