import React from 'react';
import { motion } from 'motion/react';
import { ClipboardList, PencilRuler, HardHat, CheckCircle } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    {
      icon: <ClipboardList size={24} />,
      title: 'Consultation',
      description: 'We start by understanding your vision, requirements, and budget through detailed discussions.',
    },
    {
      icon: <PencilRuler size={24} />,
      title: 'Planning & Design',
      description: 'Our architects and engineers create precise blueprints and 3D models for your approval.',
    },
    {
      icon: <HardHat size={24} />,
      title: 'Construction',
      description: 'Our skilled team executes the build with high-quality materials and strict safety standards.',
    },
    {
      icon: <CheckCircle size={24} />,
      title: 'Final Handover',
      description: 'A thorough quality check is performed before we hand over the keys to your dream project.',
    },
  ];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-display font-bold uppercase tracking-widest text-sm mb-4 block">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-primary mb-6">
            How We Bring Your <span className="text-secondary">Vision</span> to Life
          </h2>
          <p className="text-lg text-gray-600">
            A systematic and transparent approach ensures that every project is delivered with perfection and within the promised timeline.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm p-8 group hover:shadow-md transition-shadow flex flex-col h-full relative border border-gray-100"
              >
                <div className="absolute top-4 right-4 w-10 h-10 bg-gray-50 text-secondary rounded-full flex items-center justify-center font-display font-black group-hover:bg-secondary group-hover:text-primary transition-colors duration-300">
                  0{index + 1}
                </div>
                <div className="text-center flex-grow">
                  <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-secondary/20 group-hover:scale-110">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-display font-bold text-primary mb-4">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
