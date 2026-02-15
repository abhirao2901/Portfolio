const Card = ({ children, className = '', hover = true, ...props }) => {
  const baseClasses = 'relative rounded-xl border border-gray-200 bg-white shadow-elev-1 transition-all duration-300 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-blue-200/60 before:to-transparent focus-within:ring-2 focus-within:ring-blue-300/60';
  const hoverClasses = hover ? 'motion-safe:hover:shadow-elev-1-hover motion-safe:hover:-translate-y-[2px]' : '';
  
  return (
    <div 
      className={`${baseClasses} ${hoverClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
