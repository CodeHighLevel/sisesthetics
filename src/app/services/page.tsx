'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from '@/lib/LanguageContext';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import SectionHeading from '@/components/ui/SectionHeading';

export default function ServicesPage() {
  const { t } = useTranslation();

  const grouped = {
    hair: t.services.items.filter((s) => s.category === 'hair'),
    nails: t.services.items.filter((s) => s.category === 'nails'),
    face: t.services.items.filter((s) => s.category === 'face'),
  };

  return (
    <main className="pt-20 lg:pt-24">
      <div className="py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeading title={t.services.sectionTitle} subtitle={t.services.sectionSubtitle} />

          {(Object.keys(grouped) as Array<'hair' | 'nails' | 'face'>).map((category) => (
            <div key={category} className="mb-20 last:mb-0">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-8 h-px bg-accent/30" />
                <h3 className="font-serif text-xl tracking-wider text-accent">
                  {t.services.categories[category]}
                </h3>
              </div>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {grouped[category].map((service) => (
                  <motion.div
                    key={service.id}
                    variants={fadeInUp}
                    className="group relative overflow-hidden aspect-[3/4]"
                  >
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                    <div className="absolute inset-0 flex flex-col justify-end p-7 md:p-9">
                      <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                        <h4 className="font-serif text-xl md:text-2xl text-white font-light mb-2 tracking-wide">
                          {service.name}
                        </h4>
                        <p className="text-white/50 text-[13px] mb-3 line-clamp-2 leading-relaxed">
                          {service.description}
                        </p>
                        <div className="flex items-center gap-3 text-white/40 text-[11px] tracking-[0.1em] mb-5">
                          <span>{service.price}</span>
                          <span className="text-white/20">|</span>
                          <span>{service.duration}</span>
                        </div>
                      </div>
                      <Link
                        href="/booking"
                        className="inline-flex items-center gap-2 text-accent-gold text-[11px] tracking-[0.2em] uppercase opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0"
                      >
                        {t.services.bookNow}
                        <ArrowUpRight size={13} />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
