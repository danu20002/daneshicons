import React from 'react';

export const iconData = {
  "id": "TurrisFeel",
  "name": "TurrisFeel",
  "category": "GX",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.27 5.93 L 4.16 4.40 L 5.55 4.95 L 7.90 7.00 L 4.94 6.45 L 5.64 5.95 L 4.52 5.24 L 2.67 4.89 L 3.84 2.33 L 2.07 1.97 L 1.00 1.00 L 1.00 1.00 L 1.93 2.77 L 3.56 4.40 L 2.05 3.16 L 1.00 4.87 L 1.00 4.53 L 1.00 3.92 L 2.04 4.37"
      }
    ],
    [
      "path",
      {
        "d": "M 16.29 11.32 L 14.67 8.92 L 14.10 10.02 L 14.36 10.98 L 12.04 8.71 L 13.63 7.75 L 11.97 10.64 L 11.39 9.01 L 11.00 11.45 L 8.84 9.77 L 6.68 8.49 L 9.04 8.11 L 10.92 10.38 L 12.73 12.23 L 12.07 13.63 L 14.60 15.85 L 14.92 14.75 L 13.86 13.13 L 10.94 13.56 L 12.08 13.99 L 12.09 15.02 L 9.12 15.63 L 8.35 13.74 L 10.18 16.50 L 13.16 17.70 L 14.20 15.63 L 13.93 14.39 L 11.84 11.58 L 10.02 11.18 L 7.59 13.56 L 5.75 15.85 L 6.07 13.18 L 6.64 14.21 L 5.70 12.90 L 8.56 12.30 L 7.02 13.11"
      }
    ]
  ]
};

export const TurrisFeel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.27 5.93 L 4.16 4.40 L 5.55 4.95 L 7.90 7.00 L 4.94 6.45 L 5.64 5.95 L 4.52 5.24 L 2.67 4.89 L 3.84 2.33 L 2.07 1.97 L 1.00 1.00 L 1.00 1.00 L 1.93 2.77 L 3.56 4.40 L 2.05 3.16 L 1.00 4.87 L 1.00 4.53 L 1.00 3.92 L 2.04 4.37" />
      <path d="M 16.29 11.32 L 14.67 8.92 L 14.10 10.02 L 14.36 10.98 L 12.04 8.71 L 13.63 7.75 L 11.97 10.64 L 11.39 9.01 L 11.00 11.45 L 8.84 9.77 L 6.68 8.49 L 9.04 8.11 L 10.92 10.38 L 12.73 12.23 L 12.07 13.63 L 14.60 15.85 L 14.92 14.75 L 13.86 13.13 L 10.94 13.56 L 12.08 13.99 L 12.09 15.02 L 9.12 15.63 L 8.35 13.74 L 10.18 16.50 L 13.16 17.70 L 14.20 15.63 L 13.93 14.39 L 11.84 11.58 L 10.02 11.18 L 7.59 13.56 L 5.75 15.85 L 6.07 13.18 L 6.64 14.21 L 5.70 12.90 L 8.56 12.30 L 7.02 13.11" />
      {children}
    </svg>
  );
});

export default TurrisFeel;
