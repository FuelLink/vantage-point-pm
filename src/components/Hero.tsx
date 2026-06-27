'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, PlayCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-28 pb-12 overflow-hidden bg-brand-warm-50">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full z-10">
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl">

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-brand-black leading-[1.1] mb-6"
            >
              Proactive and <br />
              <span className="text-brand-gray-500">Transparent Management</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-brand-gray-500 max-w-xl leading-relaxed mb-8"
            >
              We combine proven expertise with innovative technology through honest, proactive management you can count on. Every decision we make is rooted in integrity and professionalism, with a commitment to keeping you informed every step of the way.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-4 items-center mb-10"
            >
              <a href="#proposal" className="flex items-center gap-2 bg-brand-black text-white px-8 py-3.5 rounded-full font-medium text-sm hover:bg-brand-orange hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-brand-black/20 hover:shadow-brand-orange/25 group">
                Request a Proposal
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a href="#services" className="flex items-center gap-2 px-8 py-3.5 rounded-full font-medium text-sm text-brand-black border border-brand-gray-200 hover:bg-brand-gray-50 hover:scale-105 active:scale-95 transition-all duration-200">
                <PlayCircle className="w-4 h-4" />
                Our Services
              </a>
            </motion.div>

          </div>

          {/* Right Image Card - "Boxed" Style like reference */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative bg-brand-gray-100 rounded-[2rem] p-4 lg:p-6 aspect-square lg:aspect-[1.1/1] flex items-center justify-center overflow-hidden shadow-inner"
          >
             {/* Background Image */}
             <div className="absolute inset-0">
                <Image
                    src="/images/hero-interior.jpg"
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover mix-blend-overlay opacity-40"
                    aria-hidden="true"
                />
             </div>

             {/* Main Focal Image (Floating Circle/Shape idea from salad bowl reference, adapted to building/interior) */}
             <div className="relative w-[85%] h-[85%] rounded-[2rem] overflow-hidden shadow-2xl shadow-brand-black/20 transform hover:scale-[1.02] transition-transform duration-700">
                <Image
                    src="/images/hero-living-space.jpg"
                    alt="Modern living space managed by Vantage Point"
                    fill
                    priority
                    sizes="(max-width: 1024px) 85vw, 42vw"
                    className="object-cover"
                />
             </div>

             {/* Floating Bottom Bar - Stats */}
             <div className="absolute bottom-4 left-4 right-4 md:bottom-10 md:left-10 md:right-10">
                <div className="bg-white p-4 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center justify-between gap-3">
                    <div className="min-w-0">
                        <h3 className="font-bold text-brand-black text-sm truncate">Riverside Commons HOA</h3>
                        <p className="text-xs text-brand-gray-500 truncate">124 Units Managed</p>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                        <span className="font-bold text-brand-black text-lg whitespace-nowrap">98%<span className="text-xs text-brand-gray-400 font-normal"> satisfaction</span></span>
                        <button className="w-8 h-8 bg-brand-black rounded-full flex items-center justify-center text-white hover:bg-brand-orange transition-colors flex-shrink-0">
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
             </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
