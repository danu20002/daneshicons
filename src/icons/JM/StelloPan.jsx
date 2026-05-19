import React from 'react';

export const iconData = {
  "id": "StelloPan",
  "name": "StelloPan",
  "category": "JM",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.75 12.00 a 2.25 2.25 0 1 0 4.50 0 a 2.25 2.25 0 1 0 -4.50 0",
        "stroke-dasharray": "5 1"
      }
    ],
    [
      "path",
      {
        "d": "M 8.10 12.00 a 3.90 3.90 0 1 0 7.81 0 a 3.90 3.90 0 1 0 -7.81 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.61 12.00 a 5.39 5.39 0 1 0 10.78 0 a 5.39 5.39 0 1 0 -10.78 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.18 12.00 a 6.82 6.82 0 1 0 13.63 0 a 6.82 6.82 0 1 0 -13.63 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.43 12.00 a 8.57 8.57 0 1 0 17.14 0 a 8.57 8.57 0 1 0 -17.14 0"
      }
    ]
  ]
};

export const StelloPan = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.75 12.00 a 2.25 2.25 0 1 0 4.50 0 a 2.25 2.25 0 1 0 -4.50 0" stroke-dasharray="5 1" />
      <path d="M 8.10 12.00 a 3.90 3.90 0 1 0 7.81 0 a 3.90 3.90 0 1 0 -7.81 0" />
      <path d="M 6.61 12.00 a 5.39 5.39 0 1 0 10.78 0 a 5.39 5.39 0 1 0 -10.78 0" />
      <path d="M 5.18 12.00 a 6.82 6.82 0 1 0 13.63 0 a 6.82 6.82 0 1 0 -13.63 0" />
      <path d="M 3.43 12.00 a 8.57 8.57 0 1 0 17.14 0 a 8.57 8.57 0 1 0 -17.14 0" />
      {children}
    </svg>
  );
});

export default StelloPan;
