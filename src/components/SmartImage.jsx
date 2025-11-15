// src/components/SmartImage.jsx
import React, { useState } from 'react';

const SmartImage = ({ src, alt, className, placeholderSrc }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {/* Blurred Placeholder (shows while main image loads) */}
      {!loaded && placeholderSrc && (
        <img
          src={placeholderSrc}
          alt={`Placeholder for ${alt}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${loaded ? 'opacity-0' : 'opacity-100'}`}
          style={{ filter: 'blur(10px)', transitionDelay: '50ms' }}
        />
      )}

      {/* Main Image */}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-500 ease-in-out ${loaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setLoaded(true)}
        loading="lazy" // Critical for performance
      />
    </div>
  );
};

export default SmartImage;
