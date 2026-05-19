import React from 'react';

export const iconData = {
  "id": "DiscoRag",
  "name": "DiscoRag",
  "category": "QL",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.39 12.00 a 9.61 9.61 0 1 0 19.21 0 a 9.61 9.61 0 1 0 -19.21 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.68 7.20 a 8.32 2.4960632256318367 0 1 0 16.64 0 a 8.32 2.4960632256318367 0 1 0 -16.64 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.39 12.00 a 9.61 2.882205550465733 0 1 0 19.21 0 a 9.61 2.882205550465733 0 1 0 -19.21 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.68 16.80 a 8.32 2.4960632256318367 0 1 0 16.64 0 a 8.32 2.4960632256318367 0 1 0 -16.64 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.79 5.21 A 2 2 0 0 0 18.79 18.79"
      }
    ],
    [
      "path",
      {
        "d": "M 18.79 5.21 A 2 2 0 0 1 18.79 18.79"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.39 A 2 2 0 0 0 12.00 21.61"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.39 A 2 2 0 0 1 12.00 21.61"
      }
    ],
    [
      "path",
      {
        "d": "M 5.21 5.21 A 2 2 0 0 0 5.21 18.79"
      }
    ],
    [
      "path",
      {
        "d": "M 5.21 5.21 A 2 2 0 0 1 5.21 18.79"
      }
    ]
  ]
};

export const DiscoRag = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.39 12.00 a 9.61 9.61 0 1 0 19.21 0 a 9.61 9.61 0 1 0 -19.21 0" />
      <path d="M 3.68 7.20 a 8.32 2.4960632256318367 0 1 0 16.64 0 a 8.32 2.4960632256318367 0 1 0 -16.64 0" />
      <path d="M 2.39 12.00 a 9.61 2.882205550465733 0 1 0 19.21 0 a 9.61 2.882205550465733 0 1 0 -19.21 0" />
      <path d="M 3.68 16.80 a 8.32 2.4960632256318367 0 1 0 16.64 0 a 8.32 2.4960632256318367 0 1 0 -16.64 0" />
      <path d="M 18.79 5.21 A 2 2 0 0 0 18.79 18.79" />
      <path d="M 18.79 5.21 A 2 2 0 0 1 18.79 18.79" />
      <path d="M 12.00 2.39 A 2 2 0 0 0 12.00 21.61" />
      <path d="M 12.00 2.39 A 2 2 0 0 1 12.00 21.61" />
      <path d="M 5.21 5.21 A 2 2 0 0 0 5.21 18.79" />
      <path d="M 5.21 5.21 A 2 2 0 0 1 5.21 18.79" />
      {children}
    </svg>
  );
});

export default DiscoRag;
