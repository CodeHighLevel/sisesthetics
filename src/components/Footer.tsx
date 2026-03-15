'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Check } from 'lucide-react';
import { useTranslation } from '@/lib/LanguageContext';
import { contactInfo } from '@/lib/data';

export default function Footer() {
  const { t, lang } = useTranslation();
  const [email, setEmail] = useState('');
  const [subStatus, setSubStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubStatus('loading');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error();
      setSubStatus('success');
      setEmail('');
    } catch {
      setSubStatus('error');
    }
  };

  return (
    <footer>
      <div className="bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
          <div className="mb-16 pb-16 border-b border-white/[0.06]">
            <div className="max-w-md mx-auto text-center">
              <h3 className="font-serif text-2xl md:text-3xl font-light tracking-wide mb-3">{t.footer.newsletter}</h3>
              <p className="text-neutral-500 text-[13px] mb-8 leading-relaxed">{t.footer.newsletterText}</p>
              {subStatus === 'success' ? (
                <div className="flex items-center justify-center gap-2 text-accent-gold text-[13px] py-3.5">
                  <Check size={16} />
                  {lang === 'bg' ? 'Абонирахте се успешно!' : 'Successfully subscribed!'}
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setSubStatus('idle'); }}
                    placeholder={t.footer.newsletterPlaceholder}
                    required
                    className="flex-1 px-5 py-3.5 bg-white/[0.04] border border-white/[0.08] text-white text-[13px] placeholder:text-neutral-600 focus:outline-none focus:border-accent-gold/40 transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={subStatus === 'loading'}
                    className="px-6 py-3.5 bg-accent-gold text-white text-[11px] tracking-[0.15em] uppercase font-medium hover:bg-accent transition-colors duration-300 disabled:opacity-50"
                  >
                    {subStatus === 'loading'
                      ? '...'
                      : t.footer.newsletterButton}
                  </button>
                </form>
              )}
              {subStatus === 'error' && (
                <p className="text-red-400 text-[12px] mt-2">
                  {lang === 'bg' ? 'Вече сте абонирани или възникна грешка.' : 'Already subscribed or an error occurred.'}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            <div>
              <Link href="/" className="font-serif text-lg tracking-[0.25em] uppercase text-white/90">
                Sis Esthetics
              </Link>
              <p className="mt-5 text-neutral-500 text-[13px] leading-[1.8]">
                {t.footer.description}
              </p>
              <div className="flex gap-6 mt-7">
                {[
                  { name: 'Fb', url: contactInfo.social.facebook },
                  { name: 'Ig', url: contactInfo.social.instagram },
                  { name: 'Tk', url: contactInfo.social.tiktok },
                ].map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-500 hover:text-accent-gold transition-colors duration-300 text-[11px] tracking-[0.15em] uppercase"
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-[11px] tracking-[0.2em] uppercase text-white/60 mb-5">{t.footer.quickLinks}</h4>
              <ul className="space-y-3">
                {(['services', 'gallery', 'team', 'about', 'contact'] as const).map((key) => (
                  <li key={key}>
                    <Link
                      href={`/${key}`}
                      className="text-neutral-500 hover:text-white/80 transition-colors duration-300 text-[13px]"
                    >
                      {t.nav[key]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] tracking-[0.2em] uppercase text-white/60 mb-5">{t.footer.contactUs}</h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-3 text-neutral-500 hover:text-white/80 transition-colors duration-300 text-[13px]"
                  >
                    <Phone size={14} className="text-accent-gold/50" />
                    {contactInfo.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center gap-3 text-neutral-500 hover:text-white/80 transition-colors duration-300 text-[13px]"
                  >
                    <Mail size={14} className="text-accent-gold/50" />
                    {contactInfo.email}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-neutral-500 text-[13px]">
                  <MapPin size={14} className="text-accent-gold/50" />
                  {t.contact.addressValue}
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] tracking-[0.2em] uppercase text-white/60 mb-5 flex items-center gap-2">
                <Clock size={13} className="text-accent-gold/50" />
                {t.contact.workingHours}
              </h4>
              <ul className="space-y-2.5">
                {t.contact.hours.map((h) => (
                  <li key={h.day} className="flex justify-between text-[13px] text-neutral-500">
                    <span>{h.day}</span>
                    <span className="text-white/40">{h.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.04]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-7 text-center text-neutral-600 text-[11px] tracking-[0.1em]">
            © {new Date().getFullYear()} Sis Esthetics. {t.footer.rights}
          </div>
        </div>
      </div>
    </footer>
  );
}
