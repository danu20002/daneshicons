import React from 'react';

export const iconData = {
  "id": "SupraLow",
  "name": "SupraLow",
  "category": "TI",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.04 9.17 L 19.64 10.20 L 21.22 11.44 L 23.00 10.31 L 20.84 9.53 L 23.00 8.08 L 23.00 5.68 L 23.00 5.87 L 23.00 6.79 L 20.06 8.04 L 17.27 8.87 L 18.50 10.79 L 18.64 12.44 L 20.03 14.56 L 17.55 15.77 L 16.22 18.20 L 16.88 16.47 L 14.14 17.62 L 13.96 14.82 L 11.15 15.18 L 8.92 17.31 L 9.28 16.51 L 6.32 16.99 L 7.08 14.55 L 9.81 13.20 L 7.47 10.36 L 6.14 7.71 L 4.41 6.83 L 1.80 7.73 L 2.76 5.21 L 3.66 7.37 L 4.30 5.48 L 6.11 7.79"
      }
    ],
    [
      "path",
      {
        "d": "M 3.96 7.59 L 6.18 8.32 L 6.23 10.22 L 7.96 10.15 L 9.99 8.86 L 10.73 8.36 L 7.76 8.19 L 4.79 9.24 L 4.34 9.67 L 7.24 7.24 L 7.87 10.23 L 9.52 8.85 L 12.37 6.18 L 14.79 4.71 L 12.61 2.20 L 14.85 3.13 L 15.56 5.24"
      }
    ]
  ]
};

export const SupraLow = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.04 9.17 L 19.64 10.20 L 21.22 11.44 L 23.00 10.31 L 20.84 9.53 L 23.00 8.08 L 23.00 5.68 L 23.00 5.87 L 23.00 6.79 L 20.06 8.04 L 17.27 8.87 L 18.50 10.79 L 18.64 12.44 L 20.03 14.56 L 17.55 15.77 L 16.22 18.20 L 16.88 16.47 L 14.14 17.62 L 13.96 14.82 L 11.15 15.18 L 8.92 17.31 L 9.28 16.51 L 6.32 16.99 L 7.08 14.55 L 9.81 13.20 L 7.47 10.36 L 6.14 7.71 L 4.41 6.83 L 1.80 7.73 L 2.76 5.21 L 3.66 7.37 L 4.30 5.48 L 6.11 7.79" />
      <path d="M 3.96 7.59 L 6.18 8.32 L 6.23 10.22 L 7.96 10.15 L 9.99 8.86 L 10.73 8.36 L 7.76 8.19 L 4.79 9.24 L 4.34 9.67 L 7.24 7.24 L 7.87 10.23 L 9.52 8.85 L 12.37 6.18 L 14.79 4.71 L 12.61 2.20 L 14.85 3.13 L 15.56 5.24" />
      {children}
    </svg>
  );
});

export default SupraLow;
