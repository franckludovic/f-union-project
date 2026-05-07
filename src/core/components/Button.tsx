import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'purple' | 'blue' | 'red' | 'white' | 'outline' | 'navy';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  target?: string;
  rel?: string;
}

export const Button = ({
  children,
  variant = 'purple',
  size = 'md',
  className = '',
  href,
  target,
  rel,
  ...props
}: ButtonProps) => {

  const baseStyles = "rounded-full font-bold transition-all active:scale-95 inline-flex items-center justify-center";

  const variants = {
    purple: "bg-summit-purple text-white hover:bg-opacity-90",
    blue: "bg-summit-blue text-white hover:bg-opacity-90",
    red: "bg-summit-red text-white hover:bg-opacity-90",
    white: "bg-white text-summit-purple hover:bg-gray-100",
    outline: "border-2 border-white text-white hover:bg-white hover:text-summit-purple",
    navy: "bg-[#151433] text-white hover:bg-opacity-90"
  };

  const sizes = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-8 py-2.5 text-base",
    lg: "px-10 py-3 text-lg"
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:');
    if (isExternal) {
      return (
        <a 
          href={href} 
          className={combinedClassName} 
          target={target || '_blank'} 
          rel={rel || 'noopener noreferrer'}
          {...(props as any)}
        >
          {children}
        </a>
      );
    }
    return (
      <Link 
        href={href} 
        className={combinedClassName} 
        target={target} 
        rel={rel}
        {...(props as any)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={combinedClassName}
      {...props}
    >
      {children}
    </button>
  );
};