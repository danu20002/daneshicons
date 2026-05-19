import React from 'react';

export const iconData = {
  "id": "GigaJuror",
  "name": "GigaJuror",
  "category": "EJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.84 12.00 a 2.16 2.16 0 1 0 4.31 0 a 2.16 2.16 0 1 0 -4.31 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.31 12.00 a 3.69 3.69 0 1 0 7.39 0 a 3.69 3.69 0 1 0 -7.39 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.34 12.00 a 5.66 5.66 0 1 0 11.31 0 a 5.66 5.66 0 1 0 -11.31 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.84 12.00 a 7.16 7.16 0 1 0 14.32 0 a 7.16 7.16 0 1 0 -14.32 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.59 12.00 a 8.41 8.41 0 1 0 16.81 0 a 8.41 8.41 0 1 0 -16.81 0"
      }
    ]
  ]
};

export const GigaJuror = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.84 12.00 a 2.16 2.16 0 1 0 4.31 0 a 2.16 2.16 0 1 0 -4.31 0" />
      <path d="M 8.31 12.00 a 3.69 3.69 0 1 0 7.39 0 a 3.69 3.69 0 1 0 -7.39 0" />
      <path d="M 6.34 12.00 a 5.66 5.66 0 1 0 11.31 0 a 5.66 5.66 0 1 0 -11.31 0" />
      <path d="M 4.84 12.00 a 7.16 7.16 0 1 0 14.32 0 a 7.16 7.16 0 1 0 -14.32 0" />
      <path d="M 3.59 12.00 a 8.41 8.41 0 1 0 16.81 0 a 8.41 8.41 0 1 0 -16.81 0" />
      {children}
    </svg>
  );
});

export default GigaJuror;
