'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useTranslation } from '@/lib/LanguageContext';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { galleryImages, type GalleryImage } from '@/lib/data';
import SectionHeading from '@/components/ui/SectionHeading';

type FilterCategory = 'all' | GalleryImage['category'];

export default function GalleryPage() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<FilterCategory>('all');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === 'all' ? galleryImages : galleryImages.filter((img) => img.category === filter);

  const filters: { key: FilterCategory; label: string }[] = [
    { key: 'all', label: t.gallery.filterAll },
    { key: 'hair', label: t.gallery.categories.hair },
    { key: 'nails', label: t.gallery.categories.nails },
    { key: 'makeup', label: t.gallery.categories.makeup },
    { key: 'bridal', label: t.gallery.categories.bridal },
  ];

  return (
    <main className="pt-20 lg:pt-24">
      <div className="py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeading title={t.gallery.sectionTitle} subtitle={t.gallery.sectionSubtitle} />

          <div className="flex flex-wrap justify-center gap-1 mb-14">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-5 py-2.5 text-[11px] tracking-[0.2em] uppercase transition-all duration-400 ${
                  filter === f.key
                    ? 'bg-accent text-white'
                    : 'bg-transparent text-neutral-400 hover:text-accent'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            key={filter}
            className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 space-y-3 md:space-y-4"
          >
            {filtered.map((img, i) => (
              <motion.div
                key={`${img.src}-${i}`}
                variants={fadeInUp}
                className="break-inside-avoid group relative overflow-hidden cursor-pointer"
                onClick={() => setLightbox(i)}
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
        </div>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
              onClick={() => setLightbox(null)}
            >
              <X size={28} strokeWidth={1} />
            </button>
            <Image
              src={filtered[lightbox].src}
              alt={filtered[lightbox].alt}
              width={1200}
              height={800}
              className="max-h-[85vh] w-auto object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
