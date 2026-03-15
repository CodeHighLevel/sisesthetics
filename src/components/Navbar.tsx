'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useTranslation } from '@/lib/LanguageContext';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';

const navLinks = [
  { key: 'services' as const, href: '/services' },
  { key: 'gallery' as const, href: '/gallery' },
  { key: 'team' as const, href: '/team' },
  { key: 'about' as const, href: '/about' },
  { key: 'contact' as const, href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/98 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.05)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <Link href="/" className="flex items-center">
            <span
              className={`font-serif text-lg lg:text-xl tracking-[0.25em] uppercase transition-colors duration-500 ${
                scrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              Sis Esthetics
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className={`text-[11px] tracking-[0.2em] uppercase transition-all duration-300 hover:text-accent-gold ${
                  scrolled ? 'text-neutral-500' : 'text-white/70'
                }`}
              >
                {t.nav[link.key]}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-5">
            <LanguageSwitcher />
            <Link href="/booking" className={`text-[11px] tracking-[0.2em] uppercase py-3 px-6 transition-all duration-500 ${
              scrolled
                ? 'bg-accent text-white border border-accent hover:bg-accent-dark'
                : 'bg-white/10 text-white border border-white/25 hover:bg-white/20'
            }`}>
              {t.nav.bookNow}
            </Link>
          </div>

          <button
            className={`lg:hidden p-2 transition-colors ${
              scrolled ? 'text-foreground' : 'text-white'
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:hidden bg-background overflow-hidden"
          >
            <div className="px-6 py-8 space-y-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="block text-[11px] tracking-[0.2em] uppercase text-neutral-500 hover:text-accent transition-colors py-3 border-b border-neutral-100"
                    onClick={() => setMobileOpen(false)}
                  >
                    {t.nav[link.key]}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-6 flex items-center gap-4">
                <LanguageSwitcher />
                <Link
                  href="/booking"
                  className="btn-primary flex-1 text-center"
                  onClick={() => setMobileOpen(false)}
                >
                  {t.nav.bookNow}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
