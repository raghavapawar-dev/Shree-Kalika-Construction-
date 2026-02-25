import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Zap, Gem, IndianRupee, HardHat, CheckCircle2, Clock, Target, Users } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: <Zap size={32} />,
      title: 'On-Time Delivery',
      description: 'We value your time. Our efficient project management ensures every milestone is met promptly.',
    },
    {
      icon: <Gem size={32} />,
      title: 'Quality Materials',
      description: 'We never compromise on quality, using only premium materials that ensure longevity and safety.',
    },
    {
      icon: <HardHat size={32} />,
      title: 'Experienced Team',
      description: 'Our skilled professionals bring decades of collective expertise to every construction site.',
    },
    {
      icon: <IndianRupee size={32} />,
      title: 'Transparent Pricing',
      description: 'No hidden costs. We provide detailed, honest estimates that respect your budget.',
    },
    {
      icon: <ShieldCheck size={32} />,
      title: 'Safety Compliance',
      description: 'Safety is our top priority. We strictly adhere to all international safety standards and protocols.',
    },
  ];

  return (
    <section className="py-24 bg-primary text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(var(--color-secondary)_1px,transparent_1px)] [background-size:40px_40px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-secondary font-display font-bold uppercase tracking-widest text-sm mb-4 block">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-8 leading-tight">
              The Preferred Choice for <span className="text-secondary">Quality</span> Construction
            </h2>
            <p className="text-lg text-white/80 mb-12 leading-relaxed">
              At Shree Kalika Construction, we don't just build structures; we build relationships based on trust, quality, and exceptional service. Our commitment to excellence is reflected in every brick we lay.
            </p>
            
            <div className="space-y-8">
              {reasons.slice(0, 3).map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                    {reason.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold mb-2">{reason.title}</h3>
                    <p className="text-white/60">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8">
             <div className="bg-white/5 p-10 rounded-lg border border-white/10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <HardHat size={120} />
                </div>
                <h3 className="text-2xl font-display font-bold mb-8 text-secondary relative z-10">Our Core Commitments</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12 relative z-10">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="text-secondary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <span className="block font-bold text-white mb-1">Unmatched Quality</span>
                      <p className="text-white/50 text-sm leading-relaxed">We adhere to the highest standards of craftsmanship in every brick we lay.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="text-secondary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <span className="block font-bold text-white mb-1">Timely Completion</span>
                      <p className="text-white/50 text-sm leading-relaxed">Our streamlined processes ensure your project is delivered exactly as scheduled.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Target className="text-secondary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <span className="block font-bold text-white mb-1">Precision Engineering</span>
                      <p className="text-white/50 text-sm leading-relaxed">Advanced techniques and meticulous planning for structural integrity.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Users className="text-secondary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <span className="block font-bold text-white mb-1">Client Satisfaction</span>
                      <p className="text-white/50 text-sm leading-relaxed">We prioritize your vision and maintain open communication throughout.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-10 pt-8 border-t border-white/10 flex items-center gap-4">
                  <div className="text-secondary font-display font-black text-4xl">100%</div>
                  <div className="text-white/70 font-bold uppercase tracking-widest text-xs leading-tight">
                    Satisfaction<br />Guaranteed
                  </div>
                </div>
             </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {reasons.slice(3).map((reason, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/5 p-8 rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <div className="text-secondary mb-4">{reason.icon}</div>
                    <h3 className="text-lg font-display font-bold mb-2">{reason.title}</h3>
                    <p className="text-sm text-white/50">{reason.description}</p>
                  </motion.div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
