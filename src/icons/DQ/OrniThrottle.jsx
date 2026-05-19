import React from 'react';

export const iconData = {
  "id": "OrniThrottle",
  "name": "OrniThrottle",
  "category": "DQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.80 12.00 a 2.20 2.20 0 1 0 4.40 0 a 2.20 2.20 0 1 0 -4.40 0",
        "stroke-dasharray": "5 3"
      }
    ],
    [
      "path",
      {
        "d": "M 7.67 12.00 a 4.33 4.33 0 1 0 8.66 0 a 4.33 4.33 0 1 0 -8.66 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.57 12.00 a 6.43 6.43 0 1 0 12.85 0 a 6.43 6.43 0 1 0 -12.85 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.63 12.00 a 8.37 8.37 0 1 0 16.74 0 a 8.37 8.37 0 1 0 -16.74 0"
      }
    ]
  ]
};

export const OrniThrottle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.80 12.00 a 2.20 2.20 0 1 0 4.40 0 a 2.20 2.20 0 1 0 -4.40 0" stroke-dasharray="5 3" />
      <path d="M 7.67 12.00 a 4.33 4.33 0 1 0 8.66 0 a 4.33 4.33 0 1 0 -8.66 0" />
      <path d="M 5.57 12.00 a 6.43 6.43 0 1 0 12.85 0 a 6.43 6.43 0 1 0 -12.85 0" />
      <path d="M 3.63 12.00 a 8.37 8.37 0 1 0 16.74 0 a 8.37 8.37 0 1 0 -16.74 0" />
      {children}
    </svg>
  );
});

export default OrniThrottle;
