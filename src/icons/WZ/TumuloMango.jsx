import React from 'react';

export const iconData = {
  "id": "TumuloMango",
  "name": "TumuloMango",
  "category": "WZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.04 15.70 L 16.74 16.74 L 16.03 16.12 L 18.40 16.57 L 18.59 13.65 L 20.06 14.56 L 20.61 12.62 L 20.89 15.07 L 23.00 17.83 L 22.58 17.59 L 20.63 19.26 L 18.21 18.88 L 16.07 19.29 L 15.32 20.93 L 17.16 22.84 L 19.95 22.26 L 22.87 23.00 L 23.00 23.00 L 23.00 20.69 L 23.00 22.12 L 20.82 21.53 L 21.58 22.74 L 22.09 19.98 L 22.84 21.78 L 23.00 21.23 L 20.75 21.85 L 21.14 23.00 L 20.24 20.92 L 23.00 19.30 L 21.35 16.62 L 20.98 17.39 L 18.83 19.65 L 20.09 19.96 L 19.37 20.23"
      }
    ],
    [
      "path",
      {
        "d": "M 5.82 12.02 L 6.79 13.79 L 5.80 16.76 L 5.63 17.66 L 4.50 16.17 L 6.35 16.22 L 4.01 16.64 L 4.69 17.45 L 6.00 18.41 L 6.74 18.65 L 4.53 16.71 L 4.02 19.62 L 4.07 17.29 L 5.14 15.67 L 4.28 14.90 L 5.23 16.62"
      }
    ]
  ]
};

export const TumuloMango = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.04 15.70 L 16.74 16.74 L 16.03 16.12 L 18.40 16.57 L 18.59 13.65 L 20.06 14.56 L 20.61 12.62 L 20.89 15.07 L 23.00 17.83 L 22.58 17.59 L 20.63 19.26 L 18.21 18.88 L 16.07 19.29 L 15.32 20.93 L 17.16 22.84 L 19.95 22.26 L 22.87 23.00 L 23.00 23.00 L 23.00 20.69 L 23.00 22.12 L 20.82 21.53 L 21.58 22.74 L 22.09 19.98 L 22.84 21.78 L 23.00 21.23 L 20.75 21.85 L 21.14 23.00 L 20.24 20.92 L 23.00 19.30 L 21.35 16.62 L 20.98 17.39 L 18.83 19.65 L 20.09 19.96 L 19.37 20.23" />
      <path d="M 5.82 12.02 L 6.79 13.79 L 5.80 16.76 L 5.63 17.66 L 4.50 16.17 L 6.35 16.22 L 4.01 16.64 L 4.69 17.45 L 6.00 18.41 L 6.74 18.65 L 4.53 16.71 L 4.02 19.62 L 4.07 17.29 L 5.14 15.67 L 4.28 14.90 L 5.23 16.62" />
      {children}
    </svg>
  );
});

export default TumuloMango;
