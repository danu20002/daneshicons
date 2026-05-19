import React from 'react';

export const iconData = {
  "id": "PlexiMuseum",
  "name": "PlexiMuseum",
  "category": "LX",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.30 18.41 C 21.77 12.57, 5.74 8.02, 18.31 8.70"
      }
    ],
    [
      "path",
      {
        "d": "M 14.46 19.85 A 6.34 3.95 29 0 0 2.77 3.79"
      }
    ],
    [
      "path",
      {
        "d": "M 16.48 12.56 Q 16.86 13.49 20.29 19.90"
      }
    ],
    [
      "path",
      {
        "d": "M 2.49 5.79 A 6.71 6.89 50 0 1 6.73 18.99"
      }
    ],
    [
      "path",
      {
        "d": "M 18.59 12.26 L 8.37 17.64 L 8.87 2.33"
      }
    ],
    [
      "path",
      {
        "d": "M 10.84 13.74 L 19.55 9.31 L 13.44 4.00"
      }
    ]
  ]
};

export const PlexiMuseum = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.30 18.41 C 21.77 12.57, 5.74 8.02, 18.31 8.70" />
      <path d="M 14.46 19.85 A 6.34 3.95 29 0 0 2.77 3.79" />
      <path d="M 16.48 12.56 Q 16.86 13.49 20.29 19.90" />
      <path d="M 2.49 5.79 A 6.71 6.89 50 0 1 6.73 18.99" />
      <path d="M 18.59 12.26 L 8.37 17.64 L 8.87 2.33" />
      <path d="M 10.84 13.74 L 19.55 9.31 L 13.44 4.00" />
      {children}
    </svg>
  );
});

export default PlexiMuseum;
