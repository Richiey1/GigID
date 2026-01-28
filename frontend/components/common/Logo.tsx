import React from 'react';

export const Logo = ({ className = "w-8 h-8", textClassName = "text-2xl" }: { className?: string, textClassName?: string }) => {
  return (
    <div className="flex items-center gap-2">
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
          fill="currentColor"
          className="text-primary"
        />
      </svg>
      <span className={`font-bold tracking-tight ${textClassName}`}>SmartX</span>
    </div>
  );
};
