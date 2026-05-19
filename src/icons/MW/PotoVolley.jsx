import React from 'react';

export const iconData = {
  "id": "PotoVolley",
  "name": "PotoVolley",
  "category": "MW",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.13 12.00 a 8.87 8.87 0 1 0 17.74 0 a 8.87 8.87 0 1 0 -17.74 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.43 12.00 a 6.57 6.57 0 1 1 13.15 0 a 6.57 6.57 0 1 1 -13.15 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.37 12.00 L 22.37 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.77 16.92 L 20.39 18.10"
      }
    ],
    [
      "path",
      {
        "d": "M 14.59 19.96 L 15.21 21.86"
      }
    ],
    [
      "path",
      {
        "d": "M 9.41 19.96 L 8.79 21.86"
      }
    ],
    [
      "path",
      {
        "d": "M 5.23 16.92 L 3.61 18.10"
      }
    ],
    [
      "path",
      {
        "d": "M 3.63 12.00 L 1.63 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.23 7.08 L 3.61 5.90"
      }
    ],
    [
      "path",
      {
        "d": "M 9.41 4.04 L 8.79 2.14"
      }
    ],
    [
      "path",
      {
        "d": "M 14.59 4.04 L 15.21 2.14"
      }
    ],
    [
      "path",
      {
        "d": "M 18.77 7.08 L 20.39 5.90"
      }
    ]
  ]
};

export const PotoVolley = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.13 12.00 a 8.87 8.87 0 1 0 17.74 0 a 8.87 8.87 0 1 0 -17.74 0" />
      <path d="M 5.43 12.00 a 6.57 6.57 0 1 1 13.15 0 a 6.57 6.57 0 1 1 -13.15 0" />
      <path d="M 20.37 12.00 L 22.37 12.00" />
      <path d="M 18.77 16.92 L 20.39 18.10" />
      <path d="M 14.59 19.96 L 15.21 21.86" />
      <path d="M 9.41 19.96 L 8.79 21.86" />
      <path d="M 5.23 16.92 L 3.61 18.10" />
      <path d="M 3.63 12.00 L 1.63 12.00" />
      <path d="M 5.23 7.08 L 3.61 5.90" />
      <path d="M 9.41 4.04 L 8.79 2.14" />
      <path d="M 14.59 4.04 L 15.21 2.14" />
      <path d="M 18.77 7.08 L 20.39 5.90" />
      {children}
    </svg>
  );
});

export default PotoVolley;
