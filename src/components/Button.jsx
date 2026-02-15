const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  href,
  onClick,
  className = '',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold transition rounded-md';
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-300 active:motion-safe:animate-press',
    secondary: 'text-gray-700 bg-white hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-300 active:motion-safe:animate-press border border-gray-300',
    outline: 'border border-gray-300 text-gray-900 hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-300 active:motion-safe:animate-press',
    ghost: 'text-gray-900 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-300 active:motion-safe:animate-press'
  };
  
  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  if (href) {
    return (
      <a 
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }
  
  return (
    <button 
      className={classes}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
