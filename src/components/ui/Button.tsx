'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type Variant = 'primary' | 'outline' | 'outline-dark' | 'gold' | 'ghost';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

const variantClasses: Record<Variant, string> = {
  primary: 'btn-primary',
  outline: 'btn-outline',
  'outline-dark': 'btn-outline-dark',
  gold: 'btn-gold',
  ghost: 'inline-flex items-center justify-center px-4 py-2 text-sm font-medium tracking-wider uppercase transition-colors hover:text-accent',
};

export default function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
}: ButtonProps) {
  const classes = `${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link href={href} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={classes}
      onClick={onClick}
      type={type}
    >
      {children}
    </motion.button>
  );
}
