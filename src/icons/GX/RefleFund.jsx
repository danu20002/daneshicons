import React from 'react';

export const iconData = {
  "id": "RefleFund",
  "name": "RefleFund",
  "category": "GX",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.09 3.26 L 6.90 3.80 L 7.83 2.95 L 10.50 4.25 L 9.77 4.91 L 10.18 5.40 L 11.79 7.58 L 11.28 8.26 L 13.15 8.74 L 13.96 7.94 L 14.88 8.55 L 14.69 6.25 L 13.39 8.71 L 16.27 6.53 L 15.82 9.52 L 14.28 7.68 L 12.55 10.67"
      }
    ],
    [
      "path",
      {
        "d": "M 4.86 13.54 L 1.90 14.27 L 1.21 15.51 L 3.63 17.38 L 1.00 18.25 L 1.00 15.27 L 1.00 15.81 L 2.39 14.53 L 1.00 16.25 L 1.00 18.95 L 2.22 16.96 L 4.11 15.75 L 4.66 15.62 L 3.29 14.10 L 4.54 13.16 L 6.68 15.88 L 5.40 17.00 L 7.96 19.36 L 6.42 19.81 L 4.34 21.86 L 5.03 23.00 L 7.41 22.70 L 10.14 23.00 L 11.45 23.00 L 8.71 23.00 L 7.39 23.00 L 4.78 23.00 L 2.50 20.64 L 2.58 17.80 L 4.53 16.34 L 4.25 14.77 L 3.17 16.33 L 1.00 16.97"
      }
    ]
  ]
};

export const RefleFund = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.09 3.26 L 6.90 3.80 L 7.83 2.95 L 10.50 4.25 L 9.77 4.91 L 10.18 5.40 L 11.79 7.58 L 11.28 8.26 L 13.15 8.74 L 13.96 7.94 L 14.88 8.55 L 14.69 6.25 L 13.39 8.71 L 16.27 6.53 L 15.82 9.52 L 14.28 7.68 L 12.55 10.67" />
      <path d="M 4.86 13.54 L 1.90 14.27 L 1.21 15.51 L 3.63 17.38 L 1.00 18.25 L 1.00 15.27 L 1.00 15.81 L 2.39 14.53 L 1.00 16.25 L 1.00 18.95 L 2.22 16.96 L 4.11 15.75 L 4.66 15.62 L 3.29 14.10 L 4.54 13.16 L 6.68 15.88 L 5.40 17.00 L 7.96 19.36 L 6.42 19.81 L 4.34 21.86 L 5.03 23.00 L 7.41 22.70 L 10.14 23.00 L 11.45 23.00 L 8.71 23.00 L 7.39 23.00 L 4.78 23.00 L 2.50 20.64 L 2.58 17.80 L 4.53 16.34 L 4.25 14.77 L 3.17 16.33 L 1.00 16.97" />
      {children}
    </svg>
  );
});

export default RefleFund;
