import React from 'react';

export const iconData = {
  "id": "CalciProposal",
  "name": "CalciProposal",
  "category": "OF",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.42 9.16 L 14.54 11.95 L 14.14 13.78 L 14.57 15.31 L 15.81 12.95 L 12.82 14.52 L 10.32 12.91 L 8.76 14.32 L 7.38 13.57 L 7.00 12.30 L 7.14 13.20 L 7.91 13.62 L 8.43 11.16 L 7.98 11.79 L 9.32 11.41 L 11.04 8.68 L 11.97 10.53 L 14.60 12.34 L 15.05 14.07 L 15.31 12.33 L 14.88 14.26 L 14.30 15.40"
      }
    ],
    [
      "path",
      {
        "d": "M 16.19 10.65 L 16.92 7.91 L 15.69 6.71 L 13.51 9.15 L 11.36 8.12 L 8.86 9.96 L 9.23 7.24 L 6.51 7.27 L 3.68 8.41 L 1.69 7.25 L 1.77 5.00 L 4.64 4.28 L 7.45 5.14 L 9.99 6.26 L 7.83 3.74 L 7.84 3.64 L 5.90 1.92 L 8.57 2.14 L 6.17 5.00 L 8.14 6.25 L 7.40 5.83 L 4.91 4.00 L 5.21 1.49 L 6.27 1.00 L 4.59 1.83"
      }
    ]
  ]
};

export const CalciProposal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.42 9.16 L 14.54 11.95 L 14.14 13.78 L 14.57 15.31 L 15.81 12.95 L 12.82 14.52 L 10.32 12.91 L 8.76 14.32 L 7.38 13.57 L 7.00 12.30 L 7.14 13.20 L 7.91 13.62 L 8.43 11.16 L 7.98 11.79 L 9.32 11.41 L 11.04 8.68 L 11.97 10.53 L 14.60 12.34 L 15.05 14.07 L 15.31 12.33 L 14.88 14.26 L 14.30 15.40" />
      <path d="M 16.19 10.65 L 16.92 7.91 L 15.69 6.71 L 13.51 9.15 L 11.36 8.12 L 8.86 9.96 L 9.23 7.24 L 6.51 7.27 L 3.68 8.41 L 1.69 7.25 L 1.77 5.00 L 4.64 4.28 L 7.45 5.14 L 9.99 6.26 L 7.83 3.74 L 7.84 3.64 L 5.90 1.92 L 8.57 2.14 L 6.17 5.00 L 8.14 6.25 L 7.40 5.83 L 4.91 4.00 L 5.21 1.49 L 6.27 1.00 L 4.59 1.83" />
      {children}
    </svg>
  );
});

export default CalciProposal;
