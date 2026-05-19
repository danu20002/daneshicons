import React from 'react';

export const iconData = {
  "id": "PhantoFancy",
  "name": "PhantoFancy",
  "category": "KO",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.16 5.42 L 18.26 6.76 L 18.97 7.45 L 17.45 6.90 L 14.89 8.47 L 12.07 7.90 L 11.74 6.69 L 12.60 8.62 L 12.74 10.12 L 13.49 8.66 L 14.02 7.93 L 13.39 9.97 L 11.75 9.93 L 10.15 11.74 L 9.41 14.59 L 10.49 17.48 L 9.17 15.40 L 7.34 14.33"
      }
    ],
    [
      "path",
      {
        "d": "M 3.78 8.43 L 5.54 7.70 L 3.28 10.26 L 3.96 7.66 L 1.85 9.82 L 1.00 9.79 L 1.00 8.39 L 1.00 7.90 L 2.88 6.85 L 1.95 9.43 L 1.00 10.52 L 1.00 12.79 L 1.20 14.62 L 1.00 16.32 L 1.95 16.45 L 2.04 17.68 L 2.65 16.66 L 5.23 17.66 L 5.36 15.38 L 3.83 16.83 L 3.25 17.67"
      }
    ]
  ]
};

export const PhantoFancy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.16 5.42 L 18.26 6.76 L 18.97 7.45 L 17.45 6.90 L 14.89 8.47 L 12.07 7.90 L 11.74 6.69 L 12.60 8.62 L 12.74 10.12 L 13.49 8.66 L 14.02 7.93 L 13.39 9.97 L 11.75 9.93 L 10.15 11.74 L 9.41 14.59 L 10.49 17.48 L 9.17 15.40 L 7.34 14.33" />
      <path d="M 3.78 8.43 L 5.54 7.70 L 3.28 10.26 L 3.96 7.66 L 1.85 9.82 L 1.00 9.79 L 1.00 8.39 L 1.00 7.90 L 2.88 6.85 L 1.95 9.43 L 1.00 10.52 L 1.00 12.79 L 1.20 14.62 L 1.00 16.32 L 1.95 16.45 L 2.04 17.68 L 2.65 16.66 L 5.23 17.66 L 5.36 15.38 L 3.83 16.83 L 3.25 17.67" />
      {children}
    </svg>
  );
});

export default PhantoFancy;
