'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const serviceTypes = [
  "HOA",
  "Residential",
  "Other"
];

export default function RequestProposal() {
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
          className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-brand-gray-100"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-brand-black mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-xl border border-brand-gray-200 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="community" className="block text-sm font-medium text-brand-black mb-2">
                Community Name
              </label>
              <input
                type="text"
                id="community"
                name="community"
                className="w-full px-4 py-3 rounded-xl border border-brand-gray-200 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all"
                placeholder="Your community or property name"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-brand-black mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-xl border border-brand-gray-200 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-brand-black mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-3 rounded-xl border border-brand-gray-200 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all"
                placeholder="(208) 555-0123"
              />
            </div>
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-brand-black mb-2">
                Service Type
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

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-brand-black text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-brand-orange hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-brand-black/20 hover:shadow-brand-orange/25 group"
          >
            Submit Request
            <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </motion.form>
      </div>
    </section>
  );
}
