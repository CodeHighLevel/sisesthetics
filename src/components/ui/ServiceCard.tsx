'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';
import { ArrowUpRight } from 'lucide-react';

interface ServiceCardProps {
  name: string;
  description: string;
  image: string;
  href?: string;
  ctaText?: string;
}

export default function ServiceCard({
  name,
  description,
  image,
  href = '/booking',
  ctaText = 'Book Now',
}: ServiceCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="group relative overflow-hidden aspect-[3/4] cursor-pointer"
    >
      <Link href={href} className="block w-full h-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500" />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
          <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
            <h3 className="font-serif text-xl md:text-2xl text-white font-light mb-2 tracking-wide">
              {name}
            </h3>
            <p className="text-white/50 text-[13px] mb-4 line-clamp-2 leading-relaxed">
              {description}
            </p>
          </div>
          <div className="flex items-center gap-2 text-accent-gold text-[11px] font-medium tracking-[0.2em] uppercase opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
            <span>{ctaText}</span>
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
