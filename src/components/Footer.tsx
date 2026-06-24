import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
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
            <div className="flex gap-3">
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-orange hover:text-white transition-colors flex items-center justify-center text-brand-gray-500"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-orange hover:text-white transition-colors flex items-center justify-center text-brand-gray-500"
                aria-label="X (Twitter)"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-orange hover:text-white transition-colors flex items-center justify-center text-brand-gray-500"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h4 className="font-semibold mb-6 text-white">Services</h4>
            <ul className="space-y-4 text-sm text-brand-gray-500">
              <li><Link href="/#services" className="hover:text-brand-orange transition-colors">Residential HOA Management</Link></li>
              <li><Link href="/#services" className="hover:text-brand-orange transition-colors">Condominium Management</Link></li>
              <li><Link href="/#services" className="hover:text-brand-orange transition-colors">Financial Services</Link></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h4 className="font-semibold mb-6 text-white">Company</h4>
            <ul className="space-y-4 text-sm text-brand-gray-500">
              <li><Link href="#" className="hover:text-brand-orange transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-brand-orange transition-colors">Board Portal</Link></li>
              <li><Link href="#" className="hover:text-brand-orange transition-colors">Homeowner Portal</Link></li>
              <li><Link href="#" className="hover:text-brand-orange transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-3">
            <h4 className="font-semibold mb-6 text-white">Newsletter</h4>
            <p className="text-sm text-brand-gray-500 mb-4">
              Subscribe for community management insights and updates.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-brand-orange w-full"
              />
              <button className="bg-brand-orange text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-brand-orange-dark transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-brand-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Vantage Point Property Management.
          </p>
          <div className="flex gap-8 text-sm text-brand-gray-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
