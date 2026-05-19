import React from 'react';

export const iconData = {
  "id": "ScannoLimit",
  "name": "ScannoLimit",
  "category": "RD",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.39 3.10 L 10.30 1.68 L 11.52 1.00 L 9.85 1.67 L 10.55 1.00 L 10.27 1.99 L 11.17 3.42 L 10.32 4.30 L 10.48 4.56 L 11.80 7.10 L 11.47 6.37 L 11.08 5.13 L 8.09 5.20 L 5.25 3.88 L 3.10 5.32 L 4.46 3.30 L 1.86 1.25 L 3.09 1.00 L 3.94 3.27 L 3.26 5.69 L 4.72 8.08 L 3.46 8.55"
      }
    ],
    [
      "path",
      {
        "d": "M 17.14 3.48 L 18.74 2.43 L 16.90 1.87 L 17.96 4.14 L 17.66 1.22 L 17.94 1.00 L 15.99 1.00 L 16.10 1.00 L 18.92 1.00 L 20.53 1.00 L 20.81 2.31 L 19.77 4.58 L 21.76 5.44 L 22.07 7.81 L 19.97 5.65 L 20.44 5.27 L 19.25 6.12 L 19.09 4.76 L 21.58 1.92 L 23.00 1.00 L 20.52 1.90 L 22.67 1.00"
      }
    ]
  ]
};

export const ScannoLimit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.39 3.10 L 10.30 1.68 L 11.52 1.00 L 9.85 1.67 L 10.55 1.00 L 10.27 1.99 L 11.17 3.42 L 10.32 4.30 L 10.48 4.56 L 11.80 7.10 L 11.47 6.37 L 11.08 5.13 L 8.09 5.20 L 5.25 3.88 L 3.10 5.32 L 4.46 3.30 L 1.86 1.25 L 3.09 1.00 L 3.94 3.27 L 3.26 5.69 L 4.72 8.08 L 3.46 8.55" />
      <path d="M 17.14 3.48 L 18.74 2.43 L 16.90 1.87 L 17.96 4.14 L 17.66 1.22 L 17.94 1.00 L 15.99 1.00 L 16.10 1.00 L 18.92 1.00 L 20.53 1.00 L 20.81 2.31 L 19.77 4.58 L 21.76 5.44 L 22.07 7.81 L 19.97 5.65 L 20.44 5.27 L 19.25 6.12 L 19.09 4.76 L 21.58 1.92 L 23.00 1.00 L 20.52 1.90 L 22.67 1.00" />
      {children}
    </svg>
  );
});

export default ScannoLimit;
