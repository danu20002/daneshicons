import React from 'react';

export const iconData = {
  "id": "VassalloFederation",
  "name": "VassalloFederation",
  "category": "RD",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.27 5.06 L 19.72 3.40 L 20.70 3.05 L 17.92 1.91 L 15.38 3.37 L 14.25 1.01 L 16.78 2.89 L 15.33 1.63 L 13.17 1.00 L 13.53 2.39 L 15.95 4.71 L 13.99 6.82 L 11.68 3.91 L 13.42 4.59 L 13.81 2.44 L 16.27 3.68 L 18.62 2.76 L 18.53 1.00 L 17.18 2.83"
      }
    ],
    [
      "path",
      {
        "d": "M 9.51 3.70 L 12.33 3.08 L 11.48 1.13 L 11.27 1.00 L 10.28 1.00 L 9.28 2.77 L 6.76 3.30 L 8.83 3.67 L 8.33 2.36 L 9.30 2.86 L 11.05 5.28 L 13.58 7.70 L 11.79 10.23 L 9.09 8.20 L 10.09 11.16 L 12.79 13.26 L 14.74 11.94 L 12.67 12.83 L 15.61 9.89 L 16.41 10.65 L 13.81 8.71 L 16.55 8.98 L 13.60 6.18 L 12.20 7.90 L 15.14 5.17"
      }
    ]
  ]
};

export const VassalloFederation = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.27 5.06 L 19.72 3.40 L 20.70 3.05 L 17.92 1.91 L 15.38 3.37 L 14.25 1.01 L 16.78 2.89 L 15.33 1.63 L 13.17 1.00 L 13.53 2.39 L 15.95 4.71 L 13.99 6.82 L 11.68 3.91 L 13.42 4.59 L 13.81 2.44 L 16.27 3.68 L 18.62 2.76 L 18.53 1.00 L 17.18 2.83" />
      <path d="M 9.51 3.70 L 12.33 3.08 L 11.48 1.13 L 11.27 1.00 L 10.28 1.00 L 9.28 2.77 L 6.76 3.30 L 8.83 3.67 L 8.33 2.36 L 9.30 2.86 L 11.05 5.28 L 13.58 7.70 L 11.79 10.23 L 9.09 8.20 L 10.09 11.16 L 12.79 13.26 L 14.74 11.94 L 12.67 12.83 L 15.61 9.89 L 16.41 10.65 L 13.81 8.71 L 16.55 8.98 L 13.60 6.18 L 12.20 7.90 L 15.14 5.17" />
      {children}
    </svg>
  );
});

export default VassalloFederation;
