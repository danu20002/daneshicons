import React from 'react';

export const iconData = {
  "id": "SkeletoSatire",
  "name": "SkeletoSatire",
  "category": "OY",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.81 13.55 L 17.08 13.59 L 18.82 12.54 L 16.51 10.91 L 15.15 9.34 L 17.98 8.91 L 17.21 6.05 L 15.40 8.52 L 17.42 6.17 L 15.62 7.34 L 17.90 9.52 L 18.26 11.22 L 16.64 13.26 L 14.78 14.02 L 11.90 11.66 L 10.27 10.38 L 10.85 13.14 L 10.76 10.88 L 8.04 9.30 L 7.08 6.60 L 4.35 3.98 L 3.45 6.77 L 4.29 7.85 L 5.71 9.74 L 4.88 7.62 L 4.80 7.19 L 6.30 6.18 L 3.87 5.34 L 2.59 2.64 L 2.62 2.80 L 3.83 4.49 L 1.58 5.52 L 3.37 6.15 L 1.11 7.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.58 3.49 L 4.93 4.56 L 2.20 4.12 L 1.00 6.43 L 1.00 6.02 L 1.18 3.65 L 3.71 5.06 L 6.20 6.91 L 4.74 5.93 L 2.80 3.97 L 2.91 6.60 L 1.00 4.39 L 1.00 2.70 L 1.07 4.63 L 1.00 6.85 L 1.40 7.59 L 1.91 6.13 L 1.00 7.25 L 1.94 6.41 L 3.86 6.63 L 2.90 8.49 L 1.00 8.64"
      }
    ]
  ]
};

export const SkeletoSatire = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.81 13.55 L 17.08 13.59 L 18.82 12.54 L 16.51 10.91 L 15.15 9.34 L 17.98 8.91 L 17.21 6.05 L 15.40 8.52 L 17.42 6.17 L 15.62 7.34 L 17.90 9.52 L 18.26 11.22 L 16.64 13.26 L 14.78 14.02 L 11.90 11.66 L 10.27 10.38 L 10.85 13.14 L 10.76 10.88 L 8.04 9.30 L 7.08 6.60 L 4.35 3.98 L 3.45 6.77 L 4.29 7.85 L 5.71 9.74 L 4.88 7.62 L 4.80 7.19 L 6.30 6.18 L 3.87 5.34 L 2.59 2.64 L 2.62 2.80 L 3.83 4.49 L 1.58 5.52 L 3.37 6.15 L 1.11 7.00" />
      <path d="M 5.58 3.49 L 4.93 4.56 L 2.20 4.12 L 1.00 6.43 L 1.00 6.02 L 1.18 3.65 L 3.71 5.06 L 6.20 6.91 L 4.74 5.93 L 2.80 3.97 L 2.91 6.60 L 1.00 4.39 L 1.00 2.70 L 1.07 4.63 L 1.00 6.85 L 1.40 7.59 L 1.91 6.13 L 1.00 7.25 L 1.94 6.41 L 3.86 6.63 L 2.90 8.49 L 1.00 8.64" />
      {children}
    </svg>
  );
});

export default SkeletoSatire;
