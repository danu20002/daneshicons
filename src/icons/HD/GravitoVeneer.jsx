import React from 'react';

export const iconData = {
  "id": "GravitoVeneer",
  "name": "GravitoVeneer",
  "category": "HD",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.00 14.34 L 12.24 20.33 L 4.15 14.80 L 6.91 5.40 L 16.70 5.12 Z"
      }
    ]
  ]
};

export const GravitoVeneer = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...rest}
    >
      <path d="M 20.00 14.34 L 12.24 20.33 L 4.15 14.80 L 6.91 5.40 L 16.70 5.12 Z" />
      {children}
    </svg>
  );
});

export default GravitoVeneer;
