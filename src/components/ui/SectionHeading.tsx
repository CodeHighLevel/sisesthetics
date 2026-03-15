'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  align?: 'center' | 'left';
}

export default function SectionHeading({
  title,
  subtitle,
  light = false,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={`mb-14 md:mb-20 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      <div className={`flex items-center gap-4 mb-5 ${align === 'center' ? 'justify-center' : ''}`}>
        <div className={`w-8 h-px ${light ? 'bg-accent-gold/50' : 'bg-accent/30'}`} />
        <div className={`w-1.5 h-1.5 rounded-full ${light ? 'bg-accent-gold/50' : 'bg-accent/30'}`} />
        <div className={`w-8 h-px ${light ? 'bg-accent-gold/50' : 'bg-accent/30'}`} />
      </div>
      <h2
        className={`font-serif text-[clamp(1.75rem,4vw,3.25rem)] font-light tracking-tight text-balance ${
          light ? 'text-white' : 'text-foreground'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-[13px] md:text-sm max-w-lg leading-relaxed tracking-wide ${
            align === 'center' ? 'mx-auto' : ''
          } ${light ? 'text-neutral-400' : 'text-neutral-400'}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
