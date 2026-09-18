// src/assets/icons/CustomFacebookIcon.jsx

import React from 'react';

const Facebook = React.forwardRef(
  (
    {
      size = 24,
      color = 'currentColor',
      fill = 'none',
      stroke = color,
      strokeWidth = 2.4, // Now fully responsive to 2, 3, etc.
      className,
      ...props
    },
    ref
  ) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64" 
        width={size}
        height={size}
        className={className}
        fill={fill}
        {...props}
      >
        {/* Outer squircle body (matches the 7px offset and 12px/13px radius of your source) */}
        <rect
          x="8"
          y="8"
          width="48"
          height="48"
          rx="12"
          ry="12"
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* The 'f' symbol path matching the exact inner alignment of your source */}
        <path
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M36 55V34h6l1-6h-7v-4c0-1.1.9-2 2-2h5v-6h-6c-4.4 0-8 3.6-8 8v4h-5v6h5v21h7z"
        />
      </svg>
    );
  }
);

Facebook.displayName = 'Facebook';

export default Facebook;
