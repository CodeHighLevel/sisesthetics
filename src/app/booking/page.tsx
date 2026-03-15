'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, CheckCircle } from 'lucide-react';
import { useTranslation } from '@/lib/LanguageContext';
import { fadeInUp } from '@/lib/animations';
import { timeSlots } from '@/lib/data';
import SectionHeading from '@/components/ui/SectionHeading';

export default function BookingPage() {
  const { t, lang } = useTranslation();
  const [step, setStep] = useState(1);
  const [service, setService] = useState('');
  const [stylist, setStylist] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const steps = [
    { num: 1, label: t.booking.selectService },
    { num: 2, label: t.booking.selectStylist },
    { num: 3, label: t.booking.selectDate },
    { num: 4, label: t.booking.yourName },
  ];

  const inputClass =
    'w-full px-4 py-3.5 bg-neutral-50 border border-neutral-200 text-foreground text-[13px] focus:outline-none focus:border-accent transition-colors';

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ service, stylist, date, time, name, phone }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to book');
      }
      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    const selectedService = t.services.items.find((s) => s.id === service);
    const selectedStylist = t.team.members.find((m) => m.id === stylist);

    return (
      <main className="pt-20 lg:pt-24">
        <div className="py-24 md:py-36">
          <div className="max-w-lg mx-auto px-6 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            >
              <CheckCircle className="w-16 h-16 text-accent-gold mx-auto mb-6" strokeWidth={1} />
            </motion.div>
            <motion.div variants={fadeInUp} initial="hidden" animate="visible">
              <h2 className="font-serif text-2xl md:text-3xl mb-4">
                {lang === 'bg' ? 'Заявката е изпратена!' : 'Booking Requested!'}
              </h2>
              <p className="text-neutral-400 text-[13px] leading-relaxed mb-8">
                {lang === 'bg'
                  ? 'Ще се свържем с вас скоро за потвърждение.'
                  : 'We will contact you shortly to confirm your appointment.'}
              </p>
              <div className="border border-neutral-200 p-6 text-left space-y-3 mb-8">
                <div className="flex justify-between text-[13px]">
                  <span className="text-neutral-400">{t.booking.selectService}</span>
                  <span>{selectedService?.name}</span>
                </div>
                <div className="flex justify-between text-[13px]">
                  <span className="text-neutral-400">{t.booking.selectStylist}</span>
                  <span>{selectedStylist?.name}</span>
                </div>
                <div className="flex justify-between text-[13px]">
                  <span className="text-neutral-400">{t.booking.selectDate}</span>
                  <span>{date}</span>
                </div>
                <div className="flex justify-between text-[13px]">
                  <span className="text-neutral-400">{t.booking.selectTime}</span>
                  <span>{time}</span>
                </div>
              </div>
              <Link href="/" className="btn-outline-dark">
                {lang === 'bg' ? 'Начална страница' : 'Back to Home'}
              </Link>
            </motion.div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-20 lg:pt-24">
      <div className="py-24 md:py-36">
        <div className="max-w-2xl mx-auto px-6 sm:px-8">
          <SectionHeading title={t.booking.pageTitle} subtitle={t.booking.pageSubtitle} />

          <div className="flex items-center justify-between mb-14">
            {steps.map((s, i) => (
              <div key={s.num} className="flex items-center flex-1">
                <button
                  onClick={() => setStep(s.num)}
                  className={`w-10 h-10 flex items-center justify-center text-[11px] font-medium shrink-0 transition-all duration-500 ${
                    step > s.num
                      ? 'bg-accent text-white'
                      : step === s.num
                      ? 'bg-accent-gold text-white'
                      : 'bg-neutral-100 text-neutral-400 border border-neutral-200'
                  }`}
                >
                  {step > s.num ? <Check size={14} /> : s.num}
                </button>
                {i < steps.length - 1 && (
                  <div
                    className={`flex-1 h-px mx-3 transition-colors duration-500 ${
                      step > s.num ? 'bg-accent' : 'bg-neutral-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {error && (
            <div className="mb-6 p-4 border border-red-200 bg-red-50 text-red-700 text-[13px]">
              {error}
            </div>
          )}

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            key={step}
            className="border border-neutral-200 p-8 md:p-12 space-y-6"
          >
            <h3 className="text-[11px] tracking-[0.2em] uppercase text-neutral-400 mb-6">
              {t.booking.step} {step} — {steps[step - 1].label}
            </h3>

            {step === 1 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {t.services.items.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => { setService(s.id); setStep(2); }}
                    className={`text-left p-5 border transition-all duration-300 group hover:border-accent/40 ${
                      service === s.id
                        ? 'border-accent bg-accent/[0.03]'
                        : 'border-neutral-200'
                    }`}
                  >
                    <span className="text-sm font-light block tracking-wide">{s.name}</span>
                    <span className="text-[11px] text-neutral-400 mt-1.5 block">
                      {s.price} <span className="text-neutral-300">|</span> {s.duration}
                    </span>
                  </button>
                ))}
              </div>
            )}

            {step === 2 && (
              <div className="space-y-3">
                {t.team.members.map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => { setStylist(m.id); setStep(3); }}
                    className={`w-full text-left p-5 border flex items-center gap-5 transition-all duration-300 hover:border-accent/40 ${
                      stylist === m.id
                        ? 'border-accent bg-accent/[0.03]'
                        : 'border-neutral-200'
                    }`}
                  >
                    <div className="w-14 h-14 rounded-full bg-accent/[0.06] flex items-center justify-center shrink-0 border border-accent/10">
                      <span className="font-serif text-lg text-accent/70">{m.initials}</span>
                    </div>
                    <div>
                      <span className="text-sm font-light block tracking-wide">{m.name}</span>
                      <span className="text-[11px] text-neutral-400 mt-0.5 block">{m.role}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {step === 3 && (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="date" className="block text-[11px] tracking-[0.15em] uppercase text-neutral-400 mb-2.5">
                      {t.booking.selectDate}
                    </label>
                    <input
                      id="date"
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-[11px] tracking-[0.15em] uppercase text-neutral-400 mb-2.5">
                      {t.booking.selectTime}
                    </label>
                    <select
                      id="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className={inputClass}
                    >
                      <option value="">{t.booking.selectTime}</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setStep(4)}
                  className="btn-primary w-full mt-4"
                  disabled={!date || !time}
                >
                  {t.booking.step} 4 →
                </button>
              </>
            )}

            {step === 4 && (
              <>
                <div>
                  <label htmlFor="name" className="block text-[11px] tracking-[0.15em] uppercase text-neutral-400 mb-2.5">
                    {t.booking.yourName}
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-[11px] tracking-[0.15em] uppercase text-neutral-400 mb-2.5">
                    {t.booking.yourPhone}
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+359 ..."
                    className={inputClass}
                  />
                </div>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="btn-gold w-full mt-4"
                  disabled={loading || !name || !phone}
                >
                  {loading
                    ? (lang === 'bg' ? 'Изпращане...' : 'Submitting...')
                    : t.booking.submit}
                </button>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
