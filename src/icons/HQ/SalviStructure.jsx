import React from 'react';

export const iconData = {
  "id": "SalviStructure",
  "name": "SalviStructure",
  "category": "HQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.45 11.73 L 17.05 13.01 L 17.84 14.82 L 18.67 17.60 L 17.77 14.74 L 20.34 17.65 L 19.18 18.71 L 20.10 21.14 L 22.28 23.00 L 23.00 21.57 L 23.00 23.00 L 23.00 21.60 L 21.81 19.80 L 19.85 22.10 L 20.59 22.21 L 23.00 23.00 L 23.00 23.00 L 23.00 21.13 L 22.15 20.06 L 21.72 19.34 L 20.12 20.84 L 21.81 19.80 L 21.65 18.08"
      }
    ],
    [
      "path",
      {
        "d": "M 19.51 13.13 L 17.82 12.35 L 20.82 14.58 L 22.76 16.06 L 23.00 16.07 L 20.74 14.90 L 19.64 12.94 L 20.10 13.56 L 18.77 14.57 L 21.05 13.25 L 18.52 14.24 L 16.08 15.78 L 16.19 17.82 L 17.15 20.04 L 18.62 22.34 L 16.71 19.90 L 17.33 19.56 L 16.21 21.61 L 13.37 20.04 L 15.92 17.88 L 16.79 19.14 L 18.47 21.39"
      }
    ]
  ]
};

export const SalviStructure = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.45 11.73 L 17.05 13.01 L 17.84 14.82 L 18.67 17.60 L 17.77 14.74 L 20.34 17.65 L 19.18 18.71 L 20.10 21.14 L 22.28 23.00 L 23.00 21.57 L 23.00 23.00 L 23.00 21.60 L 21.81 19.80 L 19.85 22.10 L 20.59 22.21 L 23.00 23.00 L 23.00 23.00 L 23.00 21.13 L 22.15 20.06 L 21.72 19.34 L 20.12 20.84 L 21.81 19.80 L 21.65 18.08" />
      <path d="M 19.51 13.13 L 17.82 12.35 L 20.82 14.58 L 22.76 16.06 L 23.00 16.07 L 20.74 14.90 L 19.64 12.94 L 20.10 13.56 L 18.77 14.57 L 21.05 13.25 L 18.52 14.24 L 16.08 15.78 L 16.19 17.82 L 17.15 20.04 L 18.62 22.34 L 16.71 19.90 L 17.33 19.56 L 16.21 21.61 L 13.37 20.04 L 15.92 17.88 L 16.79 19.14 L 18.47 21.39" />
      {children}
    </svg>
  );
});

export default SalviStructure;
