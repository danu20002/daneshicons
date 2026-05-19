import React from 'react';

export const iconData = {
  "id": "MegaPilot",
  "name": "MegaPilot",
  "category": "BU",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.33 3.88 L 8.47 2.67 L 8.39 1.00 L 5.71 2.80 L 6.52 4.36 L 7.36 1.59 L 7.01 2.12 L 6.93 4.44 L 7.42 7.26 L 4.42 7.09 L 4.84 9.30 L 5.73 8.12 L 8.44 9.97 L 8.80 9.49 L 6.54 10.74 L 4.36 9.20 L 6.19 8.20 L 5.44 9.13 L 7.15 10.18 L 6.55 8.31 L 9.52 9.52 L 8.75 10.02 L 8.52 11.02 L 10.83 13.31 L 9.43 12.18 L 9.22 9.88 L 7.97 11.09 L 7.48 10.30 L 6.32 9.70"
      }
    ],
    [
      "path",
      {
        "d": "M 9.14 3.25 L 6.88 2.56 L 7.33 4.25 L 9.42 3.49 L 7.06 1.13 L 8.79 2.94 L 11.56 4.17 L 14.45 1.27 L 14.79 2.66 L 17.01 3.63 L 17.94 3.49 L 17.56 5.50 L 19.00 7.26 L 16.02 7.20 L 14.97 9.14 L 17.63 11.02 L 16.44 9.58 L 15.46 9.09 L 17.45 11.29 L 16.61 8.51 L 15.99 9.76 L 13.37 10.11 L 13.44 10.73 L 12.48 11.87"
      }
    ]
  ]
};

export const MegaPilot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.33 3.88 L 8.47 2.67 L 8.39 1.00 L 5.71 2.80 L 6.52 4.36 L 7.36 1.59 L 7.01 2.12 L 6.93 4.44 L 7.42 7.26 L 4.42 7.09 L 4.84 9.30 L 5.73 8.12 L 8.44 9.97 L 8.80 9.49 L 6.54 10.74 L 4.36 9.20 L 6.19 8.20 L 5.44 9.13 L 7.15 10.18 L 6.55 8.31 L 9.52 9.52 L 8.75 10.02 L 8.52 11.02 L 10.83 13.31 L 9.43 12.18 L 9.22 9.88 L 7.97 11.09 L 7.48 10.30 L 6.32 9.70" />
      <path d="M 9.14 3.25 L 6.88 2.56 L 7.33 4.25 L 9.42 3.49 L 7.06 1.13 L 8.79 2.94 L 11.56 4.17 L 14.45 1.27 L 14.79 2.66 L 17.01 3.63 L 17.94 3.49 L 17.56 5.50 L 19.00 7.26 L 16.02 7.20 L 14.97 9.14 L 17.63 11.02 L 16.44 9.58 L 15.46 9.09 L 17.45 11.29 L 16.61 8.51 L 15.99 9.76 L 13.37 10.11 L 13.44 10.73 L 12.48 11.87" />
      {children}
    </svg>
  );
});

export default MegaPilot;
