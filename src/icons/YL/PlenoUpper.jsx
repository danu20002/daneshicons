import React from 'react';

export const iconData = {
  "id": "PlenoUpper",
  "name": "PlenoUpper",
  "category": "YL",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.80 13.59 L 17.05 11.53 L 15.20 11.28 L 15.45 8.61 L 13.99 7.80 L 15.50 6.81 L 16.15 6.63 L 15.73 6.22 L 17.48 8.95 L 14.69 8.79 L 16.69 10.71 L 16.29 9.47 L 17.12 11.10 L 14.14 11.52 L 12.13 13.30 L 13.19 13.03 L 11.85 12.62 L 13.09 11.85 L 12.90 9.69 L 12.32 11.71 L 13.41 13.94 L 15.13 15.00 L 16.15 15.74 L 16.87 16.42 L 17.60 17.49 L 15.75 20.46 L 13.82 18.61 L 11.76 20.44 L 12.96 23.00 L 15.68 20.26 L 18.58 21.96 L 18.93 20.97"
      }
    ]
  ]
};

export const PlenoUpper = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.80 13.59 L 17.05 11.53 L 15.20 11.28 L 15.45 8.61 L 13.99 7.80 L 15.50 6.81 L 16.15 6.63 L 15.73 6.22 L 17.48 8.95 L 14.69 8.79 L 16.69 10.71 L 16.29 9.47 L 17.12 11.10 L 14.14 11.52 L 12.13 13.30 L 13.19 13.03 L 11.85 12.62 L 13.09 11.85 L 12.90 9.69 L 12.32 11.71 L 13.41 13.94 L 15.13 15.00 L 16.15 15.74 L 16.87 16.42 L 17.60 17.49 L 15.75 20.46 L 13.82 18.61 L 11.76 20.44 L 12.96 23.00 L 15.68 20.26 L 18.58 21.96 L 18.93 20.97" />
      {children}
    </svg>
  );
});

export default PlenoUpper;
