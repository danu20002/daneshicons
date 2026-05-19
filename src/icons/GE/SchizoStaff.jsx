import React from 'react';

export const iconData = {
  "id": "SchizoStaff",
  "name": "SchizoStaff",
  "category": "GE",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.93 18.07 L 10.22 15.14 L 9.60 12.42 L 11.00 14.76 L 13.26 16.67 L 12.64 14.90 L 14.26 11.92 L 12.84 12.21 L 13.78 10.24 L 16.36 7.88 L 15.42 9.58 L 15.06 10.46 L 13.72 9.73 L 15.12 6.95 L 18.01 9.37 L 20.92 11.80 L 23.00 10.66"
      }
    ],
    [
      "path",
      {
        "d": "M 8.07 3.96 L 7.69 5.06 L 8.81 5.10 L 8.34 5.38 L 5.60 6.66 L 3.79 9.25 L 2.88 6.39 L 1.87 7.98 L 4.51 5.95 L 7.26 5.19 L 8.30 5.99 L 7.40 7.36 L 10.20 9.53 L 12.45 7.49 L 12.97 5.91 L 11.19 8.27 L 12.88 8.67"
      }
    ]
  ]
};

export const SchizoStaff = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.93 18.07 L 10.22 15.14 L 9.60 12.42 L 11.00 14.76 L 13.26 16.67 L 12.64 14.90 L 14.26 11.92 L 12.84 12.21 L 13.78 10.24 L 16.36 7.88 L 15.42 9.58 L 15.06 10.46 L 13.72 9.73 L 15.12 6.95 L 18.01 9.37 L 20.92 11.80 L 23.00 10.66" />
      <path d="M 8.07 3.96 L 7.69 5.06 L 8.81 5.10 L 8.34 5.38 L 5.60 6.66 L 3.79 9.25 L 2.88 6.39 L 1.87 7.98 L 4.51 5.95 L 7.26 5.19 L 8.30 5.99 L 7.40 7.36 L 10.20 9.53 L 12.45 7.49 L 12.97 5.91 L 11.19 8.27 L 12.88 8.67" />
      {children}
    </svg>
  );
});

export default SchizoStaff;
