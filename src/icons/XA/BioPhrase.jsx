import React from 'react';

export const iconData = {
  "id": "BioPhrase",
  "name": "BioPhrase",
  "category": "XA",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.69 12.00 a 8.31 8.31 0 1 0 16.63 0 a 8.31 8.31 0 1 0 -16.63 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.69 12.00 a 8.31 2.493799431575462 0 1 0 16.63 0 a 8.31 2.493799431575462 0 1 0 -16.63 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.16 4.80 A 2 2 0 0 0 16.16 19.20"
      }
    ],
    [
      "path",
      {
        "d": "M 16.16 4.80 A 2 2 0 0 1 16.16 19.20"
      }
    ],
    [
      "path",
      {
        "d": "M 7.84 4.80 A 2 2 0 0 0 7.84 19.20"
      }
    ],
    [
      "path",
      {
        "d": "M 7.84 4.80 A 2 2 0 0 1 7.84 19.20"
      }
    ]
  ]
};

export const BioPhrase = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.69 12.00 a 8.31 8.31 0 1 0 16.63 0 a 8.31 8.31 0 1 0 -16.63 0" />
      <path d="M 3.69 12.00 a 8.31 2.493799431575462 0 1 0 16.63 0 a 8.31 2.493799431575462 0 1 0 -16.63 0" />
      <path d="M 16.16 4.80 A 2 2 0 0 0 16.16 19.20" />
      <path d="M 16.16 4.80 A 2 2 0 0 1 16.16 19.20" />
      <path d="M 7.84 4.80 A 2 2 0 0 0 7.84 19.20" />
      <path d="M 7.84 4.80 A 2 2 0 0 1 7.84 19.20" />
      {children}
    </svg>
  );
});

export default BioPhrase;
