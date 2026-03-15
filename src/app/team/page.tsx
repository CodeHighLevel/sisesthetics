'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from '@/lib/LanguageContext';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import SectionHeading from '@/components/ui/SectionHeading';

export default function TeamPage() {
  const { t } = useTranslation();

  return (
    <main className="pt-20 lg:pt-24">
      <div className="py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeading title={t.team.sectionTitle} subtitle={t.team.sectionSubtitle} />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-20"
          >
            {t.team.members.map((member, i) => (
              <motion.div
                key={member.id}
                variants={fadeInUp}
                className={`flex flex-col md:flex-row items-center gap-14 ${
                  i % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="w-52 h-52 rounded-full bg-gradient-to-br from-accent/5 to-accent/15 flex items-center justify-center border border-accent/15 shrink-0">
                  <span className="font-serif text-6xl text-accent/60">{member.initials}</span>
                </div>
                <div className={`flex-1 ${i % 2 === 1 ? 'md:text-right' : ''}`}>
                  <h3 className="font-serif text-2xl md:text-3xl tracking-wide">{member.name}</h3>
                  <p className="text-accent text-[11px] tracking-[0.2em] uppercase mt-2">{member.role}</p>
                  <p className="text-neutral-400 text-[13px] mt-5 leading-[1.9] max-w-lg">
                    {member.bio}
                  </p>
                  <div className={`flex flex-wrap gap-2 mt-5 ${i % 2 === 1 ? 'md:justify-end' : ''}`}>
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
                    className="inline-flex items-center gap-2 mt-8 btn-primary"
                  >
                    {t.team.bookWith} {member.name.split(' ')[0]}
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
