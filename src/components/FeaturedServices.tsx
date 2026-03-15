'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslation } from '@/lib/LanguageContext';
import { staggerContainer } from '@/lib/animations';
import SectionHeading from '@/components/ui/SectionHeading';
import ServiceCard from '@/components/ui/ServiceCard';

export default function FeaturedServices() {
  const { t } = useTranslation();
  const featured = t.services.items.slice(0, 4);

  return (
    <section className="py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading title={t.services.sectionTitle} subtitle={t.services.sectionSubtitle} />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4"
        >
          {featured.map((service) => (
            <ServiceCard
              key={service.id}
              name={service.name}
              description={service.description}
              image={service.image}
              ctaText={t.services.bookNow}
            />
          ))}
        </motion.div>

        <div className="text-center mt-16">
          <Link href="/services" className="btn-outline-dark">
            {t.services.viewAll}
          </Link>
        </div>
      </div>
    </section>
  );
}
