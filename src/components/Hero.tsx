import React from 'react';
import { motion } from 'motion/react';
import { Phone, MessageCircle, HardHat } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
          alt="Construction Site"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/95 via-primary/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="h-1 w-12 bg-secondary"></div>
            <span className="text-secondary font-display font-bold uppercase tracking-widest text-sm flex items-center gap-2 drop-shadow-md">
              <HardHat size={16} />
              Excellence in Construction
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-display font-extrabold text-white leading-[1.1] mb-6 drop-shadow-lg"
          >
            Building Strong <br />
            <span className="text-secondary">Foundations</span> for a <br />
            Better Tomorrow
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-100 font-sans mb-10 max-w-2xl leading-relaxed drop-shadow-md"
          >
            Shree Kalika Construction – Trusted Experts in Residential & Commercial Projects. 
            We turn your architectural visions into enduring realities with precision and integrity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="tel:+918482867010"
              className="group bg-secondary hover:bg-secondary/90 text-white font-bold py-4 px-8 rounded-sm flex items-center justify-center gap-2 transition-all shadow-md"
            >
              <Phone size={20} />
              Call Us Now
            </a>
            <a
              href="https://wa.me/918482867010"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-4 px-8 rounded-sm flex items-center justify-center gap-2 transition-all shadow-md"
            >
              <MessageCircle size={20} />
              WhatsApp Us
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 hidden lg:block p-12">
        <div className="flex gap-12 text-white/50 font-display font-bold text-8xl select-none opacity-10">
          <span>SKC</span>
        </div>
      </div>
    </section>
  );
};
