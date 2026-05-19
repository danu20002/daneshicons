import React from 'react';

export const iconData = {
  "id": "StridoTicket",
  "name": "StridoTicket",
  "category": "PR",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.14 5.36 L 9.00 3.88 L 7.11 5.98 L 8.20 5.53 L 9.27 7.70 L 7.42 4.83 L 5.38 4.17 L 7.73 3.13 L 7.02 2.47 L 5.79 1.05 L 7.45 3.78 L 5.75 3.87 L 6.92 5.35 L 6.58 5.32 L 7.59 6.93 L 8.21 8.74 L 9.81 8.50 L 9.56 6.50 L 11.89 5.32 L 14.87 4.56 L 17.20 4.03 L 17.02 1.51 L 16.58 3.46 L 17.28 4.80 L 16.84 5.32 L 18.44 5.46"
      }
    ],
    [
      "path",
      {
        "d": "M 9.29 6.42 L 11.27 6.05 L 11.95 4.77 L 12.87 2.55 L 12.86 5.43 L 10.41 6.32 L 12.00 7.31 L 10.52 7.26 L 8.55 9.77 L 10.28 10.35 L 10.59 12.70 L 8.82 11.31 L 10.71 12.16 L 10.64 12.93 L 8.23 11.64 L 9.23 9.30 L 10.94 10.28 L 9.49 9.93 L 7.30 7.66 L 5.40 4.94 L 7.93 3.91 L 6.06 5.63 L 3.07 4.29"
      }
    ]
  ]
};

export const StridoTicket = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.14 5.36 L 9.00 3.88 L 7.11 5.98 L 8.20 5.53 L 9.27 7.70 L 7.42 4.83 L 5.38 4.17 L 7.73 3.13 L 7.02 2.47 L 5.79 1.05 L 7.45 3.78 L 5.75 3.87 L 6.92 5.35 L 6.58 5.32 L 7.59 6.93 L 8.21 8.74 L 9.81 8.50 L 9.56 6.50 L 11.89 5.32 L 14.87 4.56 L 17.20 4.03 L 17.02 1.51 L 16.58 3.46 L 17.28 4.80 L 16.84 5.32 L 18.44 5.46" />
      <path d="M 9.29 6.42 L 11.27 6.05 L 11.95 4.77 L 12.87 2.55 L 12.86 5.43 L 10.41 6.32 L 12.00 7.31 L 10.52 7.26 L 8.55 9.77 L 10.28 10.35 L 10.59 12.70 L 8.82 11.31 L 10.71 12.16 L 10.64 12.93 L 8.23 11.64 L 9.23 9.30 L 10.94 10.28 L 9.49 9.93 L 7.30 7.66 L 5.40 4.94 L 7.93 3.91 L 6.06 5.63 L 3.07 4.29" />
      {children}
    </svg>
  );
});

export default StridoTicket;
