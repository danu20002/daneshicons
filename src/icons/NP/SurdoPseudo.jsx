import React from 'react';

export const iconData = {
  "id": "SurdoPseudo",
  "name": "SurdoPseudo",
  "category": "NP",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.74 12.00 a 8.26 8.26 0 1 0 16.52 0 a 8.26 8.26 0 1 0 -16.52 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.16 12.00 a 5.84 5.84 0 1 1 11.68 0 a 5.84 5.84 0 1 1 -11.68 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.76 12.00 L 21.76 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.49 17.49 L 18.90 18.90"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 19.76 L 12.00 21.76"
      }
    ],
    [
      "path",
      {
        "d": "M 6.51 17.49 L 5.10 18.90"
      }
    ],
    [
      "path",
      {
        "d": "M 4.24 12.00 L 2.24 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.51 6.51 L 5.10 5.10"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.24 L 12.00 2.24"
      }
    ],
    [
      "path",
      {
        "d": "M 17.49 6.51 L 18.90 5.10"
      }
    ]
  ]
};

export const SurdoPseudo = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.74 12.00 a 8.26 8.26 0 1 0 16.52 0 a 8.26 8.26 0 1 0 -16.52 0" />
      <path d="M 6.16 12.00 a 5.84 5.84 0 1 1 11.68 0 a 5.84 5.84 0 1 1 -11.68 0" />
      <path d="M 19.76 12.00 L 21.76 12.00" />
      <path d="M 17.49 17.49 L 18.90 18.90" />
      <path d="M 12.00 19.76 L 12.00 21.76" />
      <path d="M 6.51 17.49 L 5.10 18.90" />
      <path d="M 4.24 12.00 L 2.24 12.00" />
      <path d="M 6.51 6.51 L 5.10 5.10" />
      <path d="M 12.00 4.24 L 12.00 2.24" />
      <path d="M 17.49 6.51 L 18.90 5.10" />
      {children}
    </svg>
  );
});

export default SurdoPseudo;
