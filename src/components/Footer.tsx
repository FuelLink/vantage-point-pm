import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Facebook, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-5">
            <Link href="/" className="inline-block mb-8">
              <Image
                src="/vantage_point_logo_dark.png"
                alt="Vantage Point Property Management"
                height={80}
                width={200}
                className="h-20 w-auto object-contain"
              />
            </Link>
            <p className="text-brand-gray-500 text-sm leading-relaxed max-w-sm mb-8">
              Full-service HOA and multi-family property management serving Washington&apos;s Puget Sound. We relieve boards of administrative burdens while building beautiful communities through honest, proactive management you can count on.
            </p>
            {/* Social profiles use the vantageppm handle as a placeholder — update URLs once the accounts are live */}
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/vantageppm"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-orange hover:text-white transition-colors flex items-center justify-center text-brand-gray-500"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/vantageppm"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-orange hover:text-white transition-colors flex items-center justify-center text-brand-gray-500"
                aria-label="X (Twitter)"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/vantageppm"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-orange hover:text-white transition-colors flex items-center justify-center text-brand-gray-500"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div className="col-span-1 md:col-span-3">
            <h4 className="font-semibold mb-6 text-white">Explore</h4>
            <ul className="space-y-4 text-sm text-brand-gray-500">
              <li><Link href="/#services" className="hover:text-brand-orange transition-colors">Services</Link></li>
              <li><Link href="/#proposal" className="hover:text-brand-orange transition-colors">Request a Proposal</Link></li>
              <li><Link href="/contact" className="hover:text-brand-orange transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div className="col-span-1 md:col-span-4">
            <h4 className="font-semibold mb-6 text-white">Get in Touch</h4>
            <ul className="space-y-4 text-sm text-brand-gray-500">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                <span>Arlington, Washington<br />Puget Sound</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-orange flex-shrink-0" />
                <a href="tel:+18883328986" className="hover:text-brand-orange transition-colors">(888) 332-8986</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-orange flex-shrink-0" />
                <a href="mailto:info@vantageppm.com" className="hover:text-brand-orange transition-colors">info@vantageppm.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex justify-center">
          <p className="text-brand-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Vantage Point Property Management. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
