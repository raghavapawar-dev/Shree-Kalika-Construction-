import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Award, Users, Clock } from 'lucide-react';

export const About: React.FC = () => {
  const stats = [
    { icon: <Award className="text-secondary" size={32} />, value: '15+', label: 'Years Experience' },
    { icon: <Users className="text-secondary" size={32} />, value: '250+', label: 'Happy Clients' },
    { icon: <CheckCircle2 className="text-secondary" size={32} />, value: '500+', label: 'Projects Completed' },
    { icon: <Clock className="text-secondary" size={32} />, value: '24/7', label: 'Support' },
  ];

  return (
    <section id="about" className="py-24 bg-bg-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl aspect-[4/5]">
              <img
                src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Modern Building"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-secondary -z-0 rounded-lg hidden md:block"></div>
            <div className="absolute -top-8 -left-8 w-32 h-32 border-8 border-primary/10 -z-0 rounded-lg hidden md:block"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-secondary font-display font-bold uppercase tracking-widest text-sm mb-4 block">
              About Shree Kalika Construction
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-primary leading-tight mb-8">
              We Build Your Dreams With <span className="text-secondary">Precision</span>
            </h2>
            <p className="text-lg text-text-muted mb-6 leading-relaxed">
              Shree Kalika Construction has been a cornerstone of quality and reliability in the construction industry for over 15 years. We specialize in delivering high-end residential and commercial projects that stand the test of time.
            </p>
            
            <div className="space-y-8 mb-10">
              <div>
                <h3 className="text-xl font-display font-bold text-primary mb-2 flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  Our Mission
                </h3>
                <p className="text-text-muted">To provide superior construction services by consistently improving the quality of our product and to add value for clients through innovation, foresight, and integrity.</p>
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-primary mb-2 flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  Our Vision
                </h3>
                <p className="text-text-muted">To be the most trusted and preferred construction partner, recognized for our commitment to excellence, safety, and sustainable building practices.</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-8 border-t border-border">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">{stat.icon}</div>
                  <div className="text-2xl font-display font-extrabold text-primary">{stat.value}</div>
                  <div className="text-xs text-text-muted uppercase tracking-wider font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
