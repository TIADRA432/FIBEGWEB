import React from 'react';

interface ComicCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const ComicCard: React.FC<ComicCardProps> = ({ children, className = '', hoverEffect = true }) => {
  return (
    <div 
      className={`
        bg-white border-4 border-black p-4 
        ${hoverEffect ? 'hover:-translate-y-1 hover:shadow-comic-hover transition-all duration-200 shadow-comic' : 'shadow-comic'}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default ComicCard;