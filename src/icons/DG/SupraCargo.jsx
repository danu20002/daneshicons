import React from 'react';

export const iconData = {
  "id": "SupraCargo",
  "name": "SupraCargo",
  "category": "DG",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.46 7.09 L 7.47 6.11 L 5.04 3.21 L 6.24 5.93 L 7.89 8.30 L 6.99 10.53 L 5.05 10.02 L 6.46 9.14 L 7.53 12.10 L 8.30 10.49 L 10.59 10.14 L 7.76 11.92 L 6.99 13.11 L 4.00 16.05 L 5.33 16.39 L 6.35 18.06 L 5.51 18.88 L 4.36 21.15 L 4.50 22.13 L 6.82 23.00 L 9.26 23.00 L 9.25 21.55 L 7.86 21.58 L 8.82 19.88 L 7.33 19.88 L 7.06 22.04"
      }
    ],
    [
      "path",
      {
        "d": "M 12.10 10.57 L 14.79 11.52 L 14.09 10.88 L 12.40 8.38 L 11.42 7.80 L 9.82 9.51 L 7.33 6.72 L 5.74 3.77 L 4.24 1.00 L 3.58 1.00 L 3.68 1.00 L 2.27 2.36 L 4.76 5.28 L 4.10 4.49 L 5.80 7.02 L 6.57 9.92 L 6.81 8.70 L 7.90 7.87 L 5.04 8.74 L 4.81 8.97 L 7.50 9.59 L 4.89 7.86 L 4.71 6.92 L 4.49 4.69 L 1.83 5.17 L 2.70 6.30 L 1.91 3.60 L 1.00 5.27 L 1.00 7.94 L 2.49 10.19"
      }
    ]
  ]
};

export const SupraCargo = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.46 7.09 L 7.47 6.11 L 5.04 3.21 L 6.24 5.93 L 7.89 8.30 L 6.99 10.53 L 5.05 10.02 L 6.46 9.14 L 7.53 12.10 L 8.30 10.49 L 10.59 10.14 L 7.76 11.92 L 6.99 13.11 L 4.00 16.05 L 5.33 16.39 L 6.35 18.06 L 5.51 18.88 L 4.36 21.15 L 4.50 22.13 L 6.82 23.00 L 9.26 23.00 L 9.25 21.55 L 7.86 21.58 L 8.82 19.88 L 7.33 19.88 L 7.06 22.04" />
      <path d="M 12.10 10.57 L 14.79 11.52 L 14.09 10.88 L 12.40 8.38 L 11.42 7.80 L 9.82 9.51 L 7.33 6.72 L 5.74 3.77 L 4.24 1.00 L 3.58 1.00 L 3.68 1.00 L 2.27 2.36 L 4.76 5.28 L 4.10 4.49 L 5.80 7.02 L 6.57 9.92 L 6.81 8.70 L 7.90 7.87 L 5.04 8.74 L 4.81 8.97 L 7.50 9.59 L 4.89 7.86 L 4.71 6.92 L 4.49 4.69 L 1.83 5.17 L 2.70 6.30 L 1.91 3.60 L 1.00 5.27 L 1.00 7.94 L 2.49 10.19" />
      {children}
    </svg>
  );
});

export default SupraCargo;
