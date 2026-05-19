import React from 'react';

export const iconData = {
  "id": "PlexiExpert",
  "name": "PlexiExpert",
  "category": "ES",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.57 18.17 L 7.83 20.31 L 5.06 17.97 L 4.53 18.53 L 5.32 18.29 L 5.08 15.87 L 3.38 18.50 L 2.78 17.02 L 3.60 19.20 L 4.49 20.79 L 2.46 19.46 L 4.53 20.89 L 5.43 19.33 L 7.79 16.50 L 9.53 16.83 L 7.98 17.83 L 5.60 19.79 L 2.77 19.48 L 1.63 22.35 L 1.00 23.00 L 1.74 23.00 L 1.00 20.49 L 1.00 20.83"
      }
    ],
    [
      "path",
      {
        "d": "M 4.24 17.25 L 4.25 19.10 L 4.96 16.13 L 3.00 17.03 L 3.59 14.56 L 1.48 13.90 L 1.27 14.66 L 2.43 14.93 L 2.17 13.87 L 4.79 12.71 L 6.46 10.39 L 6.12 7.98 L 5.11 7.72 L 6.95 8.71 L 7.85 11.63 L 5.57 13.01 L 5.55 15.81 L 3.88 16.17 L 4.03 15.92 L 1.74 16.86 L 1.00 13.93"
      }
    ]
  ]
};

export const PlexiExpert = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.57 18.17 L 7.83 20.31 L 5.06 17.97 L 4.53 18.53 L 5.32 18.29 L 5.08 15.87 L 3.38 18.50 L 2.78 17.02 L 3.60 19.20 L 4.49 20.79 L 2.46 19.46 L 4.53 20.89 L 5.43 19.33 L 7.79 16.50 L 9.53 16.83 L 7.98 17.83 L 5.60 19.79 L 2.77 19.48 L 1.63 22.35 L 1.00 23.00 L 1.74 23.00 L 1.00 20.49 L 1.00 20.83" />
      <path d="M 4.24 17.25 L 4.25 19.10 L 4.96 16.13 L 3.00 17.03 L 3.59 14.56 L 1.48 13.90 L 1.27 14.66 L 2.43 14.93 L 2.17 13.87 L 4.79 12.71 L 6.46 10.39 L 6.12 7.98 L 5.11 7.72 L 6.95 8.71 L 7.85 11.63 L 5.57 13.01 L 5.55 15.81 L 3.88 16.17 L 4.03 15.92 L 1.74 16.86 L 1.00 13.93" />
      {children}
    </svg>
  );
});

export default PlexiExpert;
