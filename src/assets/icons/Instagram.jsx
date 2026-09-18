// src/assets/icons/CustomInstagramIcon.jsx

import React from 'react';

const Instagram = React.forwardRef(
  (
    {
      size = 24,
      color = 'currentColor',
      fill = 'none',
      stroke = color,
      strokeWidth = 2.4, // Now completely responsive to 2, 3, etc.
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
        {/* Outer squircle body matching the exact 7px/57px footprint of your SVG Repo file */}
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
        {/* Center lens matching the exact 32px midpoint coordinate grid */}
        <circle
          cx="32"
          cy="32"
          r="10.67"
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Flash element positioned perfectly at the 44.5px X / 17.5px Y coordinate */}
        <circle
          cx="44.5"
          cy="17.5"
          r="2.5"
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

Instagram.displayName = 'Instagram';

export default Instagram;
