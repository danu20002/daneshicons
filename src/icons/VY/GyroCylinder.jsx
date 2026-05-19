import React from 'react';

export const iconData = {
  "id": "GyroCylinder",
  "name": "GyroCylinder",
  "category": "VY",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.51 3.97 C 19.95 15.70, 12.77 6.89, 14.40 14.26"
      }
    ],
    [
      "path",
      {
        "d": "M 9.79 2.30 C 5.26 14.97, 5.01 8.28, 18.36 19.44"
      }
    ],
    [
      "path",
      {
        "d": "M 7.79 8.00 C 4.77 12.80, 9.81 16.60, 15.94 19.04"
      }
    ]
  ]
};

export const GyroCylinder = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.51 3.97 C 19.95 15.70, 12.77 6.89, 14.40 14.26" />
      <path d="M 9.79 2.30 C 5.26 14.97, 5.01 8.28, 18.36 19.44" />
      <path d="M 7.79 8.00 C 4.77 12.80, 9.81 16.60, 15.94 19.04" />
      {children}
    </svg>
  );
});

export default GyroCylinder;
