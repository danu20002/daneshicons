import React from 'react';

export const iconData = {
  "id": "KiloStaple",
  "name": "KiloStaple",
  "category": "RD",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.35 4.12 L 13.28 4.14 L 12.46 1.82 L 11.46 1.00 L 10.07 1.00 L 9.63 1.00 L 12.15 3.96 L 12.95 2.76 L 12.87 5.08 L 12.16 5.60 L 14.86 3.23 L 13.64 5.51 L 11.02 4.78 L 12.35 3.75 L 14.64 2.36 L 13.09 5.33 L 15.79 5.05 L 14.34 2.40 L 16.09 1.15 L 17.52 1.00 L 15.23 1.00 L 17.52 1.00 L 14.58 1.00 L 12.80 1.05 L 10.44 2.83 L 10.78 2.37 L 11.33 2.37 L 11.84 4.98 L 9.74 5.27 L 11.66 3.67 L 13.96 1.76 L 16.64 1.84 L 15.60 4.17 L 14.49 6.14 L 16.72 6.89 L 15.25 6.64"
      }
    ],
    [
      "path",
      {
        "d": "M 12.65 13.31 L 12.92 10.86 L 14.60 12.30 L 13.53 12.72 L 15.01 12.91 L 17.14 12.15 L 16.86 9.92 L 15.28 6.96 L 18.23 9.79 L 19.93 12.74 L 16.96 11.34 L 19.06 9.62 L 21.79 9.10 L 23.00 7.87 L 23.00 10.81 L 21.72 10.32"
      }
    ]
  ]
};

export const KiloStaple = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.35 4.12 L 13.28 4.14 L 12.46 1.82 L 11.46 1.00 L 10.07 1.00 L 9.63 1.00 L 12.15 3.96 L 12.95 2.76 L 12.87 5.08 L 12.16 5.60 L 14.86 3.23 L 13.64 5.51 L 11.02 4.78 L 12.35 3.75 L 14.64 2.36 L 13.09 5.33 L 15.79 5.05 L 14.34 2.40 L 16.09 1.15 L 17.52 1.00 L 15.23 1.00 L 17.52 1.00 L 14.58 1.00 L 12.80 1.05 L 10.44 2.83 L 10.78 2.37 L 11.33 2.37 L 11.84 4.98 L 9.74 5.27 L 11.66 3.67 L 13.96 1.76 L 16.64 1.84 L 15.60 4.17 L 14.49 6.14 L 16.72 6.89 L 15.25 6.64" />
      <path d="M 12.65 13.31 L 12.92 10.86 L 14.60 12.30 L 13.53 12.72 L 15.01 12.91 L 17.14 12.15 L 16.86 9.92 L 15.28 6.96 L 18.23 9.79 L 19.93 12.74 L 16.96 11.34 L 19.06 9.62 L 21.79 9.10 L 23.00 7.87 L 23.00 10.81 L 21.72 10.32" />
      {children}
    </svg>
  );
});

export default KiloStaple;
