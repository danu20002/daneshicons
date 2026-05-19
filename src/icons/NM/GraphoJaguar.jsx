import React from 'react';

export const iconData = {
  "id": "GraphoJaguar",
  "name": "GraphoJaguar",
  "category": "NM",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.70 3.71 L 7.30 2.76 L 4.59 4.15 L 2.75 4.24 L 1.73 6.26 L 1.00 8.14 L 1.00 6.63 L 1.00 8.84 L 1.00 8.52 L 1.00 8.51 L 1.00 7.36 L 1.85 4.82 L 1.19 6.46 L 3.92 6.36 L 1.34 7.54 L 1.00 6.69 L 1.32 7.79 L 2.56 5.95 L 2.05 5.90 L 1.00 7.35 L 1.00 7.11 L 3.90 6.60 L 2.06 5.64 L 4.86 5.66 L 6.39 4.98 L 4.77 7.71 L 2.03 5.98 L 4.57 4.26 L 4.12 3.60"
      }
    ],
    [
      "path",
      {
        "d": "M 9.07 9.03 L 6.87 11.32 L 4.58 11.98 L 6.08 14.41 L 4.70 15.85 L 6.39 17.57 L 6.85 19.70 L 4.54 19.00 L 6.19 16.31 L 5.44 19.01 L 3.59 18.40 L 2.78 18.12 L 4.67 16.13 L 4.65 15.16 L 3.39 14.29 L 2.59 13.35 L 1.00 11.64 L 2.31 10.55 L 1.00 8.15"
      }
    ]
  ]
};

export const GraphoJaguar = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.70 3.71 L 7.30 2.76 L 4.59 4.15 L 2.75 4.24 L 1.73 6.26 L 1.00 8.14 L 1.00 6.63 L 1.00 8.84 L 1.00 8.52 L 1.00 8.51 L 1.00 7.36 L 1.85 4.82 L 1.19 6.46 L 3.92 6.36 L 1.34 7.54 L 1.00 6.69 L 1.32 7.79 L 2.56 5.95 L 2.05 5.90 L 1.00 7.35 L 1.00 7.11 L 3.90 6.60 L 2.06 5.64 L 4.86 5.66 L 6.39 4.98 L 4.77 7.71 L 2.03 5.98 L 4.57 4.26 L 4.12 3.60" />
      <path d="M 9.07 9.03 L 6.87 11.32 L 4.58 11.98 L 6.08 14.41 L 4.70 15.85 L 6.39 17.57 L 6.85 19.70 L 4.54 19.00 L 6.19 16.31 L 5.44 19.01 L 3.59 18.40 L 2.78 18.12 L 4.67 16.13 L 4.65 15.16 L 3.39 14.29 L 2.59 13.35 L 1.00 11.64 L 2.31 10.55 L 1.00 8.15" />
      {children}
    </svg>
  );
});

export default GraphoJaguar;
