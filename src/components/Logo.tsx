import React from 'react';

const Logo = ({ className = "h-8 w-8" }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer ring */}
      <circle
        cx="20"
        cy="20"
        r="18"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      
      {/* Inner geometric pattern */}
      <path
        d="M12 20L20 12L28 20L20 28L12 20Z"
        fill="currentColor"
        opacity="0.8"
      />
      
      {/* Central dot */}
      <circle
        cx="20"
        cy="20"
        r="3"
        fill="currentColor"
      />
      
      {/* Data points */}
      <circle cx="20" cy="8" r="2" fill="currentColor" opacity="0.6" />
      <circle cx="32" cy="20" r="2" fill="currentColor" opacity="0.6" />
      <circle cx="20" cy="32" r="2" fill="currentColor" opacity="0.6" />
      <circle cx="8" cy="20" r="2" fill="currentColor" opacity="0.6" />
      
      {/* Connecting lines */}
      <line x1="20" y1="10" x2="20" y2="17" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="30" y1="20" x2="23" y2="20" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="20" y1="30" x2="20" y2="23" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="10" y1="20" x2="17" y2="20" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    </svg>
  );
};

export default Logo;