import React from 'react';

export const iconData = {
  "id": "VisioneBreeze",
  "name": "VisioneBreeze",
  "category": "GF",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.77 12.00 a 9.23 9.23 0 1 0 18.47 0 a 9.23 9.23 0 1 0 -18.47 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.77 12.00 a 9.23 2.770330041786656 0 1 0 18.47 0 a 9.23 2.770330041786656 0 1 0 -18.47 0"
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

export const VisioneBreeze = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.77 12.00 a 9.23 9.23 0 1 0 18.47 0 a 9.23 9.23 0 1 0 -18.47 0" />
      <path d="M 2.77 12.00 a 9.23 2.770330041786656 0 1 0 18.47 0 a 9.23 2.770330041786656 0 1 0 -18.47 0" />
      <path d="M 16.62 4.00 A 2 2 0 0 0 16.62 20.00" />
      <path d="M 16.62 4.00 A 2 2 0 0 1 16.62 20.00" />
      <path d="M 7.38 4.00 A 2 2 0 0 0 7.38 20.00" />
      <path d="M 7.38 4.00 A 2 2 0 0 1 7.38 20.00" />
      {children}
    </svg>
  );
});

export default VisioneBreeze;
