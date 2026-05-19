import React from 'react';

export const iconData = {
  "id": "ProximoChill",
  "name": "ProximoChill",
  "category": "EA",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.59 12.00 a 9.41 9.41 0 1 0 18.83 0 a 9.41 9.41 0 1 0 -18.83 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.85 7.29 a 8.15 2.445538786103016 0 1 0 16.30 0 a 8.15 2.445538786103016 0 1 0 -16.30 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.59 12.00 a 9.41 2.8238649529404936 0 1 0 18.83 0 a 9.41 2.8238649529404936 0 1 0 -18.83 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.85 16.71 a 8.15 2.445538786103016 0 1 0 16.30 0 a 8.15 2.445538786103016 0 1 0 -16.30 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.66 5.34 A 2 2 0 0 0 18.66 18.66"
      }
    ],
    [
      "path",
      {
        "d": "M 18.66 5.34 A 2 2 0 0 1 18.66 18.66"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.59 A 2 2 0 0 0 12.00 21.41"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.59 A 2 2 0 0 1 12.00 21.41"
      }
    ],
    [
      "path",
      {
        "d": "M 5.34 5.34 A 2 2 0 0 0 5.34 18.66"
      }
    ],
    [
      "path",
      {
        "d": "M 5.34 5.34 A 2 2 0 0 1 5.34 18.66"
      }
    ]
  ]
};

export const ProximoChill = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.59 12.00 a 9.41 9.41 0 1 0 18.83 0 a 9.41 9.41 0 1 0 -18.83 0" />
      <path d="M 3.85 7.29 a 8.15 2.445538786103016 0 1 0 16.30 0 a 8.15 2.445538786103016 0 1 0 -16.30 0" />
      <path d="M 2.59 12.00 a 9.41 2.8238649529404936 0 1 0 18.83 0 a 9.41 2.8238649529404936 0 1 0 -18.83 0" />
      <path d="M 3.85 16.71 a 8.15 2.445538786103016 0 1 0 16.30 0 a 8.15 2.445538786103016 0 1 0 -16.30 0" />
      <path d="M 18.66 5.34 A 2 2 0 0 0 18.66 18.66" />
      <path d="M 18.66 5.34 A 2 2 0 0 1 18.66 18.66" />
      <path d="M 12.00 2.59 A 2 2 0 0 0 12.00 21.41" />
      <path d="M 12.00 2.59 A 2 2 0 0 1 12.00 21.41" />
      <path d="M 5.34 5.34 A 2 2 0 0 0 5.34 18.66" />
      <path d="M 5.34 5.34 A 2 2 0 0 1 5.34 18.66" />
      {children}
    </svg>
  );
});

export default ProximoChill;
