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
              height={56}
              width={140}
              className="h-14 w-auto object-contain"
              priority
            />
          </Link>

          {/* Center Menu */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {['Properties', 'Services', 'About', 'Contact'].map((item) => (
              <Link 
                key={item} 
                href="#" 
                className="text-sm font-medium text-brand-black/70 hover:text-brand-black transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Right CTA */}
          <div className="flex-shrink-0">
            <Link 
              href="#" 
              className="bg-brand-black text-white px-6 py-2.5 rounded-full text-sm font-medium hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg shadow-brand-black/20"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
