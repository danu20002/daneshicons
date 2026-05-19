import React from 'react';

export const iconData = {
  "id": "DracoCrater",
  "name": "DracoCrater",
  "category": "RW",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.80 13.29 L 15.78 15.58 L 15.39 15.78 L 16.86 17.09 L 15.66 15.64 L 16.99 13.04 L 19.18 13.79 L 18.48 15.30 L 20.21 13.25 L 20.86 14.40 L 22.09 16.66 L 23.00 14.90 L 23.00 17.40 L 22.08 16.98 L 21.61 18.75 L 20.15 18.08 L 18.95 16.17 L 17.04 15.46"
      }
    ],
    [
      "path",
      {
        "d": "M 8.76 7.67 L 7.62 10.49 L 7.29 9.25 L 8.59 8.10 L 9.24 6.04 L 10.39 5.60 L 10.51 5.56 L 9.05 3.14 L 10.27 1.00 L 11.01 1.00 L 13.46 1.81 L 15.42 1.00 L 18.34 1.00 L 15.81 1.00 L 15.98 1.00 L 16.62 1.00 L 14.90 1.00 L 12.97 1.00 L 14.89 2.98 L 17.44 5.91 L 20.34 5.32 L 21.02 5.21 L 18.87 7.04 L 20.70 5.61 L 19.97 3.02 L 19.37 1.93 L 22.17 1.00 L 21.48 2.28 L 22.19 2.19 L 23.00 2.67 L 23.00 1.00 L 23.00 1.00 L 23.00 1.00 L 21.83 1.00"
      }
    ]
  ]
};

export const DracoCrater = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.80 13.29 L 15.78 15.58 L 15.39 15.78 L 16.86 17.09 L 15.66 15.64 L 16.99 13.04 L 19.18 13.79 L 18.48 15.30 L 20.21 13.25 L 20.86 14.40 L 22.09 16.66 L 23.00 14.90 L 23.00 17.40 L 22.08 16.98 L 21.61 18.75 L 20.15 18.08 L 18.95 16.17 L 17.04 15.46" />
      <path d="M 8.76 7.67 L 7.62 10.49 L 7.29 9.25 L 8.59 8.10 L 9.24 6.04 L 10.39 5.60 L 10.51 5.56 L 9.05 3.14 L 10.27 1.00 L 11.01 1.00 L 13.46 1.81 L 15.42 1.00 L 18.34 1.00 L 15.81 1.00 L 15.98 1.00 L 16.62 1.00 L 14.90 1.00 L 12.97 1.00 L 14.89 2.98 L 17.44 5.91 L 20.34 5.32 L 21.02 5.21 L 18.87 7.04 L 20.70 5.61 L 19.97 3.02 L 19.37 1.93 L 22.17 1.00 L 21.48 2.28 L 22.19 2.19 L 23.00 2.67 L 23.00 1.00 L 23.00 1.00 L 23.00 1.00 L 21.83 1.00" />
      {children}
    </svg>
  );
});

export default DracoCrater;
