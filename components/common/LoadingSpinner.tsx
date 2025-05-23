
import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string; 
  text?: string;
}

const SproutIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className || "w-8 h-8"}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.59V10c0-.55.45-1 1-1s1 .45 1 1v6.59c0 .25-.12.48-.32.63L11 17.83l-1.32-.61c-.2-.15-.32-.38-.32-.63zm5.32-5.22l-1.94-1.94c-.39-.39-1.02-.39-1.41 0s-.39 1.02 0 1.41l.72.72c-.4.24-.72.59-.9.99l-.72-.72c-.39-.39-1.02-.39-1.41 0s-.39 1.02 0 1.41l1.94 1.94c.39.39 1.02.39 1.41 0l2.65-2.65c.4-.39.4-1.02.01-1.41zM9.32 9.37L7.38 7.43c-.39-.39-1.02-.39-1.41 0s-.39 1.02 0 1.41l.72.72c-.4.24-.72.59-.9.99l-.72-.72c-.39-.39-1.02-.39-1.41 0s-.39 1.02 0 1.41l1.94 1.94c.39.39 1.02.39 1.41 0l2.65-2.65c.4-.39.4-1.02.01-1.41s-1.03-.39-1.42 0z"/>
  </svg>
);


const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  color = 'text-primary-dark',
  text 
}) => {
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-10 w-10',
    lg: 'h-16 w-16',
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <div className={`animate-spin ${sizeClasses[size]} ${color}`}>
        <SproutIcon className={`w-full h-full`} />
      </div>
      {text && <p className={`text-sm ${color}`}>{text}</p>}
    </div>
  );
};

export default LoadingSpinner;
