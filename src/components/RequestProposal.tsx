'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useFormSubmit } from '@/hooks/useFormSubmit';

const serviceTypes = [
  "HOA",
  "Condo",
  "Other"
];

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? '';

export default function RequestProposal() {
  const { status, phone, onPhoneChange, recaptchaRef, handleSubmit } = useFormSubmit('proposal');

  return (
    <section id="proposal" className="py-32 bg-brand-warm-100">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-4 tracking-tight">
            Request a Proposal
          </h2>
          <p className="text-lg text-brand-gray-500 max-w-xl mx-auto">
            Tell us about your property and we&apos;ll put together a customized management proposal.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          noValidate
          className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-brand-gray-100"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-brand-black mb-2">
                Name <span className="text-brand-orange">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                autoComplete="name"
                className="w-full px-4 py-3 rounded-xl border border-brand-gray-200 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="community" className="block text-sm font-medium text-brand-black mb-2">
                Community Name <span className="text-brand-gray-500 font-normal">(optional)</span>
              </label>
              <input
                type="text"
                id="community"
                name="community"
                autoComplete="organization"
                className="w-full px-4 py-3 rounded-xl border border-brand-gray-200 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all"
                placeholder="Your community or property name"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-brand-black mb-2">
                Email <span className="text-brand-orange">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                autoComplete="email"
                autoCapitalize="none"
                autoCorrect="off"
                spellCheck={false}
                className="w-full px-4 py-3 rounded-xl border border-brand-gray-200 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-brand-black mb-2">
                Phone <span className="text-brand-orange">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                inputMode="tel"
                autoComplete="tel"
                value={phone}
                onChange={onPhoneChange}
                className="w-full px-4 py-3 rounded-xl border border-brand-gray-200 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all"
                placeholder="(123) 456-7890"
              />
            </div>
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-brand-black mb-2">
                Service Type <span className="text-brand-orange">*</span>
              </label>
              <select
                id="service"
                name="service"
                required
                className="w-full px-4 py-3 rounded-xl border border-brand-gray-200 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all bg-white"
              >
                <option value="">Select type</option>
                {serviceTypes.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {status === 'success' ? (
            <div className="flex items-center justify-center gap-3 bg-brand-warm-100 text-brand-black rounded-2xl px-6 py-5 text-center">
              <CheckCircle2 className="w-6 h-6 text-brand-orange flex-shrink-0" />
              <p className="font-medium">
                Thanks! Your request has been sent. We&apos;ll be in touch shortly.
              </p>
            </div>
          ) : (
            <>
              <div className="flex justify-center mb-6">
                <ReCAPTCHA ref={recaptchaRef} sitekey={RECAPTCHA_SITE_KEY} />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full flex items-center justify-center gap-2 bg-brand-black text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-brand-orange hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-brand-black/20 hover:shadow-brand-orange/25 disabled:opacity-60 disabled:hover:scale-100 disabled:cursor-not-allowed group"
              >
                {status === 'submitting' ? (
                  <>
                    Sending
                    <Loader2 className="w-5 h-5 animate-spin" />
                  </>
                ) : (
                  <>
                    Submit Request
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                  </>
                )}
              </button>
            </>
          )}
        </motion.form>
      </div>
    </section>
  );
}
