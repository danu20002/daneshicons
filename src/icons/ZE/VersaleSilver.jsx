import React from 'react';

export const iconData = {
  "id": "VersaleSilver",
  "name": "VersaleSilver",
  "category": "ZE",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.97 6.28 L 8.42 9.12 L 5.50 12.03 L 5.89 10.38 L 6.96 8.36 L 8.34 6.31 L 7.04 8.22 L 5.57 5.49 L 4.15 7.82 L 2.08 9.36 L 1.44 10.24 L 3.96 8.84 L 4.27 8.14 L 5.88 7.55 L 4.78 6.49 L 3.97 6.03 L 1.80 5.10 L 2.54 4.72 L 3.82 5.63 L 1.03 4.05 L 2.34 4.53 L 3.59 7.49 L 4.93 10.07 L 6.88 10.63 L 8.25 12.61"
      }
    ],
    [
      "path",
      {
        "d": "M 8.99 5.47 L 11.51 8.37 L 11.08 5.52 L 10.47 8.42 L 12.95 9.66 L 11.21 11.07 L 12.97 10.99 L 11.64 12.74 L 13.33 12.76 L 14.72 11.53 L 15.75 13.00 L 15.73 10.44 L 13.23 12.13 L 13.72 11.87 L 14.17 11.09 L 16.25 12.56 L 14.76 12.34 L 12.62 14.86 L 13.99 14.30 L 16.96 15.36 L 17.34 12.48 L 15.65 10.13 L 13.70 12.49"
      }
    ]
  ]
};

export const VersaleSilver = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.97 6.28 L 8.42 9.12 L 5.50 12.03 L 5.89 10.38 L 6.96 8.36 L 8.34 6.31 L 7.04 8.22 L 5.57 5.49 L 4.15 7.82 L 2.08 9.36 L 1.44 10.24 L 3.96 8.84 L 4.27 8.14 L 5.88 7.55 L 4.78 6.49 L 3.97 6.03 L 1.80 5.10 L 2.54 4.72 L 3.82 5.63 L 1.03 4.05 L 2.34 4.53 L 3.59 7.49 L 4.93 10.07 L 6.88 10.63 L 8.25 12.61" />
      <path d="M 8.99 5.47 L 11.51 8.37 L 11.08 5.52 L 10.47 8.42 L 12.95 9.66 L 11.21 11.07 L 12.97 10.99 L 11.64 12.74 L 13.33 12.76 L 14.72 11.53 L 15.75 13.00 L 15.73 10.44 L 13.23 12.13 L 13.72 11.87 L 14.17 11.09 L 16.25 12.56 L 14.76 12.34 L 12.62 14.86 L 13.99 14.30 L 16.96 15.36 L 17.34 12.48 L 15.65 10.13 L 13.70 12.49" />
      {children}
    </svg>
  );
});

export default VersaleSilver;
