import React from 'react';

export const iconData = {
  "id": "TiliPhantom",
  "name": "TiliPhantom",
  "category": "CO",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.76 12.00 a 9.24 9.24 0 1 0 18.48 0 a 9.24 9.24 0 1 0 -18.48 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.61 6.46 a 7.39 2.21799937941134 0 1 0 14.79 0 a 7.39 2.21799937941134 0 1 0 -14.79 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.95 10.15 a 9.05 2.7164833646837656 0 1 0 18.11 0 a 9.05 2.7164833646837656 0 1 0 -18.11 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.95 13.85 a 9.05 2.7164833646837656 0 1 0 18.11 0 a 9.05 2.7164833646837656 0 1 0 -18.11 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.61 17.54 a 7.39 2.2179993794113395 0 1 0 14.79 0 a 7.39 2.2179993794113395 0 1 0 -14.79 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.62 4.00 A 2 2 0 0 0 16.62 20.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.62 4.00 A 2 2 0 0 1 16.62 20.00"
      }
    ],
    [
      "path",
      {
        "d": "M 7.38 4.00 A 2 2 0 0 0 7.38 20.00"
      }
    ],
    [
      "path",
      {
        "d": "M 7.38 4.00 A 2 2 0 0 1 7.38 20.00"
      }
    ]
  ]
};

export const TiliPhantom = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.76 12.00 a 9.24 9.24 0 1 0 18.48 0 a 9.24 9.24 0 1 0 -18.48 0" />
      <path d="M 4.61 6.46 a 7.39 2.21799937941134 0 1 0 14.79 0 a 7.39 2.21799937941134 0 1 0 -14.79 0" />
      <path d="M 2.95 10.15 a 9.05 2.7164833646837656 0 1 0 18.11 0 a 9.05 2.7164833646837656 0 1 0 -18.11 0" />
      <path d="M 2.95 13.85 a 9.05 2.7164833646837656 0 1 0 18.11 0 a 9.05 2.7164833646837656 0 1 0 -18.11 0" />
      <path d="M 4.61 17.54 a 7.39 2.2179993794113395 0 1 0 14.79 0 a 7.39 2.2179993794113395 0 1 0 -14.79 0" />
      <path d="M 16.62 4.00 A 2 2 0 0 0 16.62 20.00" />
      <path d="M 16.62 4.00 A 2 2 0 0 1 16.62 20.00" />
      <path d="M 7.38 4.00 A 2 2 0 0 0 7.38 20.00" />
      <path d="M 7.38 4.00 A 2 2 0 0 1 7.38 20.00" />
      {children}
    </svg>
  );
});

export default TiliPhantom;
