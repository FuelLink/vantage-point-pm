import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-brand-orange/20 selection:text-brand-orange-dark">
      <Navbar />
      <Hero />
      <Services />
      
      {/* Minimalist CTA Section */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-8 tracking-tight">
            Ready to elevate your community?
          </h2>
          <p className="text-xl text-brand-gray-500 mb-12 max-w-2xl mx-auto">
            Partner with Vantage PM and experience the peace of mind that comes with professional management. We protect property values while building communities Idaho families love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-brand-black text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-brand-orange hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl shadow-brand-black/20 hover:shadow-brand-orange/30">
              Request a Proposal
            </button>
            <button className="px-8 py-4 rounded-full font-medium text-lg text-brand-black border border-brand-gray-200 hover:bg-brand-gray-50 hover:scale-105 active:scale-95 transition-all duration-200">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
