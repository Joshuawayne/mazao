
import React from 'react';

interface LogoProps {
  size?: string; 
  textColor?: string; 
  iconColor?: string; 
  showTagline?: boolean;
  taglineText?: string;
  taglineSize?: string; 
}

const MaizeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className || "w-10 h-10 text-yellow-400"}>
    {/* Husk (green part) */}
    <path d="M16.526 6.386C15.48 5.404 14.05 4.75 12.5 4.75c-1.72 0-3.282.783-4.348 1.965C6.63 8.414 6 10.378 6 12.5c0 2.278.738 4.302 2.002 5.928L6.5 21.5h11l-1.502-3.072C17.262 16.802 18 14.778 18 12.5c0-2.122-.63-4.086-2.152-5.728L16.526 6.386zM8.652 6.715A7.46 7.46 0 0112.5 6.25c1.18 0 2.273.274 3.223.758L14.5 9.5h-5L8.652 6.715z" fill="#4CAF50" />
    {/* Kernels (yellow part) */}
    <path d="M12.5 7.25c-.968 0-1.858.266-2.607.72l-.908 2.035c-.387.865-.387 1.845 0 2.71l.908 2.035c.749.454 1.639.72 2.607.72s1.858-.266 2.607-.72l.908-2.035c.387-.865.387-1.845 0-2.71l-.908-2.035A6.465 6.465 0 0012.5 7.25zM11 10.5a.5.5 0 11-1 0 .5.5 0 011 0zm2 0a.5.5 0 11-1 0 .5.5 0 011 0zm2 0a.5.5 0 11-1 0 .5.5 0 011 0zm-4 2a.5.5 0 11-1 0 .5.5 0 011 0zm2 0a.5.5 0 11-1 0 .5.5 0 011 0zm2 0a.5.5 0 11-1 0 .5.5 0 011 0zm-4 2a.5.5 0 11-1 0 .5.5 0 011 0zm2 0a.5.5 0 11-1 0 .5.5 0 011 0zm2 0a.5.5 0 11-1 0 .5.5 0 011 0z" fill="#FFEB3B" />
  </svg>
);


const Logo: React.FC<LogoProps> = ({ 
  size = "text-2xl", 
  textColor = "text-green-800", 
  iconColor, 
  showTagline = false,
  taglineText = "",
  taglineSize = "text-sm" 
}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center space-x-2">
        <MaizeIcon className={`w-10 h-10 ${iconColor || ''}`} />
        <span className={`font-bold ${size} ${textColor}`}>AgriGrow Kenya</span>
      </div>
      {showTagline && taglineText && (
        <p className={`${taglineSize} ${textColor} opacity-80 mt-1 text-center`}>{taglineText}</p>
      )}
    </div>
  );
};

export default Logo;
