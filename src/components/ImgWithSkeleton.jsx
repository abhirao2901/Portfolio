import { useState } from 'react';

const ImgWithSkeleton = ({ 
  src, 
  alt, 
  className = '', 
  skeletonClassName = '',
  ...props 
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {!loaded && (
        <div 
          className={`absolute inset-0 bg-gray-100 animate-pulse rounded ${skeletonClassName}`}
          aria-hidden="true"
        />
      )}
      <img
        src={src}
        alt={alt}
        className={`transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'} ${className}`}
        onLoad={() => setLoaded(true)}
        {...props}
      />
    </div>
  );
};

export default ImgWithSkeleton;
