'use client';

import { motion } from 'framer-motion';
import { useTranslation } from '@/lib/LanguageContext';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Testimonials() {
  const { t } = useTranslation();

  return (
    <section className="section-dark py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          title={t.testimonials.sectionTitle}
          subtitle={t.testimonials.sectionSubtitle}
          light
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4"
        >
          {t.testimonials.items.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeInUp}
              className="border border-white/8 p-8 md:p-10 relative group hover:border-white/15 transition-colors duration-500"
            >
              <span className="absolute -top-2 left-8 font-serif text-[80px] text-accent-gold/15 leading-none select-none">
                &ldquo;
              </span>
              <div className="flex gap-1 mb-5 mt-6">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <span key={i} className="text-accent-gold text-[10px]">★</span>
                ))}
              </div>
              <p className="text-neutral-300 text-[13px] leading-[1.9] mb-8">
                {item.quote}
              </p>
              <div className="border-t border-white/8 pt-5">
                <p className="text-white text-sm font-light tracking-wide">{item.name}</p>
                <p className="text-neutral-500 text-[10px] tracking-[0.2em] uppercase mt-1">
                  {item.service}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
