'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import { useTranslation } from '@/lib/LanguageContext';
import { slideInLeft, slideInRight } from '@/lib/animations';
import { contactInfo } from '@/lib/data';
import SectionHeading from '@/components/ui/SectionHeading';

export default function ContactPage() {
  const { t, lang } = useTranslation();
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to send');
      }
      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  return (
    <main className="pt-20 lg:pt-24">
      <div className="py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeading title={t.contact.sectionTitle} subtitle={t.contact.sectionSubtitle} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {[
                { icon: Phone, label: t.contact.phone, value: contactInfo.phone, href: `tel:${contactInfo.phone.replace(/\s/g, '')}` },
                { icon: Mail, label: t.contact.email, value: contactInfo.email, href: `mailto:${contactInfo.email}` },
                { icon: MapPin, label: t.contact.address, value: t.contact.addressValue },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-accent/[0.06] flex items-center justify-center shrink-0 border border-accent/10">
                    <item.icon className="w-4 h-4 text-accent" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-[11px] tracking-[0.15em] uppercase text-neutral-400 mb-1.5">{item.label}</h3>
                    {item.href ? (
                      <a href={item.href} className="text-foreground text-sm hover:text-accent transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-accent/[0.06] flex items-center justify-center shrink-0 border border-accent/10">
                  <Clock className="w-4 h-4 text-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-[11px] tracking-[0.15em] uppercase text-neutral-400 mb-2">{t.contact.workingHours}</h3>
                  <ul className="space-y-1.5">
                    {t.contact.hours.map((h) => (
                      <li key={h.day} className="text-sm flex gap-6">
                        <span className="text-foreground min-w-[140px]">{h.day}</span>
                        <span className="text-neutral-400">{h.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border border-neutral-200 overflow-hidden mt-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2932.5!2d23.32!3d42.69!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDQxJzI0LjAiTiAyM8KwMTknMTIuMCJF!5e0!3m2!1sen!2sbg!4v1"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sis Esthetics Location"
                />
              </div>
            </motion.div>

            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {sent ? (
                <div className="border border-neutral-200 p-8 md:p-12 text-center">
                  <CheckCircle className="w-12 h-12 text-accent-gold mx-auto mb-4" strokeWidth={1} />
                  <h3 className="font-serif text-xl mb-2">
                    {lang === 'bg' ? 'Съобщението е изпратено!' : 'Message Sent!'}
                  </h3>
                  <p className="text-neutral-400 text-[13px]">
                    {lang === 'bg' ? 'Ще се свържем с вас скоро.' : 'We will get back to you soon.'}
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="border border-neutral-200 p-8 md:p-12 space-y-6"
                >
                  {error && (
                    <div className="p-3 border border-red-200 bg-red-50 text-red-700 text-[13px]">
                      {error}
                    </div>
                  )}
                  <div>
                    <label htmlFor="name" className="block text-[11px] tracking-[0.15em] uppercase text-neutral-400 mb-2.5">
                      {t.contact.formName}
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={update('name')}
                      required
                      className="w-full px-4 py-3.5 bg-neutral-50 border border-neutral-200 text-foreground text-[13px] focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-[11px] tracking-[0.15em] uppercase text-neutral-400 mb-2.5">
                        {t.contact.formPhone}
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={update('phone')}
                        className="w-full px-4 py-3.5 bg-neutral-50 border border-neutral-200 text-foreground text-[13px] focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-[11px] tracking-[0.15em] uppercase text-neutral-400 mb-2.5">
                        {t.contact.formEmail}
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={update('email')}
                        required
                        className="w-full px-4 py-3.5 bg-neutral-50 border border-neutral-200 text-foreground text-[13px] focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-[11px] tracking-[0.15em] uppercase text-neutral-400 mb-2.5">
                      {t.contact.formMessage}
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={update('message')}
                      required
                      className="w-full px-4 py-3.5 bg-neutral-50 border border-neutral-200 text-foreground text-[13px] focus:outline-none focus:border-accent transition-colors resize-none"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full" disabled={loading}>
                    {loading
                      ? (lang === 'bg' ? 'Изпращане...' : 'Sending...')
                      : t.contact.formSubmit}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
