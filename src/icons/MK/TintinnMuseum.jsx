import React from 'react';

export const iconData = {
  "id": "TintinnMuseum",
  "name": "TintinnMuseum",
  "category": "MK",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.71 12.00 a 2.29 2.29 0 1 0 4.58 0 a 2.29 2.29 0 1 0 -4.58 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.76 12.00 a 4.24 4.24 0 1 0 8.47 0 a 4.24 4.24 0 1 0 -8.47 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.93 12.00 a 6.07 6.07 0 1 0 12.15 0 a 6.07 6.07 0 1 0 -12.15 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.70 12.00 a 8.30 8.30 0 1 0 16.60 0 a 8.30 8.30 0 1 0 -16.60 0"
      }
    ]
  ]
};

export const TintinnMuseum = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.71 12.00 a 2.29 2.29 0 1 0 4.58 0 a 2.29 2.29 0 1 0 -4.58 0" />
      <path d="M 7.76 12.00 a 4.24 4.24 0 1 0 8.47 0 a 4.24 4.24 0 1 0 -8.47 0" />
      <path d="M 5.93 12.00 a 6.07 6.07 0 1 0 12.15 0 a 6.07 6.07 0 1 0 -12.15 0" />
      <path d="M 3.70 12.00 a 8.30 8.30 0 1 0 16.60 0 a 8.30 8.30 0 1 0 -16.60 0" />
      {children}
    </svg>
  );
});

export default TintinnMuseum;
