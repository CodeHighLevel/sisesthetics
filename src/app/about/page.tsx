'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslation } from '@/lib/LanguageContext';
import { fadeInUp, slideInLeft, slideInRight } from '@/lib/animations';
import SectionHeading from '@/components/ui/SectionHeading';

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <main className="pt-20 lg:pt-24">
      <div className="py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeading title={t.about.sectionTitle} subtitle={t.about.sectionSubtitle} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-24">
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Image
                src="/sisesthetics-scraped/20250206_115518-scaled.jpg"
                alt="Sis Esthetics Salon"
                width={600}
                height={800}
                className="w-full object-cover"
              />
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
              <p className="text-neutral-500 leading-[1.9] text-[15px]">
                {t.about.story}
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="border border-neutral-200 p-10 md:p-14 hover:border-accent/20 transition-colors duration-500"
            >
              <h3 className="font-serif text-xl md:text-2xl tracking-wide mb-5">{t.about.philosophy}</h3>
              <p className="text-neutral-400 text-[13px] leading-[1.9]">
                {t.about.philosophyText}
              </p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="border border-neutral-200 p-10 md:p-14 hover:border-accent/20 transition-colors duration-500"
            >
              <h3 className="font-serif text-xl md:text-2xl tracking-wide mb-5">{t.about.quality}</h3>
              <p className="text-neutral-400 text-[13px] leading-[1.9]">
                {t.about.qualityText}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
