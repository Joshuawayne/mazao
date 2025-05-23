
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  leftIcon,
  rightIcon,
  isLoading = false,
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles = 'font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-150 ease-in-out flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed';
  
  const variantStyles = {
    primary: 'bg-primary hover:bg-primary-dark text-white focus:ring-primary-dark',
    secondary: 'bg-secondary hover:bg-yellow-600 text-white focus:ring-secondary', // using yellow-600 for hover of amber-500
    outline: 'border border-primary text-primary hover:bg-primary-light focus:ring-primary',
    ghost: 'text-primary hover:bg-green-100 focus:ring-primary', // using green-100 for light primary hover
    link: 'text-primary hover:underline focus:ring-primary p-0', // Links usually have no padding
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm min-h-[36px]',
    md: 'px-4 py-2 text-base min-h-[44px]',
    lg: 'px-6 py-3 text-lg min-h-[52px]',
  };
  // Special handling for link variant padding
  const currentSizeStyles = variant === 'link' ? 'text-sm' : sizeStyles[size];


  const widthStyle = fullWidth ? 'w-full' : '';

  const loadingSpinner = (
    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  );
  const iconColorClass = variant === 'primary' || variant === 'secondary' ? 'text-white' : 'text-current';


  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${currentSizeStyles} ${widthStyle} ${className}`}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading && <span className={iconColorClass}>{loadingSpinner}</span>}
      {leftIcon && !isLoading && <span className={`mr-2 ${iconColorClass}`}>{leftIcon}</span>}
      {!isLoading && children}
      {rightIcon && !isLoading && <span className={`ml-2 ${iconColorClass}`}>{rightIcon}</span>}
    </button>
  );
};

export default Button;
