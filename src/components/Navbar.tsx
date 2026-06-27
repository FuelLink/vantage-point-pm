'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/#services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    if (isOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [isOpen]);

  return (
    <motion.nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled || isOpen ? "bg-white/80 backdrop-blur-md py-4" : "bg-transparent py-8"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo - Left */}
          <Link href="/" className="flex-shrink-0 z-50" onClick={() => setIsOpen(false)}>
            <Image
              src="/vantage_point_logo.png"
              alt="Vantage Point Property Management"
              height={72}
              width={180}
              className="h-18 w-auto object-contain"
              priority
            />
          </Link>

          {/* Menu - Right (desktop) */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/#services"
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
            {/* About link hidden for now — dead link, may be restored once an About page exists
            <Link
              href="#"
              className="text-lg font-medium text-brand-black/70 hover:text-brand-black transition-colors"
            >
              About
            </Link>
            */}

            {/* Resident Log In hidden for now — no portal yet; repurposed as the Request a Proposal CTA below
            <Link
              href="#"
              className="bg-brand-black text-white px-7 py-3 rounded-full text-base font-medium hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg shadow-brand-black/20"
            >
              Resident Log In
            </Link>
            */}
            <Link
              href="/#proposal"
              className="bg-brand-black text-white px-7 py-3 rounded-full text-base font-medium hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg shadow-brand-black/20"
            >
              Request a Proposal
            </Link>
          </div>

          {/* Hamburger toggle (mobile) */}
          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="md:hidden z-50 -mr-2 flex h-11 w-11 items-center justify-center rounded-full text-brand-black transition-colors hover:bg-brand-black/5 active:bg-brand-black/10"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-t border-brand-gray-100 shadow-lg"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="py-3 text-lg font-medium text-brand-black/80 hover:text-brand-black transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#proposal"
                onClick={() => setIsOpen(false)}
                className="mt-2 w-full bg-brand-black text-white px-7 py-4 rounded-full text-base font-medium text-center hover:bg-brand-orange active:scale-[0.98] transition-all duration-200 shadow-lg shadow-brand-black/20"
              >
                Request a Proposal
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
