import { useEffect, useRef, useState } from 'react';

const Image = ({
  src,
  srcSet,
  alt = '',
  sizes = '100vw',
  contain = false,
  position = 'object-center',
  priority = false,
  className = '',
  ...props
}) => {
  const imgRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Handle browser cache where onLoad might not fire
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setIsLoaded(true);
    }
  }, []);

  const imageSrc = typeof src === 'object' ? src?.src : src;
  const blurDataURL = typeof src === 'object' ? src?.lqip : null;

  const fitClass = contain ? 'object-contain' : 'object-cover';
  const layoutClasses = `${fitClass} ${position}`;
  
  const showImage = priority || !blurDataURL || isLoaded;

  return (
    <figure className={`relative w-full h-full overflow-hidden ${className}`}>
      {blurDataURL && !isLoaded && (
        <img
          src={blurDataURL}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full ${layoutClasses} filter blur-xl scale-110 pointer-events-none`}
        />
      )}

      <img
        ref={imgRef}
        src={imageSrc}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full ${layoutClasses} transition-opacity duration-500 ease-out ${
          showImage ? 'opacity-100' : 'opacity-0'
        }`}
        {...props}
      />
    </figure>
  );
};

export default Image;