'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  return (
    <motion.nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white/80 backdrop-blur-md py-4" : "bg-transparent py-8"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo - Left */}
          <Link href="/" className="flex-shrink-0 z-50">
            <Image
              src="/vantage_point_logo.png"
              alt="Vantage Point Property Management"
              height={72}
              width={180}
              className="h-18 w-auto object-contain"
              priority
            />
          </Link>

          {/* Center Menu */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            <Link
              href="#"
              className="text-lg font-medium text-brand-black/70 hover:text-brand-black transition-colors"
            >
              Properties
            </Link>
            <Link
              href="#services"
              className="text-lg font-medium text-brand-black/70 hover:text-brand-black transition-colors"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-lg font-medium text-brand-black/70 hover:text-brand-black transition-colors"
            >
              Contact
            </Link>
            <Link
              href="#"
              className="text-lg font-medium text-brand-black/70 hover:text-brand-black transition-colors"
            >
              About
            </Link>
          </div>

          {/* Right CTA */}
          <div className="flex-shrink-0">
            <Link
              href="#"
              className="bg-brand-black text-white px-7 py-3 rounded-full text-base font-medium hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg shadow-brand-black/20"
            >
              Resident Log In
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
