import React from 'react';

export const iconData = {
  "id": "VeloceMight",
  "name": "VeloceMight",
  "category": "ES",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.12 9.90 L 10.81 11.94 L 9.72 10.44 L 6.98 10.59 L 5.28 10.34 L 3.32 9.44 L 1.00 10.08 L 1.00 7.32 L 2.93 5.19 L 1.00 2.57 L 2.14 3.65 L 1.00 1.83 L 1.00 1.00 L 3.35 1.19 L 4.51 1.00 L 6.36 1.00 L 5.28 1.00 L 5.91 1.00 L 3.50 3.99 L 1.00 1.82 L 1.00 2.92"
      }
    ],
    [
      "path",
      {
        "d": "M 10.74 20.48 L 10.22 23.00 L 8.83 21.01 L 10.70 19.63 L 10.29 19.13 L 11.24 20.06 L 10.67 22.82 L 13.14 23.00 L 14.12 22.29 L 12.48 19.84 L 13.20 20.43 L 14.30 19.32 L 14.11 22.03 L 14.24 20.02 L 12.63 18.92 L 14.75 20.29 L 16.35 19.07 L 14.46 21.09 L 13.84 18.73 L 14.51 18.02 L 16.96 15.73 L 15.50 18.41 L 13.24 18.96 L 11.68 21.36 L 12.06 21.69"
      }
    ]
  ]
};

export const VeloceMight = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.12 9.90 L 10.81 11.94 L 9.72 10.44 L 6.98 10.59 L 5.28 10.34 L 3.32 9.44 L 1.00 10.08 L 1.00 7.32 L 2.93 5.19 L 1.00 2.57 L 2.14 3.65 L 1.00 1.83 L 1.00 1.00 L 3.35 1.19 L 4.51 1.00 L 6.36 1.00 L 5.28 1.00 L 5.91 1.00 L 3.50 3.99 L 1.00 1.82 L 1.00 2.92" />
      <path d="M 10.74 20.48 L 10.22 23.00 L 8.83 21.01 L 10.70 19.63 L 10.29 19.13 L 11.24 20.06 L 10.67 22.82 L 13.14 23.00 L 14.12 22.29 L 12.48 19.84 L 13.20 20.43 L 14.30 19.32 L 14.11 22.03 L 14.24 20.02 L 12.63 18.92 L 14.75 20.29 L 16.35 19.07 L 14.46 21.09 L 13.84 18.73 L 14.51 18.02 L 16.96 15.73 L 15.50 18.41 L 13.24 18.96 L 11.68 21.36 L 12.06 21.69" />
      {children}
    </svg>
  );
});

export default VeloceMight;
