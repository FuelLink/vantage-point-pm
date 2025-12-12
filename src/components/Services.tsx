'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Building2, BarChart3, Users2, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const services = [
  {
    category: "HOA Management",
    title: "Community Association Management",
    description: "Comprehensive HOA management that protects property values and builds thriving communities. We provide board guidance, CC&R enforcement, meeting coordination, and act as the primary liaison between your association and homeowners.",
    tags: ["Board Support", "CC&R Enforcement", "Annual Meetings"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600&auto=format&fit=crop",
    link: "#"
  },
  {
    category: "Multi-Family",
    title: "Apartment & Complex Management",
    description: "Full-service management for apartment communities, condominiums, and townhome complexes. From tenant acquisition and retention to grounds preservation, we create a sense of community that cuts vacancy rates and maximizes rental income.",
    tags: ["Tenant Screening", "Community Building", "Maintenance"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
    link: "#"
  },
  {
    category: "Financial Services",
    title: "Transparent Financial Oversight",
    description: "Professional bookkeeping, monthly financial statements, budget preparation, and dues collection. Our 24/7 owner portal provides real-time access to financial reports, and we coordinate tax returns and lien preparation when necessary.",
    tags: ["Online Portal", "Budget Planning", "Collections"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1600&auto=format&fit=crop",
    link: "#"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="mb-20">
          <h4 className="text-sm font-bold tracking-widest text-brand-gray-500 uppercase mb-3">
            Our Expertise
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-black tracking-tight">
            Management Solutions
          </h2>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="group relative bg-white rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.1)] transition-shadow duration-500 border border-brand-gray-100 overflow-hidden"
            >
              <div className={cn(
                "flex flex-col lg:flex-row gap-12 lg:gap-20 items-center",
                index % 2 === 1 && "lg:flex-row-reverse"
              )}>
                
                {/* Content Side */}
                <div className="flex-1 space-y-8">
                  <div className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-semibold tracking-wide">
                    {service.category}
                  </div>
                  
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-brand-black mb-6 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-lg text-brand-gray-500 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {service.tags.map((tag, i) => (
                      <span key={i} className="px-4 py-2 rounded-lg bg-brand-gray-50 text-sm font-medium text-brand-gray-500 border border-brand-gray-100">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4">
                    <a href={service.link} className="inline-flex items-center gap-2 text-brand-black font-semibold text-lg hover:text-brand-orange transition-colors group/link">
                      View details
                      <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>

                {/* Image Side */}
                <div className="flex-1 w-full">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                    {/* Placeholder for Next.js Image - using img for now to avoid config setup for external domains in this snippet, 
                        but in real app would config next.config.js */}
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
