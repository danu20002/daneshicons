import React from 'react';

export const iconData = {
  "id": "TaphoCauldron",
  "name": "TaphoCauldron",
  "category": "MA",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.64 4.00 L 6.84 1.45 L 4.32 3.28 L 3.61 5.51 L 5.07 5.02 L 4.34 6.79 L 7.03 9.76 L 4.12 9.31 L 1.92 10.72 L 1.21 12.14 L 2.80 14.87 L 2.56 12.14 L 1.00 13.82 L 1.00 13.97 L 3.22 11.80 L 1.12 11.55 L 3.02 8.80 L 4.29 8.75 L 4.41 10.80 L 4.62 11.40 L 6.88 11.51 L 6.50 8.55"
      }
    ],
    [
      "path",
      {
        "d": "M 16.12 10.27 L 18.67 11.02 L 20.03 13.63 L 17.22 10.74 L 19.29 11.06 L 19.39 9.28 L 17.98 8.81 L 19.20 8.96 L 21.30 7.31 L 23.00 5.84 L 23.00 4.46 L 21.12 6.43 L 20.07 9.35 L 20.09 8.00 L 22.23 5.42 L 23.00 2.75 L 23.00 1.24 L 20.65 2.78 L 18.92 2.90 L 16.39 5.46 L 13.85 3.73 L 14.13 3.67 L 12.97 6.25 L 14.68 4.36 L 17.31 6.24 L 14.37 5.19 L 12.69 4.02 L 10.90 1.86 L 11.49 1.00 L 12.12 1.00 L 14.05 2.48 L 15.21 2.81 L 12.24 5.28 L 14.78 7.41 L 14.25 8.00"
      }
    ]
  ]
};

export const TaphoCauldron = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.64 4.00 L 6.84 1.45 L 4.32 3.28 L 3.61 5.51 L 5.07 5.02 L 4.34 6.79 L 7.03 9.76 L 4.12 9.31 L 1.92 10.72 L 1.21 12.14 L 2.80 14.87 L 2.56 12.14 L 1.00 13.82 L 1.00 13.97 L 3.22 11.80 L 1.12 11.55 L 3.02 8.80 L 4.29 8.75 L 4.41 10.80 L 4.62 11.40 L 6.88 11.51 L 6.50 8.55" />
      <path d="M 16.12 10.27 L 18.67 11.02 L 20.03 13.63 L 17.22 10.74 L 19.29 11.06 L 19.39 9.28 L 17.98 8.81 L 19.20 8.96 L 21.30 7.31 L 23.00 5.84 L 23.00 4.46 L 21.12 6.43 L 20.07 9.35 L 20.09 8.00 L 22.23 5.42 L 23.00 2.75 L 23.00 1.24 L 20.65 2.78 L 18.92 2.90 L 16.39 5.46 L 13.85 3.73 L 14.13 3.67 L 12.97 6.25 L 14.68 4.36 L 17.31 6.24 L 14.37 5.19 L 12.69 4.02 L 10.90 1.86 L 11.49 1.00 L 12.12 1.00 L 14.05 2.48 L 15.21 2.81 L 12.24 5.28 L 14.78 7.41 L 14.25 8.00" />
      {children}
    </svg>
  );
});

export default TaphoCauldron;
