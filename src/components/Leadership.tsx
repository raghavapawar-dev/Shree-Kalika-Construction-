import React from 'react';
import { motion } from 'motion/react';
import { Quote, Linkedin, Mail } from 'lucide-react';

export const Leadership: React.FC = () => {
  return (
    <section className="py-24 bg-bg-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <span className="text-secondary font-display font-bold uppercase tracking-widest text-sm mb-4 block">
              Our Leadership
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-primary mb-8 leading-tight">
              A Message from <br />
              <span className="text-secondary">Shubham Pawar</span>
            </h2>
            
            <div className="relative mb-8">
              <div className="absolute -top-4 -left-4 text-secondary opacity-20">
                <Quote size={48} />
              </div>
              <p className="text-xl text-text-muted italic leading-relaxed relative z-10 pl-6 border-l-4 border-secondary">
                "At Shree Kalika Construction, our goal is not just to build structures, but to create landmarks that define quality and trust. We believe in transparency, innovation, and a commitment to excellence that goes beyond the blueprint. Every project we undertake is a promise of integrity to our clients."
              </p>
            </div>

            <div className="space-y-4 mb-10">
              <p className="text-text-muted leading-relaxed">
                Under the visionary leadership of Shubham Pawar, Shree Kalika Construction has grown from a local contractor to a respected name in the construction industry. His hands-on approach and dedication to safety and quality have been the driving force behind our success.
              </p>
            </div>

            <div className="flex items-center gap-6">
              <div>
                <h4 className="font-display font-bold text-primary text-lg">Shubham Pawar</h4>
                <p className="text-secondary font-bold uppercase tracking-wider text-xs">Founder & CEO</p>
              </div>
              <div className="h-10 w-[1px] bg-border"></div>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-full bg-bg-section flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition-all">
                  <Linkedin size={18} />
                </a>
                <a href="mailto:shrikalika.official@gmail.com" className="w-10 h-10 rounded-full bg-bg-section flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition-all">
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl aspect-[4/5]">
              <img
                src="https://drive.google.com/thumbnail?id=1_OFG0XEUPsuHhO4vtwBAl06c1u9Gpvqm&sz=w1000"
                alt="Shubham Pawar - Founder"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <div className="bg-secondary text-white font-display font-black px-6 py-2 text-sm uppercase tracking-widest">
                  Visionary Leader
                </div>
              </div>
            </div>
            {/* Decorative background elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
