import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href="https://wa.me/918482867010"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 group flex items-center gap-3"
      aria-label="Chat on WhatsApp"
    >
      <div className="bg-white text-primary font-bold py-2 px-4 rounded-full shadow-xl border border-gray-100 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap">
        Chat with us
      </div>
      <div className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 animate-bounce hover:animate-none">
        <MessageCircle size={32} fill="currentColor" />
      </div>
    </a>
  );
};
