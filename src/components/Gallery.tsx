'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from '@/lib/LanguageContext';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { galleryImages } from '@/lib/data';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Gallery() {
  const { t } = useTranslation();
  const preview = galleryImages.slice(0, 6);

  return (
    <section className="py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading title={t.gallery.sectionTitle} subtitle={t.gallery.sectionSubtitle} />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="columns-2 md:columns-3 gap-3 md:gap-4 space-y-3 md:space-y-4"
        >
          {preview.map((img, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="break-inside-avoid group relative overflow-hidden cursor-pointer"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={i % 3 === 0 ? 800 : 600}
                className="w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-3 group-hover:translate-y-0 text-center">
                  <span className="text-white text-[11px] tracking-[0.25em] uppercase block">
                    {t.gallery.categories[img.category]}
                  </span>
                  <div className="w-6 h-px bg-accent-gold/60 mx-auto mt-2" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-16">
          <Link href="/gallery" className="btn-outline-dark inline-flex items-center gap-2">
            {t.gallery.viewFull}
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
