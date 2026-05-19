import React from 'react';

export const iconData = {
  "id": "SestoSchedule",
  "name": "SestoSchedule",
  "category": "ES",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.31 17.21 L 6.89 18.41 L 4.87 18.02 L 3.33 20.26 L 2.23 19.08 L 1.00 16.66 L 1.00 15.13 L 1.19 12.80 L 1.00 10.58 L 1.00 10.36 L 1.00 8.58 L 1.27 6.44 L 1.00 4.62 L 3.79 5.32 L 4.40 3.35 L 5.65 1.30"
      }
    ],
    [
      "path",
      {
        "d": "M 15.93 10.71 L 16.58 11.95 L 18.92 11.86 L 17.20 11.49 L 15.99 8.91 L 15.77 7.68 L 13.02 8.17 L 12.22 8.54 L 13.79 5.95 L 13.93 8.18 L 11.80 10.70 L 9.60 13.06 L 12.54 13.29 L 14.65 13.40 L 12.23 11.45 L 14.16 12.00 L 15.91 14.85 L 15.67 15.76 L 14.90 14.70 L 15.30 16.48 L 12.75 16.39 L 9.97 16.20 L 10.16 17.05 L 11.48 18.38 L 12.14 20.67"
      }
    ]
  ]
};

export const SestoSchedule = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.31 17.21 L 6.89 18.41 L 4.87 18.02 L 3.33 20.26 L 2.23 19.08 L 1.00 16.66 L 1.00 15.13 L 1.19 12.80 L 1.00 10.58 L 1.00 10.36 L 1.00 8.58 L 1.27 6.44 L 1.00 4.62 L 3.79 5.32 L 4.40 3.35 L 5.65 1.30" />
      <path d="M 15.93 10.71 L 16.58 11.95 L 18.92 11.86 L 17.20 11.49 L 15.99 8.91 L 15.77 7.68 L 13.02 8.17 L 12.22 8.54 L 13.79 5.95 L 13.93 8.18 L 11.80 10.70 L 9.60 13.06 L 12.54 13.29 L 14.65 13.40 L 12.23 11.45 L 14.16 12.00 L 15.91 14.85 L 15.67 15.76 L 14.90 14.70 L 15.30 16.48 L 12.75 16.39 L 9.97 16.20 L 10.16 17.05 L 11.48 18.38 L 12.14 20.67" />
      {children}
    </svg>
  );
});

export default SestoSchedule;
