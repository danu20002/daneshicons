import React from 'react';

export const iconData = {
  "id": "VesteSling",
  "name": "VesteSling",
  "category": "XS",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.14 9.31 L 15.51 10.53 L 13.35 13.10 L 12.41 13.76 L 12.07 16.65 L 13.50 14.32 L 11.95 12.19 L 11.02 10.90 L 9.58 12.00 L 7.96 9.38 L 5.05 8.87 L 3.29 9.30 L 2.11 11.80 L 1.00 14.22 L 1.00 15.52 L 1.00 14.89 L 1.37 13.51 L 1.81 12.60 L 3.80 10.72 L 1.00 8.10 L 1.00 6.35 L 1.00 4.09 L 3.99 1.49 L 3.71 1.00 L 2.89 1.00 L 1.00 1.20 L 1.00 3.66 L 1.00 5.13"
      }
    ],
    [
      "path",
      {
        "d": "M 10.69 17.79 L 12.33 17.26 L 13.32 17.42 L 12.32 16.09 L 11.89 13.36 L 13.74 13.75 L 11.11 12.22 L 12.06 14.82 L 10.67 12.64 L 9.77 15.02 L 9.06 16.39 L 9.07 13.95 L 6.08 16.45 L 8.56 13.76 L 11.18 13.74 L 10.54 15.52 L 10.36 17.68 L 10.33 15.91 L 11.64 17.48"
      }
    ]
  ]
};

export const VesteSling = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.14 9.31 L 15.51 10.53 L 13.35 13.10 L 12.41 13.76 L 12.07 16.65 L 13.50 14.32 L 11.95 12.19 L 11.02 10.90 L 9.58 12.00 L 7.96 9.38 L 5.05 8.87 L 3.29 9.30 L 2.11 11.80 L 1.00 14.22 L 1.00 15.52 L 1.00 14.89 L 1.37 13.51 L 1.81 12.60 L 3.80 10.72 L 1.00 8.10 L 1.00 6.35 L 1.00 4.09 L 3.99 1.49 L 3.71 1.00 L 2.89 1.00 L 1.00 1.20 L 1.00 3.66 L 1.00 5.13" />
      <path d="M 10.69 17.79 L 12.33 17.26 L 13.32 17.42 L 12.32 16.09 L 11.89 13.36 L 13.74 13.75 L 11.11 12.22 L 12.06 14.82 L 10.67 12.64 L 9.77 15.02 L 9.06 16.39 L 9.07 13.95 L 6.08 16.45 L 8.56 13.76 L 11.18 13.74 L 10.54 15.52 L 10.36 17.68 L 10.33 15.91 L 11.64 17.48" />
      {children}
    </svg>
  );
});

export default VesteSling;
