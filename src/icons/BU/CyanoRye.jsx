import React from 'react';

export const iconData = {
  "id": "CyanoRye",
  "name": "CyanoRye",
  "category": "BU",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.40 5.53 L 5.13 5.62 L 3.20 3.80 L 2.95 5.23 L 4.84 8.21 L 7.21 6.36 L 4.47 8.78 L 7.27 6.70 L 9.87 3.73 L 10.15 3.94 L 10.60 3.72 L 12.03 3.05 L 11.51 1.00 L 10.02 3.53 L 9.69 3.83 L 11.15 3.31 L 13.55 3.74 L 12.62 5.61 L 10.16 6.70 L 11.12 4.63 L 13.18 2.88 L 13.03 1.00 L 14.78 1.00 L 13.18 1.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.88 14.89 L 8.76 14.23 L 8.35 16.58 L 8.46 17.87 L 7.96 15.78 L 6.82 13.12 L 4.36 11.47 L 6.25 9.05 L 8.80 8.18 L 10.53 10.17 L 8.28 8.29 L 8.04 10.06 L 8.57 9.29 L 7.88 9.60 L 10.02 7.45 L 10.32 6.73 L 9.45 8.33 L 10.06 8.78 L 12.18 9.71 L 9.24 10.78 L 6.30 8.20 L 9.21 9.34 L 9.33 10.98 L 8.34 10.25 L 8.01 9.89 L 10.28 9.67 L 7.75 7.69 L 10.10 10.00 L 8.15 8.25"
      }
    ]
  ]
};

export const CyanoRye = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.40 5.53 L 5.13 5.62 L 3.20 3.80 L 2.95 5.23 L 4.84 8.21 L 7.21 6.36 L 4.47 8.78 L 7.27 6.70 L 9.87 3.73 L 10.15 3.94 L 10.60 3.72 L 12.03 3.05 L 11.51 1.00 L 10.02 3.53 L 9.69 3.83 L 11.15 3.31 L 13.55 3.74 L 12.62 5.61 L 10.16 6.70 L 11.12 4.63 L 13.18 2.88 L 13.03 1.00 L 14.78 1.00 L 13.18 1.00" />
      <path d="M 5.88 14.89 L 8.76 14.23 L 8.35 16.58 L 8.46 17.87 L 7.96 15.78 L 6.82 13.12 L 4.36 11.47 L 6.25 9.05 L 8.80 8.18 L 10.53 10.17 L 8.28 8.29 L 8.04 10.06 L 8.57 9.29 L 7.88 9.60 L 10.02 7.45 L 10.32 6.73 L 9.45 8.33 L 10.06 8.78 L 12.18 9.71 L 9.24 10.78 L 6.30 8.20 L 9.21 9.34 L 9.33 10.98 L 8.34 10.25 L 8.01 9.89 L 10.28 9.67 L 7.75 7.69 L 10.10 10.00 L 8.15 8.25" />
      {children}
    </svg>
  );
});

export default CyanoRye;
