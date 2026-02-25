import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Sandeep Pawar',
      project: 'Residential Villa',
      rating: 5,
      text: 'Shree Kalika Construction transformed our vision into a beautiful home. Their attention to detail and commitment to quality were evident throughout the project. Highly recommended!',
    },
    {
      name: 'Amol Patil',
      project: 'Commercial Office Space',
      rating: 5,
      text: 'Professional, reliable, and efficient. They delivered our office complex ahead of schedule without compromising on any aspect of the build. A truly world-class team.',
    },
    {
      name: 'Vijay Shinde',
      project: 'Renovation Project',
      rating: 5,
      text: 'The remodeling of our heritage property was handled with extreme care. They managed to preserve the classic charm while adding modern functionality perfectly.',
    },
  ];

  return (
    <section className="py-24 bg-bg-section overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-display font-bold uppercase tracking-widest text-sm mb-4 block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            What Our Clients <span className="text-secondary italic">Say</span>
          </h2>
          <p className="text-lg text-text-muted">
            Our reputation is built on the satisfaction of our clients. Here is what some of them have to say about their experience with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-bg-light p-10 rounded-lg shadow-sm relative"
            >
              <div className="absolute top-6 right-10 text-secondary opacity-20">
                <Quote size={60} />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={i < testimonial.rating ? 'fill-[#FBBC04] text-[#FBBC04]' : 'text-border'}
                  />
                ))}
              </div>

              <p className="text-text-muted italic mb-8 relative z-10">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-display font-bold text-xl">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-serif font-bold text-primary">{testimonial.name}</h4>
                  <p className="text-xs text-secondary font-bold uppercase tracking-wider">{testimonial.project}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
