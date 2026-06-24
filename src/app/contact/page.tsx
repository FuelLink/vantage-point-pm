'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Phone, Mail, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const serviceTypes = [
  "HOA",
  "Condo",
  "Other"
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-brand-orange/20 selection:text-brand-orange-dark">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-brand-warm-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-brand-black leading-[1.1] mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-brand-gray-500 leading-relaxed">
              Ready to elevate your community? We&apos;d love to hear from you. Reach out to discuss your property management needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-3xl font-bold text-brand-black mb-8">
                Vantage Point Property Management
              </h2>
              <p className="text-lg text-brand-gray-500 mb-10 leading-relaxed">
                Full-service HOA and Condominium property management company serving Washington&apos;s Puget Sound region. We handle the details so you can focus on what matters most.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-warm-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-black mb-1">Office Location</h3>
                    <p className="text-brand-gray-500">
                      Arlington, Washington<br />
                      Puget Sound
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-warm-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-black mb-1">Phone</h3>
                    <p className="text-brand-gray-500">
                      <a href="tel:+18883328986" className="hover:text-brand-orange transition-colors">
                        (888) 332-8986
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-warm-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-black mb-1">Email</h3>
                    <p className="text-brand-gray-500">
                      <a href="mailto:info@vantageppm.com" className="hover:text-brand-orange transition-colors">
                        info@vantageppm.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-warm-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-black mb-1">Business Hours</h3>
                    <p className="text-brand-gray-500">
                      Monday - Friday: 9am - 5pm<br />
                      24/7 Emergency Line Available
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-brand-gray-100">
                <h2 className="text-2xl font-bold text-brand-black mb-2">
                  Send us a Message
                </h2>
                <p className="text-brand-gray-500 mb-8">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-brand-black mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-brand-gray-200 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all bg-white"
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
                        className="w-full px-4 py-3 rounded-xl border border-brand-gray-200 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all bg-white"
                        placeholder="Your community or property"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-brand-black mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-brand-gray-200 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all bg-white"
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
                        className="w-full px-4 py-3 rounded-xl border border-brand-gray-200 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all bg-white"
                        placeholder="(123) 456-7890"
                      />
                    </div>
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
                      <option value="">Select a service type</option>
                      {serviceTypes.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-brand-black mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-brand-gray-200 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all bg-white resize-none"
                      placeholder="Tell us about your property management needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-brand-black text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-brand-orange hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-brand-black/20 hover:shadow-brand-orange/25 group"
                  >
                    Send Message
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
