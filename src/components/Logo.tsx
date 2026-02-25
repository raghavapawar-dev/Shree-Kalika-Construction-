import React from 'react';

export const Logo: React.FC<{ className?: string; light?: boolean }> = ({ className = "h-16", light = false }) => {
  return (
    <div className={`flex items-center ${className} ${light ? 'bg-white/90 p-2 rounded-lg' : ''}`}>
      <img 
        src="https://lh3.googleusercontent.com/d/1o8ESUfOPhdnCX3QPiPi6yqfAhZ0l5KnV" 
        alt="Shree Kalika Construction Logo" 
        className="h-full w-auto object-contain"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};
