import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import RequestProposal from '@/components/RequestProposal';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-brand-orange/20 selection:text-brand-orange-dark">
      <Navbar />
      <Hero />
      <Services />
      <RequestProposal />

      <Footer />
    </main>
  );
}
