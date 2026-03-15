'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from '@/lib/LanguageContext';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Team() {
  const { t } = useTranslation();

  return (
    <section className="py-24 md:py-36 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading title={t.team.sectionTitle} subtitle={t.team.sectionSubtitle} />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8"
        >
          {t.team.members.map((member) => (
            <motion.div key={member.id} variants={fadeInUp} className="text-center group">
              <div className="w-36 h-36 mx-auto mb-8 rounded-full bg-gradient-to-br from-accent/5 to-accent/15 flex items-center justify-center border border-accent/15 group-hover:border-accent/40 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-accent/5">
                <span className="font-serif text-4xl text-accent/70 group-hover:text-accent transition-colors duration-500">{member.initials}</span>
              </div>
              <h3 className="font-serif text-xl tracking-wide">{member.name}</h3>
              <p className="text-accent text-[11px] tracking-[0.2em] uppercase mt-2">{member.role}</p>
              <p className="text-neutral-400 text-[13px] mt-4 max-w-[280px] mx-auto leading-[1.8]">
                {member.bio}
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-5">
                {member.specialties.map((s) => (
                  <span
                    key={s}
                    className="text-[10px] px-3 py-1.5 bg-accent/5 text-accent/70 tracking-[0.1em] uppercase border border-accent/10"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <Link
                href="/booking"
                className="inline-flex items-center gap-1.5 mt-7 text-[11px] tracking-[0.15em] uppercase text-accent hover:text-accent-dark transition-all duration-300 group/link"
              >
                {t.team.bookWith} {member.name.split(' ')[0]}
                <ArrowUpRight size={12} />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
