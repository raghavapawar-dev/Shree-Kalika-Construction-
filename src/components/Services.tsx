import React from 'react';
import { motion } from 'motion/react';
import { Home, Building2, Paintbrush, Hammer, Ruler, Briefcase } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      icon: <Home size={40} />,
      title: 'Residential Construction',
      description: 'From luxury villas to modern apartments, we build homes that reflect your lifestyle and comfort.',
    },
    {
      icon: <Building2 size={40} />,
      title: 'Commercial Construction',
      description: 'State-of-the-art office buildings, retail spaces, and industrial complexes designed for business success.',
    },
    {
      icon: <Paintbrush size={40} />,
      title: 'Renovation & Remodeling',
      description: 'Transforming existing spaces into modern, functional environments with our expert remodeling services.',
    },
    {
      icon: <Hammer size={40} />,
      title: 'Interior & Exterior Work',
      description: 'Comprehensive finishing services including high-end interiors, landscaping, and facade treatments.',
    },
    {
      icon: <Ruler size={40} />,
      title: 'Civil Contracting',
      description: 'Expert civil engineering and infrastructure development for projects of all scales and complexities.',
    },
    {
      icon: <Briefcase size={40} />,
      title: 'Project Management',
      description: 'End-to-end management ensuring your project is delivered on time, within budget, and to the highest standards.',
    },
  ];

  return (
    <section id="services" className="py-24 bg-bg-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-display font-bold uppercase tracking-widest text-sm mb-4 block">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Comprehensive <span className="text-secondary italic">Construction</span> Solutions
          </h2>
          <p className="text-lg text-text-muted">
            We offer a wide range of services tailored to meet the diverse needs of our clients, ensuring excellence at every stage of the construction process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-bg-light p-10 rounded-lg shadow-sm hover:shadow-xl transition-all group border-b-4 border-transparent hover:border-secondary"
            >
              <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-secondary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110 shadow-sm group-hover:shadow-primary/20">
                {service.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">
                {service.title}
              </h3>
              <p className="text-text-muted leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
