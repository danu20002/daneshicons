import React from 'react';

export const iconData = {
  "id": "ValoreRide",
  "name": "ValoreRide",
  "category": "UU",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.55 21.00 L 12.52 19.49 L 14.39 19.63 L 13.19 22.35 L 12.68 23.00 L 14.82 23.00 L 12.35 23.00 L 10.40 23.00 L 9.47 23.00 L 12.40 23.00 L 14.62 20.95 L 15.51 18.10 L 16.24 18.92 L 17.86 16.23 L 20.45 14.60 L 22.89 12.03 L 20.15 13.35 L 23.00 12.70"
      }
    ],
    [
      "path",
      {
        "d": "M 5.98 14.79 L 6.82 12.12 L 6.89 11.64 L 8.45 13.42 L 8.88 15.82 L 8.44 15.54 L 8.43 14.02 L 6.17 15.52 L 4.26 18.09 L 1.76 20.16 L 3.67 19.21 L 1.00 21.74 L 3.20 23.00 L 3.52 23.00 L 4.71 23.00 L 6.01 23.00 L 6.69 23.00 L 4.40 20.26 L 3.79 20.16 L 4.74 23.00"
      }
    ]
  ]
};

export const ValoreRide = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.55 21.00 L 12.52 19.49 L 14.39 19.63 L 13.19 22.35 L 12.68 23.00 L 14.82 23.00 L 12.35 23.00 L 10.40 23.00 L 9.47 23.00 L 12.40 23.00 L 14.62 20.95 L 15.51 18.10 L 16.24 18.92 L 17.86 16.23 L 20.45 14.60 L 22.89 12.03 L 20.15 13.35 L 23.00 12.70" />
      <path d="M 5.98 14.79 L 6.82 12.12 L 6.89 11.64 L 8.45 13.42 L 8.88 15.82 L 8.44 15.54 L 8.43 14.02 L 6.17 15.52 L 4.26 18.09 L 1.76 20.16 L 3.67 19.21 L 1.00 21.74 L 3.20 23.00 L 3.52 23.00 L 4.71 23.00 L 6.01 23.00 L 6.69 23.00 L 4.40 20.26 L 3.79 20.16 L 4.74 23.00" />
      {children}
    </svg>
  );
});

export default ValoreRide;
