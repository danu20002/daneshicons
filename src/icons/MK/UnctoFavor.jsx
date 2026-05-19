import React from 'react';

export const iconData = {
  "id": "UnctoFavor",
  "name": "UnctoFavor",
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
        "d": "M 7.94 12.00 a 4.06 4.06 0 1 0 8.13 0 a 4.06 4.06 0 1 0 -8.13 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.77 12.00 a 6.23 6.23 0 1 0 12.45 0 a 6.23 6.23 0 1 0 -12.45 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.59 12.00 a 8.41 8.41 0 1 0 16.83 0 a 8.41 8.41 0 1 0 -16.83 0"
      }
    ]
  ]
};

export const UnctoFavor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.94 12.00 a 4.06 4.06 0 1 0 8.13 0 a 4.06 4.06 0 1 0 -8.13 0" />
      <path d="M 5.77 12.00 a 6.23 6.23 0 1 0 12.45 0 a 6.23 6.23 0 1 0 -12.45 0" />
      <path d="M 3.59 12.00 a 8.41 8.41 0 1 0 16.83 0 a 8.41 8.41 0 1 0 -16.83 0" />
      {children}
    </svg>
  );
});

export default UnctoFavor;
