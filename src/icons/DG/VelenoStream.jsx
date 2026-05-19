import React from 'react';

export const iconData = {
  "id": "VelenoStream",
  "name": "VelenoStream",
  "category": "DG",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.44 15.82 L 1.45 14.16 L 1.00 11.41 L 1.00 11.71 L 2.38 9.60 L 2.96 7.69 L 5.50 5.99 L 3.91 5.27 L 1.40 7.69 L 2.17 8.35 L 4.09 8.48 L 5.35 9.71 L 7.67 10.11 L 7.80 8.14 L 9.34 8.75 L 8.25 7.94 L 6.81 9.55 L 8.90 8.09 L 8.91 8.98 L 8.54 11.88 L 7.30 12.50 L 5.58 14.17 L 4.30 14.75 L 6.59 17.15 L 3.98 18.94 L 1.83 18.09 L 4.30 19.86 L 5.76 17.04 L 5.80 16.63"
      }
    ],
    [
      "path",
      {
        "d": "M 4.29 13.83 L 2.96 12.02 L 3.99 11.88 L 2.11 12.21 L 3.13 9.72 L 2.12 9.03 L 1.00 10.13 L 1.86 11.43 L 1.00 12.91 L 1.00 13.26 L 1.00 12.99 L 2.52 14.35 L 4.58 13.84 L 2.96 14.74 L 2.04 11.98 L 2.24 11.55 L 2.61 13.72 L 2.40 11.98 L 1.00 13.12 L 1.38 13.18 L 3.93 12.43 L 5.27 9.97 L 7.65 11.16 L 10.43 8.39 L 10.83 9.57 L 12.57 10.44 L 9.69 13.37 L 9.62 11.90 L 11.70 10.32"
      }
    ]
  ]
};

export const VelenoStream = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.44 15.82 L 1.45 14.16 L 1.00 11.41 L 1.00 11.71 L 2.38 9.60 L 2.96 7.69 L 5.50 5.99 L 3.91 5.27 L 1.40 7.69 L 2.17 8.35 L 4.09 8.48 L 5.35 9.71 L 7.67 10.11 L 7.80 8.14 L 9.34 8.75 L 8.25 7.94 L 6.81 9.55 L 8.90 8.09 L 8.91 8.98 L 8.54 11.88 L 7.30 12.50 L 5.58 14.17 L 4.30 14.75 L 6.59 17.15 L 3.98 18.94 L 1.83 18.09 L 4.30 19.86 L 5.76 17.04 L 5.80 16.63" />
      <path d="M 4.29 13.83 L 2.96 12.02 L 3.99 11.88 L 2.11 12.21 L 3.13 9.72 L 2.12 9.03 L 1.00 10.13 L 1.86 11.43 L 1.00 12.91 L 1.00 13.26 L 1.00 12.99 L 2.52 14.35 L 4.58 13.84 L 2.96 14.74 L 2.04 11.98 L 2.24 11.55 L 2.61 13.72 L 2.40 11.98 L 1.00 13.12 L 1.38 13.18 L 3.93 12.43 L 5.27 9.97 L 7.65 11.16 L 10.43 8.39 L 10.83 9.57 L 12.57 10.44 L 9.69 13.37 L 9.62 11.90 L 11.70 10.32" />
      {children}
    </svg>
  );
});

export default VelenoStream;
