import React from 'react';
import { Logo } from './Logo';
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Logo className="h-24" light />
            <p className="text-gray-400 leading-relaxed">
              Building strong foundations for a better tomorrow. Shree Kalika Construction is your trusted partner for premium residential and commercial projects.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-all">
                <Twitter size={20} />
              </a>
              <a href="https://www.instagram.com/shree_kalika_construction/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-display font-bold mb-8 border-b border-white/10 pb-4">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-secondary transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-secondary transition-colors">Our Projects</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-secondary transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-secondary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-display font-bold mb-8 border-b border-white/10 pb-4">Our Services</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-gray-400 hover:text-secondary transition-colors">Residential Construction</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-secondary transition-colors">Commercial Construction</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-secondary transition-colors">Renovation & Remodeling</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-secondary transition-colors">Interior & Exterior Work</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-secondary transition-colors">Civil Contracting</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-display font-bold mb-8 border-b border-white/10 pb-4">Newsletter</h4>
            <p className="text-gray-400 mb-6">Subscribe to our newsletter for the latest updates and project news.</p>
            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Your Email Address"
                className="bg-white/5 border border-white/10 px-4 py-3 rounded-sm focus:outline-none focus:border-secondary transition-colors"
              />
              <button className="bg-secondary text-white font-bold py-3 rounded-sm hover:bg-accent transition-all">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-500 text-sm">
            <p>© 2026 Shree Kalika Construction. All rights reserved.</p>
            <p className="mt-1">Founded & Led by <span className="text-secondary font-bold">Shubham Pawar</span></p>
            <p className="mt-1">Website design by <a href="tel:+919011140878" className="text-secondary hover:underline transition-all">Mayur Pawar</a></p>
          </div>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-gray-400 hover:text-secondary transition-colors text-sm font-bold uppercase tracking-widest"
          >
            Back to Top
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-secondary transition-colors">
              <ArrowUp size={20} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};
