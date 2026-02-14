const Card = ({ children, className = '', hover = true, ...props }) => {
  const baseClasses = 'bg-white rounded-xl shadow-soft border border-gray-200';
  const hoverClasses = hover ? 'hover:shadow-medium transition-shadow duration-200 ease-in-out' : '';
  
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
