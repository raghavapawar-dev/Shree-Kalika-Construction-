import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Plus } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'The Grand Residency',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
    },
    {
      title: 'Skyline Business Hub',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    },
    {
      title: 'Emerald Villas',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop',
    },
    {
      title: 'Industrial Park X',
      category: 'Industrial',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop',
    },
    {
      title: 'Modern Art Museum',
      category: 'Public Space',
      image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2065&auto=format&fit=crop',
    },
    {
      title: 'Coastal Resort & Spa',
      category: 'Hospitality',
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2050&auto=format&fit=crop',
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-secondary font-display font-bold uppercase tracking-widest text-sm mb-4 block">
              Our Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Showcasing Our <span className="text-secondary italic">Masterpieces</span>
            </h2>
            <p className="text-lg text-text-muted">
              Explore our diverse range of projects, each a testament to our commitment to quality, innovation, and architectural excellence.
            </p>
          </div>
          <button className="bg-primary hover:bg-secondary text-white font-bold py-4 px-8 rounded-sm transition-all flex items-center gap-2">
            View All Projects
            <ExternalLink size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
          {projects.map((project, index) => {
            const gridClasses = [
              "md:col-span-8 md:row-span-2", // 0
              "md:col-span-4 md:row-span-1", // 1
              "md:col-span-4 md:row-span-1", // 2
              "md:col-span-4 md:row-span-2", // 3
              "md:col-span-4 md:row-span-1", // 4
              "md:col-span-4 md:row-span-1", // 5
            ];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer ${gridClasses[index] || "md:col-span-4"}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-secondary font-display font-bold text-xs uppercase tracking-[0.2em] mb-3 block">
                      {project.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-secondary group-hover:border-secondary transition-colors duration-300">
                        <Plus size={20} />
                      </div>
                      <span className="text-white font-display font-bold text-xs uppercase tracking-widest">View Case Study</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
