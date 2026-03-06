import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  color?: 'yellow' | 'orange' | 'red';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, color = 'orange' }) => {
  const colorClass = color === 'yellow' ? 'text-fibeg-yellow' : color === 'red' ? 'text-fibeg-red' : 'text-fibeg-orange';
  
  return (
    <div className="text-center mb-12 relative z-10">
      <h2 className={`text-5xl md:text-6xl font-comic-header tracking-wider ${colorClass} drop-shadow-[2px_2px_0_rgba(0,0,0,1)] uppercase transform -rotate-1`}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-xl md:text-2xl font-comic-body font-bold text-gray-800 bg-white inline-block px-4 py-1 border-2 border-black shadow-comic rotate-1">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;