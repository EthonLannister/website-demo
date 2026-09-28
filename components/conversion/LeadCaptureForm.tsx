'use client';

import React, { useState, useEffect } from 'react';
import { useTourMode } from '@/components/providers/TourModeProvider';
import { useLanguage } from '@/components/providers/LanguageProvider';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export function LeadCaptureForm() {
  const { mode } = useTourMode();
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    phone: '',
    company: '',
    jobTitle: '',
    country: '',
    programInterest: mode as string,
    companySize: '1–5 Executives',
    message: '',
    contactPreference: 'email' as 'email' | 'phone',
  });

  // Sync with global mode changes
  useEffect(() => {
    setFormData(prev => ({ ...prev, programInterest: mode }));
  }, [mode]);

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Submission failed. Please try again.');
      }

      setStatus('success');
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'An error occurred. Please contact us directly.');
    }
  };

  return (
    <section id="contact" className="bg-taste-paper py-24 md:py-36 px-6 lg:px-12 border-b border-taste-rule">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact & Social Proof */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-taste-coral block">
                {t.leadForm.eyebrow}
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-taste-navy leading-[0.95]">
                {t.leadForm.title}
              </h2>
              <p className="text-taste-ink/80 text-base leading-relaxed pt-2">
                {t.leadForm.desc}
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4 pt-4 border-t border-taste-rule">
              <div className="p-5 rounded-2xl bg-[#ede7dd] border border-taste-rule space-y-2">
                <span className="text-[11px] font-mono text-taste-coral uppercase font-bold block">
                  {t.leadForm.director}
                </span>
                <p className="font-display font-bold text-base text-taste-navy">
                  {t.leadForm.concierge}
                </p>
                <div className="flex flex-col gap-1.5 text-xs sm:text-sm text-taste-ink/80 pt-1">
                  <a href="mailto:ethon210@gmail.com" className="flex items-center gap-2 hover:text-taste-coral transition">
                    <Mail className="w-3.5 h-3.5 text-taste-coral" />
                    <span>ethon210@gmail.com</span>
                  </a>
                  <a href="tel:+8613605291386" className="flex items-center gap-2 hover:text-taste-coral transition">
                    <Phone className="w-3.5 h-3.5 text-taste-coral" />
                    <span>+86 136 0529 1386 (Direct / WhatsApp)</span>
                  </a>
                </div>
              </div>

              {/* Office Locations */}
              <div className="p-5 rounded-2xl bg-[#ede7dd] border border-taste-rule space-y-3">
                <span className="text-[11px] font-mono text-taste-coral uppercase font-bold block">
                  {t.leadForm.offices}
                </span>
                <div className="text-xs sm:text-sm text-taste-ink/80 space-y-2">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-taste-coral shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-taste-navy block">{t.leadForm.shanghaiOffice}</strong>
                      <span>{t.leadForm.shanghaiAddress}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 pt-2 border-t border-taste-rule/60">
                    <MapPin className="w-4 h-4 text-taste-coral shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-taste-navy block">{t.leadForm.intlOffice}</strong>
                      <span>{t.leadForm.intlAddress}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xs text-taste-ink/50 leading-relaxed">
              {t.leadForm.visaNotice}
            </p>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-7 bg-[#f8f5ee] p-8 sm:p-12 rounded-3xl border border-taste-rule shadow-xl">
            {status === 'success' ? (
              <div className="py-16 text-center space-y-4">
                <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto" />
                <h3 className="font-display text-3xl font-bold text-taste-navy">
                  {t.leadForm.successTitle}
                </h3>
                <p className="text-taste-ink/80 max-w-md mx-auto text-sm sm:text-base leading-relaxed">
                  {t.leadForm.successDesc}
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 px-6 py-2.5 rounded-full bg-taste-navy text-taste-paper text-xs font-bold uppercase tracking-wider hover:bg-taste-navy/90 transition"
                >
                  {t.leadForm.successReset}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-display text-2xl font-bold text-taste-navy tracking-tight">
                    {t.leadForm.formTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-taste-ink/70 mt-1">
                    {t.leadForm.formSubtitle}
                  </p>
                </div>

                {status === 'error' && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold text-taste-navy uppercase tracking-wider block">
                      {t.leadForm.fullNameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t.leadForm.fullNamePlaceholder}
                      value={formData.fullName}
                      onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-taste-paper border border-taste-rule text-sm text-taste-navy placeholder:text-taste-ink/40 focus:outline-none focus:border-taste-coral transition"
                    />
                  </div>

                  {/* Work Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold text-taste-navy uppercase tracking-wider block">
                      {t.leadForm.workEmailLabel}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder={t.leadForm.workEmailPlaceholder}
                      value={formData.workEmail}
                      onChange={e => setFormData({ ...formData, workEmail: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-taste-paper border border-taste-rule text-sm text-taste-navy placeholder:text-taste-ink/40 focus:outline-none focus:border-taste-coral transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Organization */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold text-taste-navy uppercase tracking-wider block">
                      {t.leadForm.orgLabel}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t.leadForm.orgPlaceholder}
                      value={formData.company}
                      onChange={e => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-taste-paper border border-taste-rule text-sm text-taste-navy placeholder:text-taste-ink/40 focus:outline-none focus:border-taste-coral transition"
                    />
                  </div>

                  {/* Title */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold text-taste-navy uppercase tracking-wider block">
                      {t.leadForm.titleLabel}
                    </label>
                    <input
                      type="text"
                      placeholder={t.leadForm.titlePlaceholder}
                      value={formData.jobTitle}
                      onChange={e => setFormData({ ...formData, jobTitle: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-taste-paper border border-taste-rule text-sm text-taste-navy placeholder:text-taste-ink/40 focus:outline-none focus:border-taste-coral transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Country */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold text-taste-navy uppercase tracking-wider block">
                      {t.leadForm.countryLabel}
                    </label>
                    <input
                      type="text"
                      placeholder={t.leadForm.countryPlaceholder}
                      value={formData.country}
                      onChange={e => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-taste-paper border border-taste-rule text-sm text-taste-navy placeholder:text-taste-ink/40 focus:outline-none focus:border-taste-coral transition"
                    />
                  </div>

                  {/* Program Format */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold text-taste-navy uppercase tracking-wider block">
                      {t.leadForm.programLabel}
                    </label>
                    <select
                      value={formData.programInterest}
                      onChange={e => setFormData({ ...formData, programInterest: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-taste-paper border border-taste-rule text-sm text-taste-navy focus:outline-none focus:border-taste-coral transition"
                    >
                      {t.leadForm.programOptions.map(opt => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold text-taste-navy uppercase tracking-wider block">
                    {t.leadForm.messageLabel}
                  </label>
                  <textarea
                    rows={4}
                    placeholder={t.leadForm.messagePlaceholder}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-taste-paper border border-taste-rule text-sm text-taste-navy placeholder:text-taste-ink/40 focus:outline-none focus:border-taste-coral transition resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-4 rounded-full bg-taste-coral text-white font-display text-base font-bold tracking-tight shadow-xl hover:bg-taste-coral/90 active:scale-[0.99] transition flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {status === 'submitting' ? (
                    <span>{t.leadForm.submittingBtn}</span>
                  ) : (
                    <>
                      <span>{t.leadForm.submitBtn}</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
