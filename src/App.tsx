import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Leadership } from './components/Leadership';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Portfolio } from './components/Portfolio';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-bg-light selection:bg-secondary selection:text-primary">
      <Header />
      <main>
        <Hero />
        <About />
        <Leadership />
        <Services />
        <Process />
        <Portfolio />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
