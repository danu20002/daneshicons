import React from 'react';

export const iconData = {
  "id": "ScannoCrest",
  "name": "ScannoCrest",
  "category": "MA",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.46 12.31 L 22.15 10.97 L 20.56 10.57 L 22.15 12.01 L 19.56 9.31 L 20.25 7.07 L 18.83 8.35 L 19.55 7.39 L 19.54 6.74 L 17.95 5.86 L 20.85 8.33 L 20.48 8.43 L 22.77 6.15 L 21.45 3.67 L 20.30 4.70 L 17.66 5.46 L 14.85 8.33 L 13.61 6.51 L 12.65 4.19 L 12.66 6.33 L 11.94 6.43 L 13.69 3.83 L 12.16 1.56 L 13.11 1.00 L 11.79 1.00 L 12.06 3.45 L 12.36 3.90 L 13.87 3.29 L 14.21 5.11 L 14.76 6.44 L 16.74 5.28 L 19.34 6.82"
      }
    ],
    [
      "path",
      {
        "d": "M 9.80 7.94 L 11.06 10.65 L 8.51 7.75 L 9.71 6.87 L 8.12 8.02 L 6.26 10.26 L 5.84 10.96 L 4.96 12.33 L 5.98 11.93 L 5.90 12.96 L 4.96 10.52 L 5.70 9.23 L 3.11 7.05 L 4.05 6.78 L 6.27 8.24 L 5.15 6.28 L 5.22 6.43 L 6.31 5.93 L 8.72 6.52 L 10.90 6.12 L 9.07 5.15"
      }
    ]
  ]
};

export const ScannoCrest = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.46 12.31 L 22.15 10.97 L 20.56 10.57 L 22.15 12.01 L 19.56 9.31 L 20.25 7.07 L 18.83 8.35 L 19.55 7.39 L 19.54 6.74 L 17.95 5.86 L 20.85 8.33 L 20.48 8.43 L 22.77 6.15 L 21.45 3.67 L 20.30 4.70 L 17.66 5.46 L 14.85 8.33 L 13.61 6.51 L 12.65 4.19 L 12.66 6.33 L 11.94 6.43 L 13.69 3.83 L 12.16 1.56 L 13.11 1.00 L 11.79 1.00 L 12.06 3.45 L 12.36 3.90 L 13.87 3.29 L 14.21 5.11 L 14.76 6.44 L 16.74 5.28 L 19.34 6.82" />
      <path d="M 9.80 7.94 L 11.06 10.65 L 8.51 7.75 L 9.71 6.87 L 8.12 8.02 L 6.26 10.26 L 5.84 10.96 L 4.96 12.33 L 5.98 11.93 L 5.90 12.96 L 4.96 10.52 L 5.70 9.23 L 3.11 7.05 L 4.05 6.78 L 6.27 8.24 L 5.15 6.28 L 5.22 6.43 L 6.31 5.93 L 8.72 6.52 L 10.90 6.12 L 9.07 5.15" />
      {children}
    </svg>
  );
});

export default ScannoCrest;
